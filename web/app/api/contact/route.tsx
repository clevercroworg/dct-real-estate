import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml({ name, email, phone, subject, message, project, visitDate, visitTime, isBrochureDownload }: any) {
    const rows = [
        { label: 'Name', value: name },
        { label: 'Email', value: email || 'N/A' },
        { label: 'Phone', value: phone || 'N/A' },
        project ? { label: 'Project', value: project } : null,
        subject ? { label: 'Subject', value: subject } : null,
        visitDate ? { label: 'Site Visit Date', value: visitDate } : null,
        visitTime ? { label: 'Site Visit Time', value: visitTime } : null,
        isBrochureDownload ? { label: 'Action', value: 'Brochure Download Request' } : null,
    ].filter(Boolean);

    const tableRows = rows.map(r => `
        <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;width:150px">${r!.label}</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee">${r!.value}</td>
        </tr>
    `).join('');

    const messageBlock = message ? `
        <div style="margin-top:30px">
            <p style="font-weight:bold;margin-bottom:10px">Message:</p>
            <div style="padding:15px;background-color:#f5f5f5;border-radius:4px;font-style:italic">${message}</div>
        </div>
    ` : '';

    return `
    <div style="font-family:Helvetica,Arial,sans-serif;background-color:#f9f9f9;padding:40px 20px;color:#333">
        <div style="max-width:600px;margin:0 auto;background-color:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.05)">
            <div style="background-color:#b8860b;padding:20px;text-align:center">
                <h1 style="color:#fff;margin:0;font-size:24px">🏠 New Website Enquiry</h1>
            </div>
            <div style="padding:30px">
                <p style="font-size:16px;line-height:1.6">You have received a new lead from the DCT Real Estate website.</p>
                <table style="width:100%;border-collapse:collapse;margin-top:20px">
                    ${tableRows}
                </table>
                ${messageBlock}
            </div>
            <div style="background-color:#f5f5f5;padding:20px;text-align:center;font-size:12px;color:#888">
                <p>© 2024 DCT Real Estate. All rights reserved.</p>
                <p>This is an automated notification from your website.</p>
            </div>
        </div>
    </div>`;
}

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

        // Save to database
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

        // Send Email notification to admin via Resend
        try {
            await resend.emails.send({
                from: 'DCT Website <onboarding@resend.dev>',
                to: 'admin@dctdevelopers.com',
                subject: `New Lead: ${name}${project ? ` - ${project}` : ''}`,
                html: buildEmailHtml({ name, email, phone, subject, message, project, visitDate, visitTime, isBrochureDownload }),
            });
        } catch (emailError) {
            // Log email error but don't fail the request — DB save already succeeded
            console.error('Failed to send email notification:', emailError);
        }

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

