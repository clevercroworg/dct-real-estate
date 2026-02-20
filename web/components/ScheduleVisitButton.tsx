"use client";

import { useVisitModal } from '@/components/project/VisitModalContext';

interface ScheduleVisitButtonProps {
    className?: string;
    text?: string;
}

export default function ScheduleVisitButton({
    className,
    text = "Schedule a Site Visit" // default
}: ScheduleVisitButtonProps) {
    const { openModal } = useVisitModal();
    return (
        <button
            onClick={() => openModal()}
            className={className || "px-6 py-3 rounded-full bg-[#C9A24D] text-[#061B3A] font-semibold text-xs uppercase tracking-widest hover:bg-[#d4b15f] transition-all shadow-lg hover:shadow-[#C9A24D]/30 inline-flex items-center gap-2"}
        >
            <ion-icon name="calendar-outline"></ion-icon>
            {text}
        </button>
    );
}
