export default function Testimonials() {
    const testimonials = [
        { text: "DCT delivered exactly what was promised. Quality and transparency gave us full confidence.", author: "Rajesh Kumar", meta: "Google Review" },
        { text: "Professional team and timely execution. A developer we trust.", author: "Suresh Patel", meta: "Google Review" },
        { text: "Clear communication and smooth process from booking to handover.", author: "Anjali Verma", meta: "Google Review" },
        { text: "DCT stands out for execution and delivery discipline.", author: "Vikas Singh", meta: "Google Review" },
        { text: "A well-managed and transparent developer.", author: "Pooja Mehta", meta: "Google Review" },
        { text: "Reliable developer with strong customer focus.", author: "Amit Jain", meta: "Google Review" },
        { text: "Professional execution and quality delivery.", author: "Kavita Rao", meta: "Google Review" },
    ];

    // Helper to render a column of cards
    const renderColumn = (speedClass: string, items: typeof testimonials) => (
        <div className={`testimonial-column ${speedClass}`}>
            <div className="testimonial-track">
                {[...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="testimonial-card bg-white p-6 md:p-7 rounded-2xl shadow-[0_20px_40px_rgba(1,30,81,0.08)]">
                        <div className="stars text-[#C9A24D] text-sm mb-1.5 tracking-widest">★★★★★</div>
                        <p className="testimonial-text text-[15px] leading-relaxed text-slate-700 mb-3.5">
                            “{item.text}”
                        </p>
                        <div className="testimonial-author">
                            <span className="author-name font-semibold text-[#061B3A] block">{item.author}</span>
                            <span className="author-meta text-[13px] text-slate-500">{item.meta}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="bg-[#F8FAFC] py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* HEADER */}
                <div className="max-w-3xl mb-14">
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-blue mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-text-muted text-lg">
                        Trusted by homeowners, investors, and partners for quality,
                        transparency, and timely delivery.
                    </p>
                </div>

                {/* VIEWPORT */}
                <div className="testimonial-viewport relative h-[520px] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-20 before:bg-gradient-to-b before:from-[#F8FAFC] before:to-transparent before:z-10 after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-gradient-to-t after:from-[#F8FAFC] after:to-transparent after:z-10">
                    {/* GRID */}
                    <div className="testimonial-columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {renderColumn('slow', testimonials.slice(0, 2))}
                        {renderColumn('medium', testimonials.slice(2, 4))}
                        {renderColumn('fast', testimonials.slice(4, 6))}
                        <div className="hidden lg:block">
                            {renderColumn('slow', testimonials.slice(1, 3))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
