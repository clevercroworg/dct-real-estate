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

                                        <img
                                            src="/images/about/ledership.jpg"
                                            alt="Imran Khan"
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-transparent opacity-80"></div>

                                        <div className="text-center relative z-10 mt-auto pb-8">
                                            <div className="h-px w-12 bg-white/50 mx-auto mb-4"></div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-white font-medium drop-shadow-md">Leadership</p>
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

                                {/* SIDEBAR AWARDS (MOVED HERE IF LAYOUT CHANGED OR KEPT IN SIDEBAR) - WAITING FOR SIDEBAR CODE */}
                                {/* Actually sidebar is separate below in original code. Updating sidebar images now by targeting the sidebar section directly if possible or finding it. */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* AWARDS SECTION (Previously Sidebar in original file, looks like I missed the sidebar in this edit block. I will do a separate edit for the sidebar images to be safe) */}


                <div className="bg-[#061B3A] text-white rounded-3xl p-10 relative overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <h3 className="font-heading text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                        <span className="w-1 h-8 bg-brand-gold rounded-full"></span>
                        Leadership Highlights
                    </h3>

                    <div className="grid md:grid-cols-1 gap-6 relative z-10">
                        <div className="flex gap-5 group items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <img src="/images/about/nitin.jpg" alt="Nitin Gadkari" className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30" />
                            <div>
                                <p className="text-lg font-bold text-white">Proven Track Record</p>
                                <p className="text-white/60 mt-1 leading-relaxed text-sm">Honored by Union Minister Nitin Gadkari for transformative contributions.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <img src="/images/about/asutosh.jpg" alt="Ashutosh Rana" className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30" />
                            <div>
                                <p className="text-lg font-bold text-white">Strategic Visionary</p>
                                <p className="text-white/60 mt-1 leading-relaxed text-sm">Awarded by Ashutosh Rana for impact in real estate.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <img src="/images/about/zee.jpg" alt="Zee News" className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30" />
                            <div>
                                <p className="text-lg font-bold text-white">Technology Advocate</p>
                                <p className="text-white/60 mt-1 leading-relaxed text-sm">Recognized by Zee MP CG News for visionary work.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <img src="/images/about/bhupesh.jpg" alt="CM Bhupesh Baghel" className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30" />
                            <div>
                                <p className="text-lg font-bold text-white">Regional Impact</p>
                                <p className="text-white/60 mt-1 leading-relaxed text-sm">Honored by CM Bhupesh Baghel for regional dedication.</p>
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
        </div >
    </div >
</section >
</main >
</div >
);
}
