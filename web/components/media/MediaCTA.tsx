'use client';

export default function MediaCTA() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('/images/background/bg-4.png')] bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/80 to-[#061B3A]/60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            Are you in search of a home or property investment?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl font-light">
                            Connect with our experts today to find your perfect match in Bilaspur's prime locations.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                        <a
                            href="tel:6264883066"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-[#061B3A] text-lg font-bold rounded-full overflow-hidden transition-all hover:pr-6 hover:pl-10 shadow-[0_0_20px_rgba(201,162,77,0.3)] hover:shadow-[0_0_30px_rgba(201,162,77,0.5)] transform hover:-translate-y-1"
                        >
                            <span className="relative z-10 transition-transform group-hover:-translate-x-2">Call Now</span>
                            <div className="relative z-10 w-8 h-8 rounded-full bg-[#061B3A]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <ion-icon name="call" class="text-xl"></ion-icon>
                            </div>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </div>

                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
        </section>
    );
}
