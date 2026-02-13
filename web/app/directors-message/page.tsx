import ScrollReveal from '../components/ScrollReveal';

export default function DirectorsMessagePage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white py-20 overflow-hidden">
                    {/* TODO: Replace '/images/about/about.jpg' with '/images/background/bg-4.jpg' when available */}
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/about/about.jpg')" }}></div>
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
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img src="/images/about/director.jpg" alt="Rajendra Singh Rajput" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: NITIN GADKARI */}
                <section className="py-20 bg-[#F7F3EA] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-1">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                        <img src="/images/about/nitin.jpg" alt="Honored by Nitin Gadkari" className="w-full h-auto object-cover" />
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="order-2">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="bg-brand-gold text-white inline-block px-6 py-2 rounded-full font-bold mb-6">
                                        Achievements & Recognition
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Honored by Union Minister Nitin Gadkari
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        Rajendra Singh Rajput has built a distinguished reputation in the real estate sector.
                                        His dedication to excellence has earned him notable recognition, including the honor
                                        of meeting <strong>Nitin Gadkari</strong>, the Union Minister for Road Transport & Highways of India.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        This recognition highlights Rajendra's leadership in real estate development and his
                                        role in shaping Bilaspur's evolving landscape.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ASHUTOSH RANA */}
                <section className="py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="bg-brand-gold text-white inline-block px-6 py-2 rounded-full font-bold mb-6">
                                        Celebrity Recognition
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Appreciated by Ashutosh Rana
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        Rajendra Singh Rajput, a distinguished leader, has been honored with a prestigious
                                        medal for excellence. His remarkable contributions were further acknowledged by
                                        renowned Indian actor <strong>Ashutosh Rana</strong>, who praised his transformative impact on the sector.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Through his visionary developments, Rajendra continues to drive innovation and
                                        growth in Bilaspur.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <div className="order-1 lg:order-2">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <img src="/images/about/asutosh.jpg" alt="With Ashutosh Rana" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: ZEE NEWS */}
                <section className="py-20 bg-[#F7F3EA] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-1">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-white aspect-square max-w-md mx-auto">
                                        <img src="/images/about/zee.jpg" alt="Zee News Award" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="order-2">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="bg-brand-gold text-white inline-block px-6 py-2 rounded-full font-bold mb-6">
                                        Industry Leadership
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Recognized by Zee MP-CG News
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        Rajendra Singh Rajput has been honored by <strong>Zee MP CG News</strong> for his
                                        outstanding contributions to the real estate industry. His visionary work continues
                                        to shape Bilaspur's landscape, driving innovation and sustainable growth.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Through his dedication and leadership, Rajendra has solidified his reputation as a
                                        key figure in transforming the region.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: CM BHUPESH BAGHEL */}
                <section className="py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <ScrollReveal animationClass="animate-slide-left">
                                    <div className="bg-brand-gold text-white inline-block px-6 py-2 rounded-full font-bold mb-6">
                                        State Honor
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-6">
                                        Honored by CM Bhupesh Baghel
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        Rajendra Singh Rajput has been honored by Chhattisgarh Chief Minister <strong>Bhupesh Baghel</strong>
                                        for his remarkable contributions to the real estate industry. This prestigious
                                        recognition underscores his dedication to driving Bilaspur's growth and enhancing
                                        infrastructure.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        His visionary leadership continues to shape the region's real estate landscape,
                                        fostering sustainable development.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <div className="order-1 lg:order-2">
                                <ScrollReveal animationClass="animate-slide-right">
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <img src="/images/about/bhupesh.jpg" alt="With CM Bhupesh Baghel" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
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
