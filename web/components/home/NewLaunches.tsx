export default function NewLaunches() {
    return (
        <section className="relative bg-[#061B3A] py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="flex items-end justify-between mb-12">
                    <h2 className="font-heading text-white text-3xl lg:text-4xl font-semibold">
                        New Launches & Events
                    </h2>

                    {/* NAV BUTTONS */}
                    <div className="hidden lg:flex gap-3">
                        <button className="nav-arrow w-11 h-11 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all">
                            ←
                        </button>
                        <button className="nav-arrow w-11 h-11 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all">
                            →
                        </button>
                    </div>
                </div>

                {/* SLIDER */}
                <div className="launch-slider flex gap-4 lg:gap-10 px-4 lg:px-0 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth min-h-[360px] lg:min-h-[460px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {/* SLIDE 1 */}
                    <div className="launch-slide relative min-w-[88%] lg:min-w-[65%] h-[360px] lg:h-[460px] rounded-xl overflow-hidden bg-black snap-center">
                        <img src="/images/launch-1.jpg" alt="Project Launch" className="w-full h-full object-cover" />

                        <div className="launch-overlay absolute inset-0 p-5 lg:p-10 flex flex-col justify-end bg-gradient-to-t from-[#011E51]/90 via-[#011E51]/20 to-transparent">
                            <p className="launch-tag text-[10px] lg:text-xs uppercase tracking-[0.12em] text-brand-gold mb-2.5">New Launch</p>
                            <h3 className="launch-title font-heading text-[20px] lg:text-[28px] font-semibold text-white mb-1.5">Chitvan Farmhouse</h3>
                            <p className="launch-meta text-white/75 text-[13px] lg:text-[15px] mb-4">Farmhouse • Bilaspur</p>
                            <a href="/" className="launch-link text-white font-medium hover:text-brand-gold hover:translate-x-1 transition-all inline-flex items-center gap-1 text-sm lg:text-base">
                                Know More →
                            </a>
                        </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="launch-slide relative min-w-[88%] lg:min-w-[65%] h-[360px] lg:h-[460px] rounded-xl overflow-hidden bg-black snap-center">
                        <img src="/images/launch-2.jpg" alt="Event" className="w-full h-full object-cover" />

                        <div className="launch-overlay absolute inset-0 p-5 lg:p-10 flex flex-col justify-end bg-gradient-to-t from-[#011E51]/90 via-[#011E51]/20 to-transparent">
                            <p className="launch-tag text-[10px] lg:text-xs uppercase tracking-[0.12em] text-brand-gold mb-2.5">CLUBHOUSE</p>
                            <h3 className="launch-title font-heading text-[20px] lg:text-[28px] font-semibold text-white mb-1.5">Aishwaryam</h3>
                            <p className="launch-meta text-white/75 text-[13px] lg:text-[15px] mb-4">Bilaspur</p>
                            <a href="/" className="launch-link text-white font-medium hover:text-brand-gold hover:translate-x-1 transition-all inline-flex items-center gap-1 text-sm lg:text-base">
                                View Details →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
