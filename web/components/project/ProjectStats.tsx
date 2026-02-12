export default function ProjectStats() {
    return (
        <section className="pt-10 pb-14 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-6 bg-[#0C1B33] text-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="leaf-outline" class="text-[#C9A24D] text-2xl"></ion-icon>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Signature</p>
                            <p className="text-2xl font-semibold mt-2">Living Ecosystem</p>
                            <p className="text-sm text-white/70 mt-2">Greens, water, and open spaces designed to breathe.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="home-outline" class="text-[#C9A24D] text-2xl"></ion-icon>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Community</p>
                            <p className="text-2xl font-semibold mt-2">Farmhouse Living</p>
                            <p className="text-sm text-white/70 mt-2">Private plots with shared wellness and social spaces.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="navigate-outline" class="text-[#C9A24D] text-2xl"></ion-icon>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Connectivity</p>
                            <p className="text-2xl font-semibold mt-2">NH 130 Corridor</p>
                            <p className="text-sm text-white/70 mt-2">Mohda Mod, Bhojpuri Toll Plaza, Bilaspur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
