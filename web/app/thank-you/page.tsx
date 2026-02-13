'use client';

import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
    const searchParams = useSearchParams();
    const brochureUrl = searchParams.get('file');

    useEffect(() => {
        if (brochureUrl) {
            // Create a temporary link to trigger the download
            const link = document.createElement('a');
            link.href = brochureUrl;
            link.setAttribute('download', '');
            link.setAttribute('target', '_blank');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, [brochureUrl]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-24">
            <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ion-icon name="checkmark-outline" class="w-10 h-10 text-green-600"></ion-icon>
                </div>

                <h1 className="text-3xl font-heading font-bold text-[#061B3A] mb-4">
                    Thank You!
                </h1>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Your brochure acts as your gateway to premium living. The download should start automatically.
                </p>

                {brochureUrl && (
                    <div className="mb-8">
                        <p className="text-sm text-gray-500 mb-2">If the download didn't start:</p>
                        <a
                            href={brochureUrl}
                            target="_blank"
                            download
                            className="text-[#C9A24D] font-medium hover:underline"
                        >
                            Click here to download manually
                        </a>
                    </div>
                )}

                <Link
                    href="/projects/ongoing"
                    className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#061B3A] text-white font-medium tracking-widest uppercase text-sm rounded-lg hover:bg-[#C9A24D] transition-all duration-300"
                >
                    Back to Projects
                </Link>
            </div>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div className="min-h-screen"></div>}>
            <ThankYouContent />
        </Suspense>
    );
}
