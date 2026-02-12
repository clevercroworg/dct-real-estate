export default function FinalCTA() {
    return (
        <section className="bg-[#061B3A] py-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* TEXT */}
                    <div className="max-w-xl">
                        <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-1">
                            Let’s Discuss Your Next Investment
                        </h3>
                        <p className="text-white/70 text-sm">
                            Reach out directly to our team for enquiries and site visits.
                        </p>
                    </div>

                    {/* CALL BUTTONS */}
                    <div className="flex gap-3">
                        {/* PHONE 1 */}
                        <a
                            href="tel:6264883066"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-blue font-medium rounded-md transition hover:bg-[#d4b15f] hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-[#061B3A]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M2 4.5C2 3.12 3.12 2 4.5 2h2c.83 0 1.58.51 1.88 1.29l.97 2.42a2 2.42 0 01-.45 2.11L7.5 9.5a12.5 12.5 0 007 7l1.68-1.4a2 2 0 012.11-.45l2.42.97A2 2 0 0122 17.5v2c0 1.38-1.12 2.5-2.5 2.5C9.61 22 2 14.39 2 4.5z"
                                />
                            </svg>
                            62648&nbsp;83066
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
