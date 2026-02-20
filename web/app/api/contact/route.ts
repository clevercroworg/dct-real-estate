import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Basic validation
        if (!name || (!email && !phone)) {
            return NextResponse.json(
                { error: 'Name, and either email or phone are required.' },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        // Insert into Supabase
        const { data, error } = await supabase
            .from('contacts')
            .insert([
                {
                    name,
                    email,
                    phone,
                    subject,
                    message: message || '', // Message optional for visit requests
                    status: 'unread',
                },
            ])
            .select();

        if (error) {
            console.error('Supabase insertion error:', error);
            return NextResponse.json(
                { error: 'Failed to submit enquiry. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Enquiry submitted successfully!', data },
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
