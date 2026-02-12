'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');

                        // Animate counters if this is a stat card
                        const countTarget = entry.target.querySelector('.about-stat-number');
                        if (countTarget) {
                            const target = parseInt(countTarget.getAttribute('data-target') || '0', 10);
                            let count = 0;
                            const increment = target / 50; // simple increment
                            const timer = setInterval(() => {
                                count += increment;
                                if (count >= target) {
                                    count = target;
                                    clearInterval(timer);
                                }
                                countTarget.textContent = Math.ceil(count).toString();
                            }, 30);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section className="relative bg-white py-28">
            {/* SECTION HEADING */}
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-5xl font-[900] text-brand-blue mb-4 leading-tight">
                    Bilaspur’s Most Trusted <span className="text-brand-gold">Real Estate Brand</span>
                </h2>

                <p className="text-text-muted max-w-2xl mx-auto text-lg">
                    Delivering quality developments with transparency, trust, and long-term value.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* STATS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    <div className="about-stat-card reveal bg-white p-6 md:p-10 text-center rounded-lg shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 transition-transform duration-200">
                        <p className="about-stat-number font-heading text-4xl lg:text-[44px] font-bold text-brand-gold mb-1" data-target="310">0</p>
                        <p className="about-stat-label text-text-muted text-[15px]">Listed Properties</p>
                    </div>

                    <div className="about-stat-card reveal bg-white p-6 md:p-10 text-center rounded-lg shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 transition-transform duration-200">
                        <p className="about-stat-number font-heading text-4xl lg:text-[44px] font-bold text-brand-gold mb-1" data-target="51">0</p>
                        <p className="about-stat-label text-text-muted text-[15px]">Mega Projects</p>
                    </div>

                    <div className="about-stat-card reveal bg-white p-6 md:p-10 text-center rounded-lg shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 transition-transform duration-200">
                        <p className="about-stat-number font-heading text-4xl lg:text-[44px] font-bold text-brand-gold mb-1" data-target="25">0</p>
                        <p className="about-stat-label text-text-muted text-[15px]">Awards Won</p>
                    </div>

                    <div className="about-stat-card reveal bg-white p-6 md:p-10 text-center rounded-lg shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 transition-transform duration-200">
                        <p className="about-stat-number font-heading text-4xl lg:text-[44px] font-bold text-brand-gold mb-1" data-target="2130">0</p>
                        <p className="about-stat-label text-text-muted text-[15px]">Happy Clients</p>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* LEFT CONTENT */}
                    <div className="reveal">
                        {/* SECTION TITLE */}
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brand-blue">
                            About DCT Real Estate
                        </h2>

                        <p className="text-text-muted text-lg leading-relaxed mb-6">
                            DCT Real Estate Developers is a professionally managed real estate development company committed to creating high-quality residential, commercial, and plotted developments across strategic locations.
                        </p>

                        <p className="text-text-muted leading-relaxed">
                            With a strong focus on transparency, timely delivery, and customer satisfaction, DCT has earned the trust of investors and homebuyers alike. Our projects are driven by thoughtful planning, strong legal compliance, and long-term value creation.
                        </p>
                    </div>

                    {/* RIGHT BRAND BLOCK */}
                    <div className="reveal">
                        <div className="bg-brand-blue rounded-xl p-10 text-white relative overflow-hidden">
                            {/* TITLE */}
                            <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-4">
                                Built on Trust. Driven by Value.
                            </h3>

                            {/* TEXT */}
                            <p className="text-white/80 leading-relaxed">
                                Every DCT project reflects our commitment to quality construction, legal clarity, and sustainable development — ensuring long-term value for our customers and investors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
