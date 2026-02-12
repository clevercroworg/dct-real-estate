export default function ProjectFeatures() {
    const features = [
        "State-of-the-art fitness center",
        "Luxurious swimming pools",
        "Spacious parking area",
        "Panoramic green views",
        "Dedicated children’s play zone",
        "Beautifully landscaped gardens",
        "Premium modular kitchen setup",
        "Advanced fire safety measures",
        "Elegant high-quality doors",
        "Well-designed storage spaces",
        "Polished marble flooring"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
                    <div>
                        <img
                            src="/images/chitvan-features.png"
                            alt="Project amenities"
                            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">Property Features</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                            Designed for elevated farmhouse living
                        </h2>
                        <ul className="mt-8 grid sm:grid-cols-2 gap-x-4 gap-y-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
