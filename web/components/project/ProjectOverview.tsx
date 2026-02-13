'use client';

interface OverviewDetail {
    label: string;
    value: string;
}

interface ProjectOverviewProps {
    title: string;
    description: React.ReactNode;
    details: OverviewDetail[];
    brochureLink?: string;
    brochurePoints?: string[];
}

export default function ProjectOverview({ title, description, details, brochureLink = '#', brochurePoints }: ProjectOverviewProps) {
    const handleBrochureSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate download
        window.open(brochureLink, '_blank');
    };

    const defaultPoints = [
        "Clubhouse, swimming pool, and community hubs.",
        "Open-air gym and yoga center in nature.",
        "Secured campus with dedicated guard room."
    ];

    const displayPoints = brochurePoints || defaultPoints;

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">

                    {/* Text Content */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">The Estate</p>
                        <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-[#061B3A]">
                            {title}
                        </h2>
                        <div className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                            {description}
                        </div>

                        <div className="mt-10 grid sm:grid-cols-2 gap-4">
                            {details.map((detail, index) => (
                                <div key={index} className="p-6 border border-gray-200 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <p className="text-xs uppercase tracking-widest text-gray-500">{detail.label}</p>
                                    <p className="mt-2 font-semibold text-[#061B3A] text-lg">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brochure Card */}
                    <div className="bg-[#0C1B33] text-white p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit">
                        {/* Background decorations */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A24D]/10 rounded-full blur-3xl"></div>

                        <div className="flex items-center justify-between relative z-10">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Brochure</p>
                            <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-white/10 rounded-full">Limited Units</span>
                        </div>

                        <h3 className="font-heading text-2xl font-semibold mt-4 relative z-10">Download the brochure</h3>
                        <p className="text-sm text-white/70 mt-3 relative z-10">Enter your details for instant access.</p>

                        <form className="mt-8 grid gap-4 relative z-10" onSubmit={handleBrochureSubmit}>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Full name"
                                className="w-full border border-white/20 bg-white/5 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#C9A24D] focus:bg-white/10 text-white placeholder-white/40 transition-all"
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone number"
                                className="w-full border border-white/20 bg-white/5 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#C9A24D] focus:bg-white/10 text-white placeholder-white/40 transition-all"
                            />
                            <button
                                type="submit"
                                className="rounded-full w-full justify-center inline-flex items-center gap-2 px-4 py-4 text-xs tracking-widest font-semibold uppercase bg-[#C9A24D] text-[#061B3A] shadow-lg shadow-[#C9A24D]/20 hover:-translate-y-0.5 hover:shadow-[#C9A24D]/40 transition-all"
                            >
                                <ion-icon name="download-outline" class="text-[#061B3A] text-lg"></ion-icon>
                                Download Brochure
                            </button>
                            <p className="text-[11px] text-white/60 text-center">
                                By submitting, you agree to receive a call from DCT.
                            </p>
                        </form>

                        <div className="mt-8 border-t border-white/10 pt-6 grid gap-3 text-sm text-white/70 relative z-10">
                            {displayPoints.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <ion-icon name="checkmark-circle-outline" class="text-[#C9A24D] text-lg"></ion-icon>
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
