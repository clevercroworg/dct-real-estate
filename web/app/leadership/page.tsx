export default function LeadershipPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                <section className="relative bg-[#F7F3EA] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                        <p className="uppercase text-xs tracking-[0.3em] text-[#8E7A4A]">Leadership</p>
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-3 text-[#061B3A]">
                            Driving innovation with people-first vision
                        </h1>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-5 gap-12 items-start">
                            {/* PROFILE CARD */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-3xl border border-slate-100 p-3 shadow-xl shadow-slate-200/50 sticky top-24">
                                    <div className="bg-gradient-to-br from-[#061B3A] via-[#0E2B5C] to-[#C9A24D] rounded-2xl aspect-[4/5] flex items-center justify-center text-white relative overflow-hidden group">
                                        {/* Decorative Circles */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl -ml-5 -mb-5"></div>

                                        <div className="text-center relative z-10">
                                            <div className="text-6xl font-bold tracking-tighter mb-4 opacity-90 group-hover:scale-110 transition-transform duration-500">IK</div>
                                            <div className="h-px w-12 bg-white/30 mx-auto mb-4"></div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-medium">Leadership</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 mb-4 text-center">
                                        <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-bold">DOP & Strategic Leader</p>
                                        <h2 className="text-3xl font-heading font-bold text-[#061B3A] mt-2">Imran Khan</h2>
                                        <div className="flex justify-center gap-3 mt-6">
                                            {/* Social placeholders if needed */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BIO CONTENT */}
                            <div className="lg:col-span-3 space-y-10">
                                <div className="prose prose-lg text-slate-600 leading-loose">
                                    <p className="text-xl text-[#061B3A] font-medium leading-relaxed">
                                        Imran Khan’s vision is to revolutionize the real estate industry by
                                        integrating innovation, technology, and sustainability.
                                    </p>
                                    <p>
                                        At DCT, we strive
                                        to create inspiring spaces, deliver exceptional products, and build lasting
                                        partnerships. By transforming challenges into opportunities, we uphold a
                                        legacy of trust and excellence in every project.
                                    </p>
                                    <p>
                                        With over seven years of experience across multiple industries, Imran Khan
                                        is a dynamic leader driving innovation, operational excellence, and
                                        strategic growth. His expertise in information technology, real estate, and
                                        business development has positioned him as a forward-thinking visionary,
                                        dedicated to delivering sustainable solutions and unparalleled customer
                                        value.
                                    </p>
                                </div>

                                <div className="bg-[#061B3A] text-white rounded-3xl p-10 relative overflow-hidden">
                                    {/* Background Decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                                    <h3 className="font-heading text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-brand-gold rounded-full"></span>
                                        Leadership Highlights
                                    </h3>

                                    <div className="grid md:grid-cols-1 gap-6 relative z-10">
                                        <div className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex flex-shrink-0 items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#061B3A] transition-colors duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-white">Proven Track Record</p>
                                                <p className="text-white/60 mt-1 leading-relaxed">Successfully led large-scale operations, driving significant growth and efficiency improvements.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex flex-shrink-0 items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#061B3A] transition-colors duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-white">Strategic Visionary</p>
                                                <p className="text-white/60 mt-1 leading-relaxed">Committed to innovation, market expansion, and cultivating long-term partnerships.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex flex-shrink-0 items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#061B3A] transition-colors duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-white">Technology Advocate</p>
                                                <p className="text-white/60 mt-1 leading-relaxed">Utilizes cutting-edge tools to streamline processes and enhance customer experience.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <p className="text-white/70 italic leading-relaxed">
                                            "For him, real estate is more than just constructing buildings—it’s about
                                            building connections, fostering growth, and making a meaningful impact."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
