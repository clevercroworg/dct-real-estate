interface Landmark {
    category: string;
    icon: string;
    items: {
        name: string;
        type: string;
        distance: string;
        time: string;
    }[];
}

interface ProjectLocationProps {
    title?: string;
    landmarks?: Landmark[];
}

export default function ProjectLocation({ title, landmarks }: ProjectLocationProps) {
    const defaultLandmarks: Landmark[] = [
        {
            category: "Hospitals",
            icon: "medkit-outline",
            items: [
                { name: "Bilaspur District Hospital", type: "General Hospital", distance: "10.5 km", time: "~15 mins" },
                { name: "Medicover Hospital", type: "Private Hospital", distance: "13.0 km", time: "~20 mins" },
                { name: "Shree Sai Hospital", type: "Multi-specialty", distance: "14.3 km", time: "~22 mins" }
            ]
        },
        {
            category: "Shopping",
            icon: "cart-outline",
            items: [
                { name: "City Mall", type: "Shopping Mall", distance: "7.5 km", time: "~11 mins" },
                { name: "Reliance Smart", type: "Supermarket", distance: "12.0 km", time: "~18 mins" },
                { name: "The Big Bazaar", type: "Retail Store", distance: "15.8 km", time: "~24 mins" }
            ]
        },
        // ... (other default landmarks can be added here or we can just rely on props being passed for other projects)
    ];

    // If no landmarks provided, and it's not the default Chitvan page (implied by title check or just use default if empty?), 
    // we should probably have a generic fallback or just show empty. 
    // For now, let's use defaultLandmarks if nothing passed, assuming we want to mimic Chitvan's style, 
    // BUT since we are customizing, we should pass specific empty arrays if we want to show nothing.
    // However, to avoid breaking existing Chitvan page if I forget to update it (I will update it), I'll default to defaultLandmarks.

    const displayLandmarks = landmarks || defaultLandmarks;
    const displayTitle = title || "Everything within easy reach";

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col gap-3 mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D]">Nearby Places</p>
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">{displayTitle}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {displayLandmarks.map((landmark, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                            <h3 className="font-heading text-xl font-semibold text-[#061B3A] mb-6 flex items-center gap-2">
                                {/* @ts-expect-error: ion-icon custom element */}
                                <ion-icon name={landmark.icon} class="text-[#C9A24D]"></ion-icon>
                                {landmark.category}
                            </h3>
                            <div className="space-y-6 text-sm text-gray-600">
                                {landmark.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-medium text-[#061B3A] text-base">{item.name}</p>
                                            <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-[#061B3A]">{item.distance}</p>
                                            <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
