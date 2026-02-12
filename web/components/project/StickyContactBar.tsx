interface StickyContactBarProps {
    onOpenModal: () => void;
    phone?: string;
    whatsapp?: string;
}

export default function StickyContactBar({
    onOpenModal,
    phone = "6264883066",
    whatsapp = "916264883066"
}: StickyContactBarProps) {
    return (
        <div className="fixed bottom-4 left-0 right-0 z-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#061B3A] text-white rounded-2xl shadow-2xl px-5 py-3 flex items-center justify-between gap-4 border border-white/10 backdrop-blur-md bg-opacity-95">
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="chatbubble-ellipses-outline" class="text-lg text-[#C9A24D]"></ion-icon>
                        <span className="hidden sm:inline">Chat with us</span>
                        <span className="sm:hidden">Chat</span>
                    </a>

                    <span className="h-6 w-px bg-white/10"></span>

                    <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition"
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="call-outline" class="text-lg text-[#C9A24D]"></ion-icon>
                        <span className="hidden sm:inline">Call us</span>
                        <span className="sm:hidden">Call</span>
                    </a>

                    <span className="h-6 w-px bg-white/10"></span>

                    <button
                        type="button"
                        onClick={onOpenModal}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C9A24D] transition"
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
