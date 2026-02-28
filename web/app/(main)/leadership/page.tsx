import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/background/bg-4.png"
                            alt="Background"
                            fill
                            priority
                            className="object-cover opacity-40 mix-blend-overlay"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061B3A]/90 to-[#061B3A]/70"></div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal animationClass="animate-slide-left">
                            <p className="uppercase text-xs tracking-[0.3em] text-brand-gold font-bold mb-4">Leadership</p>
                        </ScrollReveal>
                        <ScrollReveal animationClass="animate-slide-right">
                            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                                Visionary Leadership
                            </h1>
                            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Driving innovation, fostering growth, and building a legacy of trust and excellence in every endeavor.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* LEADER: IMRAN KHAN */}
                <section className="py-20 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[90rem]"> {/* Wider container */}
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"> {/* Reduced gap, centered items */}
                            {/* IMAGE COLUMN */}
                            <div className="lg:col-span-5 xl:col-span-4 order-1"> {/* Adjusted column span */}
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative group sticky top-32">
                                        <div className="absolute inset-0 bg-brand-gold/20 transform translate-x-4 translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-white"> {/* Adjusted aspect ratio */}
                                            <Image
                                                src="/images/about/leadership.jpg"
                                                alt="Imran Khan - DOP & Strategic Leader"
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 40vw"
                                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white bg-gradient-to-t from-[#061B3A] to-transparent">
                                                <h3 className="font-heading text-3xl font-bold mb-1">Imran Khan</h3>
                                                <p className="text-brand-gold text-sm font-bold tracking-widest uppercase">Operations Head & Technical Consultant</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* TEXT COLUMN */}
                            <div className="lg:col-span-7 xl:col-span-8 order-2">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="mb-10">
                                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#061B3A] mb-6">
                                            Operational Excellence & Strategic Governance
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-6 text-justify font-light">
                                            Imran Khan serves as the <strong>Operations Head & Technical Consultant</strong> at DCT Real Estate, leading the organization’s strategic operations, technical planning, and project execution functions. He plays a central role in aligning corporate governance standards with structured operational frameworks to ensure disciplined and sustainable growth.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-6 text-justify font-light">
                                            With over nine years of cross-industry experience across Information Technology, Analytics, Infrastructure Distribution, and Real Estate, Imran brings a diversified and analytical leadership perspective. His professional journey from Data Engineering to executive-level operational leadership reflects a strong foundation in systems thinking, process optimization, and performance-driven execution.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-6 text-justify font-light">
                                            Leveraging his expertise in enterprise systems and data-driven methodologies, he integrates technology-enabled planning, compliance-focused governance, and financially disciplined execution models into real estate development. His approach emphasizes operational clarity, regulatory adherence, structured vendor management, and long-term asset value creation.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-8 text-justify font-light">
                                            Imran’s leadership philosophy is grounded in institutional growth, operational transparency, and disciplined execution. His commitment to structured governance and systematic planning continues to strengthen DCT Real Estate’s position as a professionally managed and future-oriented development organization.
                                        </p>
                                    </div>

                                    <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-sm mb-10">
                                        <h3 className="text-[#C9A24D] font-bold text-lg mb-6 uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-[#C9A24D]"></span>
                                            Strategic Focus Areas
                                        </h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="map-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Land Acquisition</span>
                                                    <span className="text-slate-600 text-sm">Strategic land acquisition and comprehensive project feasibility assessment.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="shield-checkmark-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Compliance</span>
                                                    <span className="text-slate-600 text-sm">Regulatory compliance, statutory governance, and risk management.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="construct-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Quality Assurance</span>
                                                    <span className="text-slate-600 text-sm">Technical supervision and quality assurance benchmarks.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="people-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Vendor Ecosystem</span>
                                                    <span className="text-slate-600 text-sm">Structured vendor and contractor ecosystem development.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="trending-up-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Asset Value</span>
                                                    <span className="text-slate-600 text-sm">Sustainable capital appreciation and long-term value enhancement.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <blockquote className="relative p-8 bg-[#F7F3EA] rounded-2xl border-l-4 border-brand-gold">
                                        <div className="absolute top-4 left-4 opacity-10 text-6xl text-brand-gold font-serif">"</div>
                                        <p className="relative z-10 italic text-slate-700 text-lg leading-relaxed">
                                            "For him, real estate is more than just constructing buildings—it’s about building connections, fostering growth, and making a meaningful impact on the lives of those who call these spaces home. His leadership reflects a deep commitment to sustainable development and long-term value creation for all stakeholders."
                                        </p>
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
