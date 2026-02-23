import Link from 'next/link';
import Image from 'next/image';

interface ProjectGalleryProps {
    title?: string;
    description?: string;
    videoUrl?: string | string[]; // YouTube embed URL or array of URLs
    images?: string[];
}

export default function ProjectGallery({ title, description, videoUrl, images }: ProjectGalleryProps) {
    const defaultImages = [
        "/images/banners/launch-1.jpg",
        "/images/banners/launch-2.jpg",
        "/images/verticals/vertical-farmhouse.jpg",
        "/images/verticals/vertical-villas.jpg",
        "/images/verticals/vertical-plotted.jpg",
        "/images/verticals/vertical-residential.jpg",
        "/images/verticals/vertical-commercial.jpg",
        "/images/projects/project-chitvan.jpg"
    ];

    let displayImages = images || defaultImages;

    // Ensure full rows for 4-column grid
    const remainder = displayImages.length % 4;
    if (remainder !== 0) {
        const missing = 4 - remainder;
        const placeholders = Array(missing).fill("/images/gallery-placeholder.svg");
        displayImages = [...displayImages, ...placeholders];
    }
    const displayTitle = title || "Chitvan walkthrough";
    const displayDesc = description || "A glimpse of the clubhouse, greens, and outdoor living.";

    return (
        <section className="py-20 bg-[#061B3A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-2">Gallery</p>
                        <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white">{displayTitle}</h3>
                        <p className="text-sm text-white/70 mt-2">{displayDesc}</p>
                    </div>
                    <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-[#C9A24D] inline-flex items-center gap-2 transition-colors">
                        <ion-icon name="calendar-outline"></ion-icon>
                        Book a visit
                    </Link>
                </div>

                {/* Video Main */}
                <div className="max-w-5xl mx-auto mb-20 lg:mb-28">
                    {(() => {
                        const urls = Array.isArray(videoUrl) ? videoUrl : (videoUrl ? [videoUrl] : []);

                        if (urls.length > 0) {
                            return (
                                <div className={`grid gap-6 ${urls.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                                    {urls.map((url, idx) => (
                                        <div key={idx} className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black ring-1 ring-white/10 aspect-video">
                                            <iframe
                                                className="w-full h-full"
                                                src={url}
                                                title={`${displayTitle} video ${idx + 1}`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            >
                                            </iframe>
                                        </div>
                                    ))}
                                </div>
                            );
                        } else {
                            return (
                                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black ring-1 ring-white/10 aspect-video">
                                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                        <div className="text-center">
                                            <ion-icon name="videocam-off-outline" class="text-5xl text-white/10 mb-3"></ion-icon>
                                            <p className="text-white/20 text-sm tracking-widest uppercase">Video Walkthrough Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })()}
                </div>

                {/* Image Gallery Heading */}
                <div className="mb-8 flex items-center gap-4">
                    <h4 className="text-lg lg:text-xl font-semibold text-white tracking-wide">Image Gallery</h4>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {displayImages.map((imgSrc, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-xl bg-white/5 h-32 md:h-48">
                            <Image
                                src={imgSrc}
                                alt={`Gallery image ${idx + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
