'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DisclaimerPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Appears on every refresh per client request
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-[9999] w-full max-w-md px-4 sm:px-0">
                    {/* Modal Content - Corner Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(6,27,58,0.2)] overflow-hidden border border-slate-200"
                    >
                        {/* Gold Accent Bar */}
                        <div className="h-1.5 w-full bg-[#C9A24D]" />

                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-heading font-bold text-[#061B3A] uppercase tracking-wider">
                                    Disclaimer
                                </h2>
                            </div>

                            {/* Body Text - Slightly more compact for corner style */}
                            <div className="space-y-3 text-slate-600 leading-snug text-xs sm:text-sm">
                                <p>
                                    This is to inform that <span className="font-bold text-[#061B3A]">www.dctrealestate.com</span> is the only official website of <span className="font-semibold text-[#061B3A]">DCT Real Estate</span>.
                                </p>
                                <p>
                                    Users are advised not to rely on any information available on other websites or social media pages that may appear similar to our brand.
                                </p>
                                <p>
                                    <span className="font-semibold text-[#061B3A]">DCT Real Estate</span> is not responsible for any loss caused due to reliance on information from unauthorized sources.
                                </p>
                                <p className="pt-2 border-t border-slate-100 text-[11px] italic">
                                    Contact us only via details on our official website.
                                </p>
                            </div>

                            {/* Action Button */}
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={handleClose}
                                    className="px-6 py-2.5 bg-[#061B3A] text-[#C9A24D] font-bold rounded-lg shadow-md hover:bg-[#0a264a] transition-all transform active:scale-95 text-xs uppercase tracking-widest"
                                >
                                    I Understand
                                </button>
                            </div>
                        </div>

                        {/* Top Right Close UI */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
