import ProjectCard from '@/components/ProjectCard';

export const metadata = {
    title: 'All Projects | DCT Real Estate',
    description: 'Explore the complete portfolio of DCT Real Estate, including ongoing, completed, and commercial developments in Bilaspur.',
};

export default function AllProjectsPage() {
    const projects = [
        // ONGOING
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
            status: 'Ongoing',
            rera: 'RERA: PCGRERA220824001808',
            link: '/projects/aishwaryam',
            delay: 100,
        },
        {
            title: 'Chitvan Farm',
            location: 'In front of LCIT College, Raipur Road, Bilaspur',
            description: 'Farmhouse living on NH 130 with curated open spaces and club-style amenities.',
            image: '/images/project-chitvan.jpg',
            badge: 'Farmhouse',
            status: 'Ongoing',
            rera: 'RERA: PCGRERA060524001774',
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
        // COMPLETED
        {
            title: 'Krishnapuram',
            location: 'Near Bilha Turning, Raipur Road, Bilaspur',
            description: 'RERA-approved plotted community with landscaped zones and planned infrastructure.',
            image: '/images/vertical-residential.jpg',
            badge: 'Residential',
            status: 'Completed',
            link: '/projects/krishnapuram',
            delay: 0,
        },
        {
            title: 'Bilaspur Textile Market',
            location: 'Parsada, Raipur Road, Bilaspur',
            description: 'A purpose-built commercial destination with modern infrastructure and strong visibility.',
            image: '/images/vertical-commercial.jpg',
            badge: 'Commercial',
            status: 'Completed',
            link: '/projects/bilaspur-textile-market',
            delay: 100,
        },
        {
            title: 'Shri Ram Park',
            location: 'Behind High Court, Chhatauna Road, Bilaspur',
            description: 'A planned residential layout with strong connectivity and a serene environment.',
            image: '/images/vertical-villas.jpg',
            badge: 'Residential',
            status: 'Completed',
            link: '/projects/shri-ram-park',
            delay: 200,
        },
        {
            title: 'Induimperial',
            location: 'Behind High Court, Raipur Road, Bilaspur',
            description: 'Premium living with wellness amenities, landscaped greens, and a secured campus.',
            image: '/images/vertical-apartments.jpg',
            badge: 'Residential',
            status: 'Completed',
            link: '/projects/induimperial',
            delay: 300,
        },
    ];

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative min-h-[50vh] flex items-end">
                <div className="absolute inset-0">
                    <img
                        src="/images/launch-1.jpg"
                        alt="All Projects"
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
                            Our Portfolio
                        </h1>
                        <p className="text-white/80 mt-4 text-base lg:text-lg leading-relaxed">
                            Discover our complete range of ongoing and completed developments, from residential communities to commercial hubs.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D] mb-3">Project Showcase</p>
                            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                                All Projects
                            </h2>
                            <p className="text-slate-600 mt-3 text-lg">
                                Explore every opportunity we offer for investment, business, and quality living.
                            </p>
                        </div>
                        <button className="px-6 py-3 rounded-full bg-[#C9A24D] text-[#061B3A] font-semibold text-xs uppercase tracking-widest hover:bg-[#d4b15f] transition-all shadow-lg hover:shadow-[#C9A24D]/30 inline-flex items-center gap-2">
                            {/* @ts-expect-error: ion-icon custom element */}
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
                                {/* @ts-expect-error: ion-icon custom element */}
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
