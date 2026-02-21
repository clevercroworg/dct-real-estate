import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const includeUnpublished = searchParams.get('includeUnpublished') === 'true';

        // Public viewers only see published. Admins see all. 
        const whereClause = includeUnpublished ? {} : { published: true };

        const blogs = await prisma.post.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, excerpt, content, image, author, published } = body;

        if (!title || !excerpt || !content) {
            return NextResponse.json({ error: 'Title, excerpt, and content are required' }, { status: 400 });
        }

        // Auto-generate a URL-friendly slug from the title
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        // Ensure slug uniqueness
        let finalSlug = slug;
        let counter = 1;
        while (await prisma.post.findUnique({ where: { slug: finalSlug } })) {
            finalSlug = `${slug}-${counter}`;
            counter++;
        }

        const newBlog = await prisma.post.create({
            data: {
                title,
                slug: finalSlug,
                excerpt,
                content,
                image: image || null,
                author: author || "DCT Real Estate",
                published: published !== undefined ? published : true,
            }
        });

        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }
}
