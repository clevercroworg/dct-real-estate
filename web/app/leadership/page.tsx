import ScrollReveal from '../components/ScrollReveal';

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white py-20 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/background/bg-4.png" alt="Background" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-[#061B3A]/80"></div> {/* Overlay for readability */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal animationClass="animate-slide-left">
                            <p className="uppercase text-xs tracking-[0.3em] text-white/60">Our Leadership</p>
                        </ScrollReveal>
                        <ScrollReveal animationClass="animate-slide-right">
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3">
                                Driving Innovation & Growth
                            </h1>
                        </ScrollReveal>
                    </div>
                </section>

                {/* MAIN PROFILE SECTION */}
                <section className="py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* IMAGE COLUMN */}
                            <div className="order-1 lg:order-1">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                                        <img
                                            src="/images/about/leadership.jpg"
                                            alt="Imran Khan - DOP & Strategic Leader"
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#061B3A] to-transparent p-8 pt-24 text-center">
                                            <p className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-1">DOP & Strategic Leader</p>
                                            <h2 className="text-white font-heading text-3xl font-bold">Imran Khan</h2>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* TEXT COLUMN */}
                            <div className="order-2 lg:order-2">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Strategic Vision & Operational Excellence
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        With over seven years of experience across multiple industries, <strong>Imran Khan</strong> is a dynamic leader driving innovation, operational excellence, and strategic growth. His expertise in information technology, real estate, and business development has positioned him as a forward-thinking visionary, dedicated to delivering sustainable solutions and unparalleled customer value.
                                    </p>

                                    <div className="bg-[#F7F3EA] rounded-2xl p-8 border border-[#E9DFC5] mb-8">
                                        <h3 className="text-[#C9A24D] font-bold text-lg mb-4 uppercase tracking-wider">Leadership Highlights</h3>
                                        <ul className="space-y-4">
                                            <li className="flex gap-3">
                                                <span className="font-bold text-[#061B3A] min-w-[140px]">Proven Track Record:</span>
                                                <span className="text-slate-700">Successfully led large-scale operations, driving significant growth and efficiency improvements.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="font-bold text-[#061B3A] min-w-[140px]">Strategic Visionary:</span>
                                                <span className="text-slate-700">Committed to innovation, market expansion, and cultivating long-term partnerships.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="font-bold text-[#061B3A] min-w-[140px]">Technology Advocate:</span>
                                                <span className="text-slate-700">Utilizes cutting-edge tools to streamline processes and enhance customer experience.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <blockquote className="border-l-4 border-brand-gold pl-6 py-2 italic text-slate-700 bg-slate-50 rounded-r-lg">
                                        "For him, real estate is more than just constructing buildings—it’s about building connections, fostering growth, and making a meaningful impact on the lives of those who call these spaces home. His leadership reflects a deep commitment to sustainable development and long-term value creation for all stakeholders."
                                    </blockquote>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
