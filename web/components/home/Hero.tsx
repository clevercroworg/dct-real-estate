import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-poster.jpg"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* FALLBACK IMAGE */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero-poster.jpg"
                    alt="DCT Real Estate"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/75 to-brand-dark/90"></div>

            {/* HERO CONTENT */}
            <div className="relative z-10 h-full flex items-center pt-24 lg:pt-0">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="max-w-4xl">
                        {/* HEADING */}
                        <h1 className="hero-animate font-heading text-white font-bold leading-[1.1] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[64px]">
                            Shaping Landmarks<br />
                            Building Enduring Value
                        </h1>

                        {/* SUBTEXT */}
                        <p className="hero-animate hero-delay-1 mt-6 text-white/80 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                            A trusted real estate developer delivering residential, commercial,
                            and land assets across strategic locations.
                        </p>

                        {/* ISO CERTIFICATION BADGE */}
                        <div className="hero-animate hero-delay-1 mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white/85 text-sm font-medium">
                            <ion-icon name="shield-checkmark-outline" class="text-base"></ion-icon>
                            ISO 9001:2015 Certified
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="hero-animate hero-delay-2 mt-10 flex flex-wrap gap-4">
                            {/* VIEW PROJECTS */}
                            <Link
                                href="/projects/ongoing"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C9A24D] text-white font-semibold text-[15px] transition hover:bg-[#A8842C] hover:-translate-y-0.5"
                            >

                                <ion-icon name="business-outline" class="text-lg mr-2"></ion-icon>
                                View Projects
                            </Link>

                            {/* ENQUIRE NOW */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/90 text-white font-semibold text-[15px] transition-all duration-200 hover:bg-brand-gold hover:border-brand-gold hover:-translate-y-0.5"
                            >

                                <ion-icon name="send-outline" class="text-lg mr-2"></ion-icon>
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
