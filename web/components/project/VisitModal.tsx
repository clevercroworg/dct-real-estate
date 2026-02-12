"use client";

import React, { useEffect } from 'react';
import { useVisitModal } from './VisitModalContext';

export default function VisitModal() {
    const { isOpen, closeModal } = useVisitModal();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 py-10">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative z-[61] w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D]">Schedule a Visit</p>
                        <h3 className="font-heading text-2xl font-semibold text-[#061B3A] mt-2">Plan your walkthrough</h3>
                    </div>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-[#061B3A] hover:text-[#C9A24D] transition-colors"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="close-outline" class="text-2xl"></ion-icon>
                    </button>
                </div>

                <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert('Visit request submitted!'); closeModal(); }}>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full name"
                        className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                    />
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone number"
                        className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                    />
                    <input
                        type="date"
                        name="date"
                        required
                        className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                    />
                    <textarea
                        name="message"
                        rows={3}
                        placeholder="Preferred time or notes"
                        className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="rounded-full w-full justify-center inline-flex items-center gap-2 px-4 py-3 text-xs tracking-widest font-semibold uppercase bg-[#061B3A] text-white hover:bg-[#0B2550] transition-colors"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="calendar-outline"></ion-icon>
                        Submit request
                    </button>
                </form>
            </div>
        </div>
    );
}
