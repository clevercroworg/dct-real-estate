import Link from 'next/link';

export default function ProjectExperiences() {
    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">Signature Experiences</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                            Where nature meets crafted community living
                        </h2>
                    </div>
                    <Link href="/contact" className="text-sm font-medium text-[#061B3A] hover:text-[#C9A24D] inline-flex items-center gap-2 transition-colors">
                        <ion-icon name="call-outline"></ion-icon>
                        Speak to an advisor
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#F1F5F9] mb-6">
                            <img src="/images/chitvan-experience-1.png" alt="Clubhouse Social Core" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A]">Clubhouse Social Core</h3>
                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            A gathering hub for celebrations, fitness, and everyday leisure. Designed to bring neighbors together.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#F1F5F9] mb-6">
                            <img src="/images/chitvan-experience-2.png" alt="Wellness Outdoors" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A]">Wellness Outdoors</h3>
                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Open-air gym, yoga lawns, and tree-lined walkways. A focused approach to health and wellbeing.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#F1F5F9] mb-6">
                            <img src="/images/chitvan-experience-3.png" alt="Secure Living" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A]">Secure Living</h3>
                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Round-the-clock security and a dedicated guard room ensuring peace of mind for every family.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
