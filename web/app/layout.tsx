import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import './(main)/globals.css';

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://dctdevelopers.com'),
    title: {
        default: 'DCT Real Estate | Trusted Developers in Bilaspur',
        template: '%s | DCT Real Estate'
    },
    description: 'DCT Real Estate Developers - Leading property developers in Bilaspur offering premium residential projects, villas, and plots with trust and excellence.',
    keywords: ['Real Estate Bilaspur', 'DCT Developers', 'Property in Bilaspur', 'Villas in Bilaspur', 'Plots in Bilaspur'],
    authors: [{ name: 'DCT Real Estate' }],
    openGraph: {
        title: 'DCT Real Estate | Trusted Developers in Bilaspur',
        description: 'Premium residential projects, villas, and apartments in Bilaspur. Built with trust and excellence.',
        url: 'https://dctdevelopers.com',
        siteName: 'DCT Real Estate',
        images: [
            {
                url: '/images/branding/logo.png',
                width: 1200,
                height: 630,
                alt: 'DCT Real Estate Logo',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DCT Real Estate | Trusted Developers in Bilaspur',
        description: 'Leading property developers in Bilaspur offering premium residential projects with trust and excellence.',
        images: ['/images/branding/logo.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Preconnect to speed up icon loading */}
                <link rel="preconnect" href="https://unpkg.com" />
                <link rel="dns-prefetch" href="https://unpkg.com" />

                <Script
                    type="module"
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
                    strategy="afterInteractive"
                />
                <Script
                    noModule
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${dmSans.variable} ${inter.variable} font-body antialiased`}>
                {children}
            </body>
        </html>
    );
}
