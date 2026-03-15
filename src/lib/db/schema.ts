import { pgTable, serial, text, jsonb, timestamp, varchar } from 'drizzle-orm/pg-core';

export const pendingApprovals = pgTable('pending_approvals', {
  id: serial('id').primaryKey(),
  type: varchar('type', { length: 50 }).notNull(), // 'topics' or 'content'
  n8nResumeUrl: text('n8n_resume_url').notNull(),
  data: jsonb('data').notNull(), // Storing all the AI output (topics, or full blog content)
  status: varchar('status', { length: 20 }).default('pending').notNull(), // 'pending', 'approved', 'rejected'
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});
