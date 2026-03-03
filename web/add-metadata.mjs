import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    { path: 'app/(main)/page.tsx', title: 'DCT Real Estate | Trusted Developer in Bilaspur', desc: 'Find premium residential and commercial properties in Bilaspur with DCT Real Estate.' },
    { path: 'app/(main)/about/page.tsx', title: 'About Us | DCT Real Estate', desc: 'Learn more about DCT Real Estate, our vision, and our journey as a leading developer.' },
    { path: 'app/(main)/contact/page.tsx', title: 'Contact Us | DCT Real Estate', desc: 'Get in touch with DCT Real Estate for property inquiries and support.' },
    { path: 'app/(main)/disclaimer/page.tsx', title: 'Disclaimer | DCT Real Estate', desc: 'Read the official disclaimer for DCT Real Estate website and projects.' },
    { path: 'app/(main)/privacy-policy/page.tsx', title: 'Privacy Policy | DCT Real Estate', desc: 'Learn how DCT Real Estate protects your privacy and personal information.' },
    { path: 'app/(main)/terms-and-conditions/page.tsx', title: 'Terms & Conditions | DCT Real Estate', desc: 'Terms and conditions for using the DCT Real Estate website and services.' },
    { path: 'app/(main)/media/page.tsx', title: 'Media & Recognitions | DCT Real Estate', desc: 'Explore the latest news, media coverage, and awards for DCT Real Estate.' },
    { path: 'app/(main)/careers/page.tsx', title: 'Careers | DCT Real Estate', desc: 'Join the DCT Real Estate team. Explore exciting career opportunities with us.' },
    { path: 'app/(main)/leadership/page.tsx', title: 'Leadership | DCT Real Estate', desc: 'Meet the visionaries and leaders behind DCT Real Estate.' },
    { path: 'app/(main)/directors-message/page.tsx', title: "Director's Message | DCT Real Estate", desc: 'Read the message from the Director of DCT Real Estate on our commitment to excellence.' },
    { path: 'app/(main)/our-ventures/page.tsx', title: 'Our Ventures | DCT Real Estate', desc: 'Discover the diverse business ventures and divisions of DCT Real Estate.' },
    { path: 'app/(main)/projects/page.tsx', title: 'All Projects | DCT Real Estate', desc: 'Explore all ongoing, completed, and upcoming projects by DCT Real Estate.' },
    { path: 'app/(main)/projects/completed/page.tsx', title: 'Completed Projects | DCT Real Estate', desc: 'View the successful and completed real estate projects by DCT.' },
    { path: 'app/(main)/projects/ongoing/page.tsx', title: 'Ongoing Projects | DCT Real Estate', desc: 'Check out the currently active and ongoing residential and commercial projects.' },
    { path: 'app/(main)/projects/upcoming/page.tsx', title: 'Upcoming Projects | DCT Real Estate', desc: 'Discover upcoming premium real estate projects in Bilaspur.' },
    { path: 'app/(main)/projects/commercial/page.tsx', title: 'Commercial Projects | DCT Real Estate', desc: 'Explore premium commercial spaces and office projects in Bilaspur.' },
    { path: 'app/(main)/thank-you/page.tsx', title: 'Thank You | DCT Real Estate', desc: 'Thank you for contacting DCT Real Estate. We will get back to you shortly.' },
    { path: 'app/(main)/blog/page.tsx', title: 'Blog | DCT Real Estate', desc: 'Read the latest real estate trends, tips, and updates on the DCT Blog.' },
    { path: 'app/admin/login/page.tsx', title: 'Admin Login | DCT', desc: 'Login to the DCT Admin Panel' },
    { path: 'app/admin/dashboard/page.tsx', title: 'Admin Dashboard | DCT', desc: 'Manage leads and requests in the DCT Admin Panel' },
    { path: 'app/admin/blogs/page.tsx', title: 'Manage Blogs | DCT', desc: 'Manage blog posts in the DCT Admin Panel' }
];

pages.forEach(p => {
    const fullPath = path.resolve(__dirname, p.path);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');

    if (content.includes('export const metadata') || content.includes('export async function generateMetadata')) {
        console.log(`Skipped ${p.path} (already has metadata)`);
        return;
    }

    // Find the last import statement
    const importRegex = /^import\s+.*?['"];?$/gm;
    let match;
    let lastImportIndex = 0;

    while ((match = importRegex.exec(content)) !== null) {
        lastImportIndex = match.index + match[0].length;
    }

    let metadataImport = '';
    if (!content.includes('import { Metadata }') && !content.includes('import type { Metadata }')) {
        metadataImport = `\nimport { Metadata } from 'next';\n`;
    }

    const metadataBlock = `
export const metadata: Metadata = {
  title: '${p.title}',
  description: '${p.desc}',
};
`;

    content = content.slice(0, lastImportIndex) + metadataImport + metadataBlock + content.slice(lastImportIndex);

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${p.path}`);
});
