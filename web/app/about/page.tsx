'use client';


import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#061B3A] text-white">
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 20% 20%, #C9A24D 0, transparent 35%), radial-gradient(circle at 80% 10%, #7DA1FF 0, transparent 30%)',
                        }}
                    ></div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                        <div className="max-w-3xl">
                            <p className="uppercase text-xs tracking-[0.3em] text-white/70">About Us</p>
                            <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-3">
                                About DCT Real Estate & Developers
                            </h1>
                            <p className="text-white/70 text-lg mt-5">
                                DCT Real Estate Developers is a trusted real estate company in Bilaspur,
                                offering premium residential projects including apartments, independent villas,
                                and affordable plots. Our dynamic team is dedicated to delivering top-quality
                                properties while exceeding customer expectations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-brand-blue">Overview</h2>
                            <p className="text-slate-600 mt-6 leading-loose text-lg">
                                Our success stems from an unwavering commitment to excellence, cutting-edge
                                technology, and personalized customer service. With a strong foundation in
                                finance, architecture, and marketing, we ensure seamless project execution. Our
                                unparalleled after-sales support has made us a reliable name in the industry.
                                Currently, we operate in Bilaspur with plans for future expansion.
                            </p>
                            <div className="mt-12 grid sm:grid-cols-2 gap-6">
                                <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Our Mission</p>
                                    <p className="mt-4 text-slate-700 leading-relaxed">
                                        We are committed to making a meaningful impact in people’s lives by
                                        providing expert guidance on real estate and related services, ensuring
                                        informed decisions and long-term value.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Our Vision</p>
                                    <p className="mt-4 text-slate-700 leading-relaxed">
                                        To become one of the most trusted and reliable real estate advisory
                                        companies in Bilaspur, delivering an exceptional client experience and
                                        positively transforming 1,000+ lives by March 2030.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F7F3EA] rounded-3xl p-8 border border-[#E9DFC5]">
                            <p className="uppercase text-xs tracking-[0.25em] text-[#8E7A4A]">At A Glance</p>
                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="rounded-2xl bg-white p-6 shadow-sm">
                                    <p className="text-3xl font-semibold text-[#061B3A]">310</p>
                                    <p className="text-sm text-slate-500 mt-1">Listed Property</p>
                                </div>
                                <div className="rounded-2xl bg-white p-6 shadow-sm">
                                    <p className="text-3xl font-semibold text-[#061B3A]">51</p>
                                    <p className="text-sm text-slate-500 mt-1">Mega Project</p>
                                </div>
                                <div className="rounded-2xl bg-white p-6 shadow-sm">
                                    <p className="text-3xl font-semibold text-[#061B3A]">25</p>
                                    <p className="text-sm text-slate-500 mt-1">Awards Won</p>
                                </div>
                                <div className="rounded-2xl bg-white p-6 shadow-sm">
                                    <p className="text-3xl font-semibold text-[#061B3A]">2130</p>
                                    <p className="text-sm text-slate-500 mt-1">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILLARS */}
                <section className="py-20 bg-[#061B3A] text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                            <div>
                                <p className="uppercase text-xs tracking-[0.3em] text-white/60">Our Pillars</p>
                                <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-3">
                                    Planning, quality, and ethical execution
                                </h2>
                            </div>
                            <p className="text-white/70 max-w-xl">
                                We build with purpose, anchored by deep planning, quality craftsmanship, and an
                                uncompromising commitment to integrity.
                            </p>
                        </div>
                        <div className="mt-12 grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold">Planning</h3>
                                <p className="text-white/70 mt-3">
                                    At the core of our approach is a deep understanding of human needs, allowing
                                    us to design real estate solutions that enhance everyday living. Through
                                    collaboration with consultants, engineers, and designers, we create
                                    thoughtfully planned, meaningful spaces.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold">Quality & Consistency</h3>
                                <p className="text-white/70 mt-3">
                                    Great ideas transform houses into homes and commercial spaces into thriving
                                    hubs. Meticulous planning, superior quality, ethical values, and timely
                                    delivery bring these concepts to life.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold">Timely Delivery</h3>
                                <p className="text-white/70 mt-3">
                                    Timely possession is essential for customers investing in under-construction
                                    properties. Our track record includes on-time delivery even during
                                    challenges like COVID-19, including handover six months before the RERA
                                    deadline.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold">Beliefs & Ethics</h3>
                                <p className="text-white/70 mt-3">
                                    Built on strong ethical values, we are committed to a sustainable, enduring
                                    organization. Our customer-first approach ensures we deliver on promises and
                                    strengthen long-term trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
}
