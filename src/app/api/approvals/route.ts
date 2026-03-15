import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { pendingApprovals } from '@/lib/db/schema';

// This API will be called by n8n to create a new pending approval
export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    // Basic shared secret check to ensure only n8n can push data here
    if (authHeader !== `Bearer ${process.env.N8N_WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.type || !body.data || !body.resumeUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: type, data, or resumeUrl' },
        { status: 400 }
      );
    }

    const newApproval = await db.insert(pendingApprovals).values({
      type: body.type, // 'topics' or 'content'
      data: body.data, // The raw JSON output from the AI
      n8nResumeUrl: body.resumeUrl,
      status: 'pending'
    }).returning();

    return NextResponse.json({ success: true, id: newApproval[0].id });
  } catch (error: any) {
    console.error('Error saving pending approval:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
