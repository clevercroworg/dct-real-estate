export default function WhyDCT() {
    const reasons = [
        { number: '01', title: 'Expertise & Leadership', desc: 'Industry experts with proven experience and hands-on leadership across every stage of development.' },
        { number: '02', title: 'Transparency & Trust', desc: 'Clear communication, integrity, and a client-first approach that builds lasting relationships.' },
        { number: '03', title: 'Timely & Reliable Delivery', desc: 'Disciplined planning and execution that ensures on-time project completion.' },
        { number: '04', title: 'Innovation & Technology', desc: 'Advanced tools, adaptive strategies, and continuous innovation for better outcomes.' },
        { number: '05', title: 'Sustainable Development', desc: 'Eco-conscious practices focused on long-term environmental and economic value.' },
        { number: '06', title: 'Flexible & Cost-Effective', desc: 'Tailored solutions that balance quality, efficiency, and competitive pricing.' },
    ];

    return (
        <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="max-w-3xl mb-20">
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-blue mb-4">
                        Why DCT Real Estate
                    </h2>
                    <p className="text-text-muted text-lg">
                        Six core principles that define how we plan, build, and deliver
                        long-term value across every development.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="group relative px-9 py-[42px] rounded-[14px] overflow-hidden transition-all duration-300 ease-out bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,1))] shadow-[0_18px_40px_rgba(1,30,81,0.06)] hover:-translate-y-2.5 hover:shadow-[0_40px_80px_rgba(1,30,81,0.12)] hover:bg-[#C9A24D] hover:bg-none reveal"
                        >
                            <div className="absolute top-[18px] right-[22px] text-[72px] font-bold text-[#011E51]/[0.06] transition-all duration-400 ease-out group-hover:text-white/90 group-hover:-translate-y-1.5 select-none">
                                {item.number}
                            </div>
                            <h3 className="relative z-10 font-heading text-[20px] font-semibold text-[#011E51] mb-3 transition-colors duration-300 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="relative z-10 text-[#475569] text-[15px] leading-relaxed max-w-[420px] transition-colors duration-300 group-hover:text-white">
                                {item.desc}
                            </p>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(90deg,#C9A24D,rgba(201,162,77,0.4))] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-white/90"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
