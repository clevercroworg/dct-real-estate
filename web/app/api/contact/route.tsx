import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, project, visitDate, visitTime, isBrochureDownload } = body;

        // Basic validation
        if (!name || (!email && !phone)) {
            return NextResponse.json(
                { error: 'Name, and either email or phone are required.' },
                { status: 400 }
            );
        }

        // Insert into MySQL via Prisma
        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                subject,
                project,
                visitDate,
                visitTime,
                isBrochureDownload: isBrochureDownload || false,
                message: message || '',
                status: 'unread',
            }
        });

        return NextResponse.json(
            { message: 'Enquiry submitted successfully!', data: newContact },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
