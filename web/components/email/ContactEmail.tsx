import * as React from 'react';

interface ContactEmailProps {
    name: string;
    email: string;
    phone: string;
    subject?: string;
    message?: string;
    project?: string;
    visitDate?: string;
    visitTime?: string;
    isBrochureDownload?: boolean;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    name,
    email,
    phone,
    subject,
    message,
    project,
    visitDate,
    visitTime,
    isBrochureDownload,
}) => (
    <div style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '40px 20px',
        color: '#333'
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                backgroundColor: '#b8860b', // Gold color to match DCT branding
                padding: '20px',
                textAlign: 'center'
            }}>
                <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>New Website Enquiry</h1>
            </div>
            <div style={{ padding: '30px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>You have received a new lead from the DCT Real Estate website.</p>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', width: '150px' }}>Name</td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{name}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Email</td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{email || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Phone</td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{phone || 'N/A'}</td>
                    </tr>
                    {project && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Project</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{project}</td>
                        </tr>
                    )}
                    {subject && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Subject</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{subject}</td>
                        </tr>
                    )}
                    {visitDate && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Site Visit Date</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{visitDate}</td>
                        </tr>
                    )}
                    {visitTime && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Site Visit Time</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{visitTime}</td>
                        </tr>
                    )}
                    {isBrochureDownload && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Action</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Brochure Download Request</td>
                        </tr>
                    )}
                </table>

                {message && (
                    <div style={{ marginTop: '30px' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Message:</p>
                        <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontStyle: 'italic' }}>
                            {message}
                        </div>
                    </div>
                )}
            </div>
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#888'
            }}>
                <p>© 2024 DCT Real Estate. All rights reserved.</p>
                <p>This is an automated notification from your website's contact form.</p>
            </div>
        </div>
    </div>
);
