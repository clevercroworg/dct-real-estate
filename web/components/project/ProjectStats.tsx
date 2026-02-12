interface StatItem {
    icon: string;
    label: string;
    value: string;
    description: string;
}

interface ProjectStatsProps {
    stats?: StatItem[];
}

export default function ProjectStats({ stats }: ProjectStatsProps) {
    const defaultStats: StatItem[] = [
        {
            icon: "leaf-outline",
            label: "Signature",
            value: "Living Ecosystem",
            description: "Greens, water, and open spaces designed to breathe."
        },
        {
            icon: "home-outline",
            label: "Community",
            value: "Farmhouse Living",
            description: "Private plots with shared wellness and social spaces."
        },
        {
            icon: "navigate-outline",
            label: "Connectivity",
            value: "NH 130 Corridor",
            description: "Mohda Mod, Bhojpuri Toll Plaza, Bilaspur."
        }
    ];

    const displayStats = stats || defaultStats;

    return (
        <section className="pt-10 pb-14 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-6 bg-[#0C1B33] text-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                    {displayStats.map((stat, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                <ion-icon name={stat.icon} class="text-[#C9A24D] text-2xl"></ion-icon>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                                <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                                <p className="text-sm text-white/70 mt-2">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
