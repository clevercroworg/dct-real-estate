import React from 'react';
import { ventureReasons } from './venturesData';

export default function OurVenturesPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* PAGE HEADER */}
                <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/background/bg-4.png')",
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-[#061B3A]/70"></div>
                    <div className="relative z-10 text-center text-white px-4 pt-20">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Ventures</h1>
                    </div>
                </section>

                {/* 15+ REASONS SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm block mb-2">15+ Reasons</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#061B3A] relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-gold after:rounded-full">
                                Why DCT Real Estate Developers® is the Perfect Choice
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {ventureReasons.map((item, index) => (
                                <div key={index} className="flex gap-4 group hover:bg-slate-50 p-4 rounded-lg transition-colors duration-300">
                                    <div className="flex-shrink-0 mt-1 text-brand-gold text-xl group-hover:scale-110 transition-transform">
                                        <ion-icon name="arrow-forward-circle"></ion-icon>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-[#061B3A] mb-2">{item.title}:</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-brand-blue py-20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }}></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                            <div className="text-center md:text-left">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    Are you in search of a home or <br className="hidden md:block" />property investment?
                                </h2>
                                <p className="text-blue-100 text-lg">Let us define your future with our premium properties.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href="tel:6264883066"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                                >
                                    <ion-icon name="call" class="text-xl"></ion-icon>
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
