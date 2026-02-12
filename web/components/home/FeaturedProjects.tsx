import Link from 'next/link';

export default function FeaturedProjects() {
    return (
        <section className="bg-[#061B3A] py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                    <div className="max-w-3xl">
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-white/70 text-lg">
                            A selection of our signature developments that reflect our commitment
                            to quality, thoughtful planning, and long-term value.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="mt-6 lg:mt-0 inline-flex items-center text-white font-medium hover:underline"
                    >
                        View All Projects →
                    </Link>
                </div>

                {/* PROJECT GRID */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* PROJECT 1 */}
                    <div className="group bg-white rounded-[14px] overflow-hidden shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(1,30,81,0.14)] transition-all duration-200 reveal">
                        <img
                            src="/images/project-vihar.jpg"
                            alt="Krishnapuram Project"
                            className="w-full h-[260px] object-cover block"
                        />
                        <div className="px-7 pt-[26px] pb-8">
                            <span className="inline-block text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-[20px] font-medium bg-[#011E51]/10 text-[#011E51]">
                                Ongoing
                            </span>
                            <h3 className="font-heading text-[20px] font-semibold text-[#011E51] mt-2.5 mb-1.5">
                                Anand Vihar
                            </h3>
                            <p className="text-[#64748B] text-[14px] mb-4">
                                Plot Development · Akaltara
                            </p>
                            <Link href="/projects/ongoing" className="text-[#011E51] font-medium transition-all duration-150 hover:text-brand-gold hover:translate-x-1 inline-block">
                                View Project →
                            </Link>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="group bg-white rounded-[14px] overflow-hidden shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(1,30,81,0.14)] transition-all duration-200 reveal">
                        <img
                            src="/images/project-aishwaryam.png"
                            alt="Arpa Business Park"
                            className="w-full h-[260px] object-cover block"
                        />
                        <div className="px-7 pt-[26px] pb-8">
                            <span className="inline-block text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-[20px] font-medium bg-[#C9A24D]/15 text-[#8A6A2D]">
                                Commercial
                            </span>
                            <h3 className="font-heading text-[20px] font-semibold text-[#011E51] mt-2.5 mb-1.5">
                                Aishwaryam
                            </h3>
                            <p className="text-[#64748B] text-[14px] mb-4">
                                Commercial Project · Bilaspur
                            </p>
                            <Link href="/projects/commercial" className="text-[#011E51] font-medium transition-all duration-150 hover:text-brand-gold hover:translate-x-1 inline-block">
                                View Project →
                            </Link>
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="group bg-white rounded-[14px] overflow-hidden shadow-[0_20px_40px_rgba(1,30,81,0.08)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(1,30,81,0.14)] transition-all duration-200 reveal">
                        <img
                            src="/images/project-chitvan.jpg"
                            alt="Dwarkapuram Project"
                            className="w-full h-[260px] object-cover block"
                        />
                        <div className="px-7 pt-[26px] pb-8">
                            <span className="inline-block text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-[20px] font-medium bg-green-600/10 text-green-800">
                                Residential
                            </span>
                            <h3 className="font-heading text-[20px] font-semibold text-[#011E51] mt-2.5 mb-1.5">
                                Chitvan Farmhouse
                            </h3>
                            <p className="text-[#64748B] text-[14px] mb-4">
                                Farmhouse · Bilaspur
                            </p>
                            <Link href="/projects/chitvan-farm" className="text-[#011E51] font-medium transition-all duration-150 hover:text-brand-gold hover:translate-x-1 inline-block">
                                View Project →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
