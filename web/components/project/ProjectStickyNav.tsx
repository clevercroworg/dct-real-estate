"use client";

import React from 'react';
import { useVisitModal } from './VisitModalContext';

export default function ProjectStickyNav() {
    const { openModal } = useVisitModal();

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#061B3A] text-white rounded-2xl shadow-2xl px-5 py-3 flex items-center justify-between gap-4 border border-white/10 backdrop-blur-sm">
                    {/* Chat with us */}
                    <a
                        href="https://wa.me/916264883066"
                        target="_blank"
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition-colors"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="chatbubble-ellipses-outline" class="text-lg text-[#C9A24D]"></ion-icon>
                        <span className="hidden sm:inline">Chat with us</span>
                        <span className="sm:hidden">Chat</span>
                    </a>

                    <span className="hidden sm:block h-6 w-px bg-white/10"></span>

                    {/* Call us */}
                    <a
                        href="tel:6264883066"
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition-colors"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="call-outline" class="text-lg text-[#C9A24D]"></ion-icon>
                        <span className="hidden sm:inline">Call us</span>
                        <span className="sm:hidden">Call</span>
                    </a>

                    <span className="hidden sm:block h-6 w-px bg-white/10"></span>

                    {/* Schedule a visit */}
                    <button
                        type="button"
                        onClick={openModal}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition-colors"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="calendar-outline" class="text-lg text-[#C9A24D]"></ion-icon>
                        <span className="hidden sm:inline">Schedule a visit</span>
                        <span className="sm:hidden">Visit</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
