import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Director's Message | DCT Real Estate",
    description: 'Read the message from the Director of DCT Real Estate on our commitment to excellence.',
};


export default function DirectorsMessagePage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white py-20 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/background/bg-4.png"
                            alt="Background"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-[#061B3A]/80"></div> {/* Overlay for readability */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal animationClass="animate-slide-left">
                            <p className="uppercase text-xs tracking-[0.3em] text-white/60">Director Messages</p>
                        </ScrollReveal>
                        <ScrollReveal animationClass="animate-slide-right">
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3">
                                Message from the Director
                            </h1>
                        </ScrollReveal>
                    </div>
                </section>

                {/* SECTION 1: ABOUT RAJENDRA SINGH RAJPUT */}
                <section className="py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="bg-brand-gold text-white inline-block px-6 py-2 rounded-full font-bold mb-6">
                                        About Rajendra Singh Rajput
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Crafting Excellence in Real Estate
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        Rajendra Singh Rajput brings over a decade of expertise in the real estate industry,
                                        passionately shaping spaces that enhance people’s lives. His journey began with a
                                        deep enthusiasm for architecture and property development, evolving into a career
                                        dedicated to crafting exceptional residential and commercial spaces in Bilaspur.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        With an unwavering focus on quality, functionality, and community needs, Rajendra
                                        has built a reputation for excellence. For him, real estate is not just about
                                        constructing buildings—it’s about fostering connections, driving growth, and
                                        making a lasting impact.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <div className="order-1 lg:order-2">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full max-w-md mx-auto">
                                        <Image
                                            src="/images/about/director.jpg"
                                            alt="Rajendra Singh Rajput"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </div>
    );
}
