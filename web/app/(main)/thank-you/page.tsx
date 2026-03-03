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
        <div className="min-h-[85vh] flex items-center justify-center bg-[#F9F9F7] px-4 py-20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#C9A24D]/10 to-transparent pointer-events-none -z-10 blur-3xl rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#061B3A]/5 to-transparent pointer-events-none -z-10 blur-3xl rounded-tr-full"></div>

            <div className="max-w-2xl w-full text-center bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#061B3A] to-[#1a3668] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#061B3A]/20 transform hover:scale-110 transition-transform duration-500">
                    <ion-icon name="checkmark-done-outline" class="text-4xl text-[#C9A24D]"></ion-icon>
                </div>

                <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#C9A24D] mb-3">
                    Request Received
                </p>

                <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#061B3A] mb-6 tracking-tight">
                    Thank You!
                </h1>

                <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
                    We appreciate you reaching out. Our team has received your details and will be in touch with you shortly.
                    {brochureUrl && " Your brochure download should begin automatically."}
                </p>

                {brochureUrl && (
                    <div className="mb-10 p-5 bg-[#F9F9F7] rounded-2xl border border-slate-100">
                        <p className="text-sm text-slate-500 mb-3">If the download didn't start automatically:</p>
                        <a
                            href={brochureUrl}
                            target="_blank"
                            download
                            className="inline-flex items-center gap-2 text-[#061B3A] font-semibold hover:text-[#C9A24D] transition-colors"
                        >
                            <ion-icon name="download-outline" class="text-xl"></ion-icon>
                            Click here to download manually
                        </a>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#061B3A] text-white font-semibold tracking-widest uppercase text-xs rounded-xl hover:bg-[#0B2550] shadow-lg shadow-[#061B3A]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/projects/ongoing"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#061B3A] border-2 border-[#061B3A] font-semibold tracking-widest uppercase text-xs rounded-xl hover:bg-[#061B3A] hover:text-white transition-all duration-300"
                    >
                        Explore Projects
                    </Link>
                </div>
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
