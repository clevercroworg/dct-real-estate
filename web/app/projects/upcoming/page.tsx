import ProjectCard from '@/components/ProjectCard';

export const metadata = {
    title: 'Upcoming Projects | DCT Real Estate',
    description: 'Explore upcoming residential, farmhouse, and plotted developments by DCT Real Estate in Bilaspur and nearby locations.',
};

export default function UpcomingProjectsPage() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative min-h-[52vh] flex items-end">
                <div className="absolute inset-0">
                    <img
                        src="/images/launch-1.jpg"
                        alt="Upcoming projects"
                        className="w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(6,27,58,0.98), rgba(6,27,58,0.65), rgba(6,27,58,0.98))' }}></div>
                    <div className="absolute inset-0 z-10 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(6,27,58,0.28) 0 1px, transparent 1px 18px), repeating-linear-gradient(90deg, rgba(6,27,58,0.28) 0 1px, transparent 1px 18px)' }}></div>
                    <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(6,27,58,0.18)' }}></div>
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
                    <div className="max-w-2xl">
                        <p className="text-[#C9A24D] text-xs tracking-[0.35em] uppercase mb-4">DCT Real Estate</p>
                        <h1 className="font-heading text-white text-4xl lg:text-5xl font-semibold leading-tight">
                            Upcoming Projects
                        </h1>
                        <p className="text-white/80 mt-4 text-base lg:text-lg leading-relaxed">
                            Discover our upcoming developments across Bilaspur and nearby locations—each designed
                            for strong long-term value and premium living.
                        </p>
                    </div>
                </div>
            </section>

            {/* COMING SOON SECTION */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#061B3A_0px,#061B3A_1px,transparent_1px,transparent_10px)]"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block p-4 rounded-full bg-[#C9A24D]/10 mb-6 animate-pulse">
                        <ion-icon name="hourglass-outline" class="text-4xl text-[#C9A24D]"></ion-icon>
                    </div>

                    <h2 className="font-heading text-5xl md:text-7xl font-bold text-[#061B3A] mb-6 tracking-tight">
                        Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] to-[#d4b15f]">Soon</span>
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We are currently crafting exceptional new developments. <br className="hidden md:block" />
                        Stay tuned for announcements on our next landmark projects.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#061B3A] to-[#C9A24D]"></div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#061B3A] py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#05162F] px-10 py-16 lg:px-20 shadow-2xl">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A24D]/20 blur-[100px]"></div>

                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
                            <div className="max-w-2xl">
                                <h3 className="font-heading text-3xl lg:text-4xl text-white font-semibold">
                                    Let’s shortlist your next investment
                                </h3>
                                <p className="text-white/70 mt-4 text-lg font-light">
                                    Our team can share layouts, price details, and site visit options.
                                </p>
                            </div>
                            <a
                                href="tel:6264883066"
                                className="px-8 py-4 rounded-full bg-white text-[#061B3A] font-bold text-sm uppercase tracking-widest hover:bg-[#C9A24D] hover:text-[#061B3A] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
                            >
                                <ion-icon name="call-outline" class="text-xl"></ion-icon>
                                Call +91 62648 83066
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
