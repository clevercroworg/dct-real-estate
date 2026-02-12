export default function DirectorsMessagePage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                <section className="relative bg-[#061B3A] text-white overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                'linear-gradient(120deg, rgba(201,162,77,0.25), transparent 40%)',
                        }}
                    ></div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                        <p className="uppercase text-xs tracking-[0.3em] text-white/60">
                            Director Messages
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-3">
                            About Rajendra Singh Rajput
                        </h1>
                        <p className="text-white/70 text-lg mt-5 max-w-3xl">
                            Rajendra Singh Rajput brings over a decade of expertise in the real estate
                            industry, passionately shaping spaces that enhance people’s lives. His journey
                            began with a deep enthusiasm for architecture and property development, evolving
                            into a career dedicated to crafting exceptional residential and commercial spaces
                            in Bilaspur.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
                        {/* MAIN CONTENT */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-8 relative">
                                    DCT Real Estate Developers
                                    <span className="block h-1 w-20 bg-brand-gold mt-4 rounded-full"></span>
                                </h2>

                                <div className="prose prose-lg text-slate-600 leading-relaxed">
                                    <p className="mb-6">
                                        With an unwavering focus on quality, functionality, and community needs,
                                        <strong className="text-brand-blue"> Rajendra Singh Rajput</strong> has built a reputation for excellence.
                                        For him, real estate is not just about constructing buildings—it’s about fostering connections, driving
                                        growth, and making a lasting impact on the lives of residents and businesses.
                                    </p>
                                    <blockquote className="border-l-4 border-brand-gold pl-6 py-2 my-8 italic text-slate-700 bg-slate-50 rounded-r-lg">
                                        "Leadership is rooted in thoughtful development and delivering long-term value to all stakeholders."
                                    </blockquote>
                                </div>
                            </div>

                            <div className="mt-10 bg-[#F7F3EA] rounded-3xl p-10 border border-[#E9DFC5]">
                                <h3 className="font-heading text-2xl font-bold text-[#061B3A] mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Personal Commitment
                                </h3>
                                <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                                    <p>
                                        Rajendra Singh Rajput’s commitment to excellence extends beyond constructing
                                        properties—he is dedicated to creating spaces that foster a sense of community
                                        and enhance residents&apos; quality of life.
                                    </p>
                                    <p>
                                        Guided by the belief that every development should serve both people’s needs
                                        and regional growth, he integrates <span className="font-semibold text-brand-blue">quality, innovation, and ethical business practices</span> into every project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <aside className="lg:col-span-4 space-y-8">
                            <div className="bg-[#061B3A] text-white rounded-3xl p-8 sticky top-24">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-1 bg-brand-gold rounded-full"></div>
                                    <p className="uppercase text-xs tracking-[0.25em] text-white/60 font-medium">Achievements</p>
                                </div>

                                <h3 className="font-heading text-2xl font-bold mb-6">
                                    Recognition & Contributions
                                </h3>

                                <div className="space-y-5">
                                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-[20px]">
                                                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                                Honored by <strong className="font-medium text-white">Nitin Gadkari</strong>, Union Minister, for transformative contributions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-[20px]">
                                                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                                Awarded by actor <strong className="font-medium text-white">Ashutosh Rana</strong> for real estate impact.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-[20px]">
                                                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                                Recognized by <strong className="font-medium text-white">Zee MP CG News</strong> for visionary work.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-[20px]">
                                                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                                Honored by <strong className="font-medium text-white">CM Bhupesh Baghel</strong> for regional dedication.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="py-20 bg-[#061B3A] text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                                    Award Moment
                                </p>
                                <p className="mt-3 text-white/80">
                                    Rajendra Singh Rajput receiving an award from Nitin Gadkari, Union Minister
                                    for Road Transport & Highways of India.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                                    Recognition
                                </p>
                                <p className="mt-3 text-white/80">
                                    Honored by celebrated Indian actor Ashutosh Rana for leadership and
                                    contributions.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                                    Regional Impact
                                </p>
                                <p className="mt-3 text-white/80">
                                    Acknowledged by Zee MP CG News and the Chief Minister of Chhattisgarh for
                                    industry impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
