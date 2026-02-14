import ScrollReveal from '../components/ScrollReveal';

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="/images/background/bg-4.png" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
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
                                            <img
                                                src="/images/about/leadership.jpg"
                                                alt="Imran Khan - DOP & Strategic Leader"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white bg-gradient-to-t from-[#061B3A] to-transparent">
                                                <h3 className="font-heading text-3xl font-bold mb-1">Imran Khan</h3>
                                                <p className="text-brand-gold text-sm font-bold tracking-widest uppercase">DOP & Strategic Leader</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* TEXT COLUMN */}
                            <div className="lg:col-span-7 xl:col-span-8 order-2">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="mb-10">
                                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#061B3A] mb-6"> {/* Larger heading */}
                                            Revolutionizing Real Estate
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-6 text-justify font-light"> {/* Larger text */}
                                            <strong>Imran Khan's vision</strong> is to revolutionize the real estate industry by integrating innovation, technology, and sustainability into the very core of our operations. At DCT, we strive not just to build structures, but to create inspiring spaces that elevate lifestyles, deliver exceptional value, and forge lasting partnerships based on mutual respect. By consistently transforming challenges into opportunities, we uphold a legacy of trust and excellence that is evident in every project we undertake.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-8 text-justify font-light">
                                            With a robust portfolio spanning over seven years across diverse industries, Imran Khan stands as a dynamic leader driving innovation, operational excellence, and strategic growth. His multifaceted expertise in information technology, real estate, and business development has uniquely positioned him as a forward-thinking visionary. He is steadfastly dedicated to delivering sustainable solutions and unparalleled customer value, ensuring that DCT Real Estate remains at the forefront of the industry's evolution.
                                        </p>
                                    </div>

                                    <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-sm mb-10">
                                        <h3 className="text-[#C9A24D] font-bold text-lg mb-6 uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-[#C9A24D]"></span>
                                            Leadership Highlights
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-6"> {/* Horizontal grid for highlights */}
                                            <div className="flex flex-col gap-3">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="checkmark-circle-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Proven Track Record</span>
                                                    <span className="text-slate-600 text-sm">Driving significant growth and efficiency based on years of operational success.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="bulb-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Strategic Visionary</span>
                                                    <span className="text-slate-600 text-sm">Innovating market expansion and cultivating long-term, high-value partnerships.</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <ion-icon name="laptop-outline" style={{ fontSize: '24px' }}></ion-icon>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#061B3A] block mb-1">Technology Advocate</span>
                                                    <span className="text-slate-600 text-sm">Leveraging cutting-edge tools to streamline processes and enhance clarity.</span>
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
