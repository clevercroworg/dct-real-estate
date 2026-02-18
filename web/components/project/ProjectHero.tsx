"use client";

import { useVisitModal } from './VisitModalContext';
import Image from 'next/image';

interface ProjectHeroProps {
    title: string;
    tagline: string;
    location: string;
    bgImage: string;
    videoUrl?: string; // If we want a video background later
    badges: string[];
}

export default function ProjectHero({
    title,
    tagline,
    location,
    bgImage,
    badges,
    videoUrl,
}: ProjectHeroProps) {
    const { openModal } = useVisitModal();
    return (
        <section className="pt-24 pb-8">
            <div className="relative w-full overflow-hidden rounded-b-[38px] min-h-[45vh] lg:min-h-[48vh] shadow-2xl group">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                    sizes="100vw"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,162,77,0.18),transparent_55%)]"></div>
                <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.15'/></svg>")` }}>
                </div>

                <span className="absolute top-6 right-6 z-10 px-3 py-1 text-[10px] uppercase tracking-widest bg-white/10 text-white rounded-full border border-white/20 backdrop-blur">
                    New Launch
                </span>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center px-4 lg:px-6 py-12 lg:py-16 w-full">

                        <div className="max-w-2xl">
                            <p className="text-[#C9A24D] text-xs tracking-[0.35em] uppercase mb-4">{tagline}</p>
                            <h1 className="font-heading text-white text-4xl lg:text-6xl font-semibold leading-tight drop-shadow-[0_6px_30px_rgba(6,27,58,0.6)]">
                                {title}
                            </h1>
                            <p className="text-white/80 mt-4 text-base lg:text-lg flex items-center gap-2">
                                <ion-icon name="location-outline" class="text-[#C9A24D]"></ion-icon>
                                {location}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {badges.map((badge, idx) => (
                                    <span
                                        key={idx}
                                        className={`text-[11px] uppercase tracking-widest px-3 py-1 rounded-full ${idx === 0 ? 'bg-[#C9A24D] text-[#061B3A]' : 'bg-white/10 text-white'}`}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A24D] text-[#061B3A] text-xs font-semibold uppercase tracking-widest shadow-lg shadow-[#C9A24D]/30 hover:-translate-y-0.5 transition-transform"
                                >
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    Book a site visit
                                </button>
                                <a
                                    href="tel:6264883066"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-widest hover:border-[#C9A24D] hover:text-[#C9A24D] transition-colors"
                                >
                                    <ion-icon name="call-outline"></ion-icon>
                                    Call now
                                </a>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-white/70">
                                <span className="inline-flex items-center gap-2">
                                    <ion-icon name="home-outline" class="text-[#C9A24D]"></ion-icon>
                                    Clubhouse
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <ion-icon name="water-outline" class="text-[#C9A24D]"></ion-icon>
                                    Swimming Pool
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <ion-icon name="shield-checkmark-outline" class="text-[#C9A24D]"></ion-icon>
                                    Secured Campus
                                </span>
                            </div>
                        </div>

                        <div className="w-full hidden lg:block">
                            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-black border border-white/10 group-hover:border-[#C9A24D]/30 transition-colors">
                                <div className="aspect-video">
                                    {videoUrl ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={videoUrl}
                                            title="project video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        >
                                        </iframe>
                                    ) : (
                                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                            <div className="text-center">
                                                <ion-icon name="image-outline" class="text-4xl text-white/20 mb-2"></ion-icon>
                                                <p className="text-white/30 text-xs tracking-widest uppercase">Video Coming Soon</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}
