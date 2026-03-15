import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const insightsDirectory = path.join(process.cwd(), 'content/insights');

export interface InsightPost {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
}

export function getAllInsights(): InsightPost[] {
    if (!fs.existsSync(insightsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(insightsDirectory);
    const allInsights = fileNames
        .filter((fileName) => fileName.endsWith('.md') && fileName !== 'template.md')
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(insightsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...data,
                content,
            } as InsightPost;
        });

    // Sort insights by date (descending)
    return allInsights.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getInsightBySlug(slug: string): InsightPost | null {
    try {
        const fullPath = path.join(insightsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) return null;
        
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            ...data,
            content,
        } as InsightPost;
    } catch {
        return null;
    }
}
