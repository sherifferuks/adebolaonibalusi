import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { pendingApprovals } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// This API will be called by the frontend dashboard to list pending and historical approvals
export async function GET() {
  try {
    const allItems = await db
      .select()
      .from(pendingApprovals)
      .orderBy(desc(pendingApprovals.createdAt));
      
    const pending = allItems.filter(i => i.status === 'pending');
    const history = allItems.filter(i => i.status !== 'pending');

    return NextResponse.json({
      success: true, 
      data: {
        pending: pending.map(app => ({
          ...app,
          data: typeof app.data === 'string' ? JSON.parse(app.data) : app.data
        })),
        history: history.map(app => ({
          ...app,
          data: typeof app.data === 'string' ? JSON.parse(app.data) : app.data
        }))
      }
    });
  } catch (error: any) {
    console.error('Error fetching approvals:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Complete an approval by marking it done and calling n8n
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, action, selection } = body; // selection is optional (for topics)
    
    const approval = await db.select().from(pendingApprovals).where(eq(pendingApprovals.id, id));
    if (!approval.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const item = approval[0];
    
    // Call n8n resume URL
    try {
      let resumeUrl = `${item.n8nResumeUrl}?action=${action}`;
      if (selection) {
        resumeUrl += `&selection=${encodeURIComponent(selection)}`;
      }
      await fetch(resumeUrl, { method: 'GET' });
    } catch(err) {
      console.warn('Failed to call n8n resume webhook', err);
    }
    
    // Update the DB status and potentially record the selection in data
    const updatedData = selection 
      ? { ...(item.data as object), selectedTopic: selection } 
      : item.data;

    await db.update(pendingApprovals)
      .set({ 
        status: action === 'approve' ? 'approved' : 'rejected',
        data: updatedData,
        updatedAt: new Date()
      })
      .where(eq(pendingApprovals.id, id));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error resolving approval:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
