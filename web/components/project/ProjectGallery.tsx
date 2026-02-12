import Link from 'next/link';

export default function ProjectGallery() {
    return (
        <section className="py-20 bg-[#061B3A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-2">Gallery</p>
                        <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white">Chitvan walkthrough</h3>
                        <p className="text-sm text-white/70 mt-2">A glimpse of the clubhouse, greens, and outdoor living.</p>
                    </div>
                    <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-[#C9A24D] inline-flex items-center gap-2 transition-colors">
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="calendar-outline"></ion-icon>
                        Book a visit
                    </Link>
                </div>

                {/* Video Main */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black ring-1 ring-white/10">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube-nocookie.com/embed/yur8jcoeX-c?autoplay=0&rel=0"
                                title="Chitvan Farmhouse video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className="relative group overflow-hidden rounded-xl bg-white/5 h-32 md:h-48">
                            <img
                                src={`/images/chitvan-gallery-${item}.png`}
                                alt={`Chitvan gallery ${item}`}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
