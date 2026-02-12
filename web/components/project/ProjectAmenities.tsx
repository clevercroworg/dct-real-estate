interface AmenityItem {
    icon: string;
    name: string;
}

interface ProjectAmenitiesProps {
    title?: string;
    amenities?: AmenityItem[];
}

export default function ProjectAmenities({ title, amenities }: ProjectAmenitiesProps) {
    const defaultAmenities = [
        { icon: "enter-outline", name: "Grand Entrance Gate" },
        { icon: "business-outline", name: "Grand Clubhouse" },
        { icon: "water-outline", name: "Swimming Pool" },
        { icon: "happy-outline", name: "Kids Play Area" },
        { icon: "flash-outline", name: "Individual Transformer" },
        { icon: "barbell-outline", name: "Open-Air Gym" },
        { icon: "trail-sign-outline", name: "Wide Roads" },
        { icon: "leaf-outline", name: "Yoga Center" },
        { icon: "leaf-outline", name: "Plantation" },
        { icon: "flower-outline", name: "Lush Green Garden" },
        { icon: "shield-checkmark-outline", name: "Secured Campus" },
        { icon: "lock-closed-outline", name: "Security Guard Room" },
    ];

    const displayAmenities = amenities || defaultAmenities;
    const displayTitle = title || "Designed for everyday ease";

    return (
        <section className="py-16 bg-[#061B3A] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">Amenities</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">{displayTitle}</h2>
                    </div>
                    <a href="tel:6264883066" className="px-6 py-2 rounded-full border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-[#061B3A] transition-all">
                        Call for pricing
                    </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {displayAmenities.map((item, idx) => (
                        <div key={idx} className="p-6 bg-white/5 rounded-2xl text-white/80 flex items-center gap-4 hover:bg-white/10 transition-colors group">
                            <span className="p-2 rounded-full bg-white/5 group-hover:bg-[#C9A24D] transition-colors">
                                {/* @ts-expect-error: ion-icon custom element */}
                                <ion-icon name={item.icon} class="text-[#C9A24D] text-lg group-hover:text-[#061B3A] transition-colors"></ion-icon>
                            </span>
                            <span className="font-light tracking-wide">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
