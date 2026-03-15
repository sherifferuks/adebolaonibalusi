import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { pendingApprovals } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// This API will be called by the frontend dashboard to list pending approvals
export async function GET(request: Request) {
  try {
    const approvals = await db
      .select()
      .from(pendingApprovals)
      .where(eq(pendingApprovals.status, 'pending'))
      .orderBy(desc(pendingApprovals.createdAt));
      
    // Return them parsed
    return NextResponse.json({
      success: true, 
      data: approvals.map(app => ({
        ...app,
        data: typeof app.data === 'string' ? JSON.parse(app.data) : app.data
      }))
    });
  } catch (error: any) {
    console.error('Error fetching pending approvals:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Complete an approval by marking it done and calling the n8n resume URL
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, action } = body; // action is 'approve' or 'reject'
    
    // First, find the approval to get the resumeURL
    const approval = await db.select().from(pendingApprovals).where(eq(pendingApprovals.id, id));
    if (!approval.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    
    // Call the n8n webhook URL to resume the workflow
    const resumeUrl = approval[0].n8nResumeUrl;
    try {
      // We append ?action=approve or ?action=reject so the n8n 'If' node knows what to do
      await fetch(`${resumeUrl}?action=${action}`, { method: 'GET' });
    } catch(err) {
      console.warn('Failed to call n8n resume webhook. It may be expired.', err);
      // We still proceed to mark it as resolved in the dashboard
    }
    
    // Update the DB status
    await db.update(pendingApprovals)
      .set({ status: action === 'approve' ? 'approved' : 'rejected' })
      .where(eq(pendingApprovals.id, id));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error resolving approval:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
