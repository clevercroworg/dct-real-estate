import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Can search by CUID or Slug
        const blog = await prisma.post.findFirst({
            where: {
                OR: [
                    { id: id },
                    { slug: id }
                ]
            }
        });

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, excerpt, content, image, author, published } = body;

        let dataToUpdate: any = { excerpt, content, image, author, published };

        // If title changes, update slug
        if (title) {
            const newSlug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');

            // Ensure uniqueness if slug is actually changing
            let finalSlug = newSlug;
            let counter = 1;

            const existingWithSlug = await prisma.post.findFirst({
                where: {
                    slug: finalSlug,
                    NOT: { id: id }
                }
            });

            if (existingWithSlug) {
                while (await prisma.post.findFirst({ where: { slug: finalSlug, NOT: { id: id } } })) {
                    finalSlug = `${newSlug}-${counter}`;
                    counter++;
                }
            }

            dataToUpdate.title = title;
            dataToUpdate.slug = finalSlug;
        }

        const updatedBlog = await prisma.post.update({
            where: { id: id },
            data: dataToUpdate
        });

        return NextResponse.json(updatedBlog);
    } catch (error: any) {
        console.error('Error updating blog:', error);
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Failed to update blog', details: error.message }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.post.delete({
            where: { id: id }
        });

        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting blog:', error);
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}
