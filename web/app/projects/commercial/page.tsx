import ProjectCard from '@/components/ProjectCard';

export const metadata = {
    title: 'Commercial Projects | DCT Real Estate',
    description: 'Explore commercial projects by DCT Real Estate in Bilaspur with premium locations and modern infrastructure.',
};

export default function CommercialProjectsPage() {
    // Matching the content from commercial-projects.html (which appears to be placeholders, but strictly following source)
    const projects = [
        {
            title: 'Anand Vihar',
            location: 'Akaltara',
            description: 'A calm residential community focused on plotted living and everyday convenience.',
            image: '/images/project-vihar.jpg',
            badge: 'Residential',
            status: 'Ongoing',
            link: '/projects/anand-vihar',
            delay: 0,
        },
        {
            title: 'Aishwaryam',
            location: 'Opp. LCIT College, Raipur Road, Bilaspur',
            description: 'T&CP approved layout with strong road access on NH 130.',
            image: '/images/project-aishwaryam.png',
            badge: 'Clubhouse',
            rera: 'RERA: PCGRERA220824001808',
            status: 'Ongoing',
            link: '/projects/aishwaryam',
            delay: 100,
        },
        {
            title: 'Chitvan Farm',
            location: 'In front of LCIT College, Raipur Road, Bilaspur',
            description: 'Farmhouse living on NH 130 with curated open spaces and club-style amenities.',
            image: '/images/project-chitvan.jpg',
            badge: 'Farmhouse',
            rera: 'RERA: PCGRERA060524001774',
            status: 'Ongoing',
            link: '/projects/chitvan-farm',
            delay: 200,
        },
        {
            title: 'Gold Farm House',
            location: 'Vill. Jarondha, Takhatpur-Mungeli Road, Bilaspur',
            description: 'T&CP approved farmhouse plots positioned for peaceful living and returns.',
            image: '/images/project-arpa.jpg',
            badge: 'Farmhouse Plots',
            status: 'Ongoing',
            link: '/projects/gold-farm-house',
            delay: 300,
        },
    ];

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative min-h-[52vh] flex items-end">
                <div className="absolute inset-0">
                    <img
                        src="/images/launch-1.jpg"
                        alt="Commercial projects"
                        className="w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(6,27,58,0.98), rgba(6,27,58,0.65), rgba(6,27,58,0.98))' }}></div>
                    <div className="absolute inset-0 z-10 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(6,27,58,0.28) 0 1px, transparent 1px 18px), repeating-linear-gradient(90deg, rgba(6,27,58,0.28) 0 1px, transparent 1px 18px)' }}></div>
                    <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(6,27,58,0.18)' }}></div>
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
                    <div className="max-w-2xl">
                        <p className="text-[#C9A24D] text-xs tracking-[0.35em] uppercase mb-4">DCT Real Estate</p>
                        <h1 className="font-heading text-white text-4xl lg:text-5xl font-semibold leading-tight">
                            Commercial Projects
                        </h1>
                        <p className="text-white/80 mt-4 text-base lg:text-lg leading-relaxed">
                            Explore DCT’s commercial developments designed for visibility, accessibility,
                            and long-term business value.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">What we build</p>
                            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                                Our Commercial Portfolio
                            </h2>
                            <p className="text-slate-600 mt-3 text-lg">
                                Carefully selected sites with strong connectivity, robust infrastructure, and
                                a clear path to lifestyle upgrades.
                            </p>
                        </div>
                        <button className="px-6 py-3 rounded-full bg-[#C9A24D] text-[#061B3A] font-semibold text-xs uppercase tracking-widest hover:bg-[#d4b15f] transition-all shadow-lg hover:shadow-[#C9A24D]/30 inline-flex items-center gap-2">
                            <ion-icon name="calendar-outline"></ion-icon>
                            Schedule a Site Visit
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#061B3A] py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#05162F] px-10 py-16 lg:px-20 shadow-2xl">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A24D]/20 blur-[100px]"></div>

                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
                            <div className="max-w-2xl">
                                <h3 className="font-heading text-3xl lg:text-4xl text-white font-semibold">
                                    Let’s shortlist your next investment
                                </h3>
                                <p className="text-white/70 mt-4 text-lg font-light">
                                    Our team can share layouts, price details, and site visit options.
                                </p>
                            </div>
                            <a
                                href="tel:6264883066"
                                className="px-8 py-4 rounded-full bg-white text-[#061B3A] font-bold text-sm uppercase tracking-widest hover:bg-[#C9A24D] hover:text-[#061B3A] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
                            >
                                <ion-icon name="call-outline" class="text-xl"></ion-icon>
                                Call +91 62648 83066
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
