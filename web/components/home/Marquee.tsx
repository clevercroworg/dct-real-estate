export default function Marquee() {
    const items = [
        { text: 'Villas' },
        { text: 'Integrated Enclaves' },
        { text: 'Plotted Developments', highlight: true },
        { text: 'Clubs' },
        { text: 'Hotels', highlight: true },
        { text: 'Convention Centres' },
        { text: 'Schools' },
        { text: 'Offices', highlight: true },
        { text: 'Retail Spaces' },
        { text: 'Industrial Parks' },
    ];

    return (
        <section className="relative overflow-hidden bg-brand-gold py-3 border-t border-white/20 shine-bg">
            <div className="marquee">
                <div className="marquee-track">
                    {/* Loop twice to ensure seamless scrolling */}
                    {[...items, ...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center gap-7">
                            <span
                                className={`font-heading text-[18px] md:text-[22px] font-medium ${item.highlight ? 'text-white font-semibold' : 'text-brand-blue/85'
                                    }`}
                            >
                                {item.text}
                            </span>
                            <span className="text-brand-blue/85 text-[18px]">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
