'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGalleryProps {
    title?: string;
    description?: string;
    videoUrl?: string | string[]; // YouTube embed URL or array of URLs
    images?: string[];
}

export default function ProjectGallery({ title, description, videoUrl, images }: ProjectGalleryProps) {
    const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null);

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

    // Filter out placeholders for the actual clickable images array
    const actualImages = displayImages.filter(img => !img.includes('placeholder'));

    // Ensure full rows for 4-column grid display
    const remainder = displayImages.length % 4;
    if (remainder !== 0) {
        const missing = 4 - remainder;
        const placeholders = Array(missing).fill("/images/gallery-placeholder.svg");
        displayImages = [...displayImages, ...placeholders];
    }
    const displayTitle = title || "Chitvan walkthrough";
    const displayDesc = description || "A glimpse of the clubhouse, greens, and outdoor living.";

    // Handle keypress for navigation and closing
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImgIdx === null) return;
            if (e.key === 'Escape') setSelectedImgIdx(null);
            if (e.key === 'ArrowRight') setSelectedImgIdx((prev) => (prev !== null && prev < actualImages.length - 1 ? prev + 1 : prev));
            if (e.key === 'ArrowLeft') setSelectedImgIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImgIdx, actualImages.length]);

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
                    {displayImages.map((imgSrc, idx) => {
                        const isPlaceholder = imgSrc.includes('placeholder');
                        const actualIdx = isPlaceholder ? -1 : actualImages.indexOf(imgSrc);

                        return (
                            <div
                                key={idx}
                                className={`relative group overflow-hidden rounded-xl bg-white/5 h-32 md:h-48 ${!isPlaceholder ? 'cursor-pointer' : ''}`}
                                onClick={() => !isPlaceholder && setSelectedImgIdx(actualIdx)}
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className={`object-cover ${!isPlaceholder ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-20'} transition-all duration-700`}
                                />
                                {!isPlaceholder && (
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <ion-icon name="expand-outline" class="text-white text-xl"></ion-icon>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImgIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImgIdx(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedImgIdx(null)}
                        >
                            <ion-icon name="close-outline" style={{ fontSize: '32px' }}></ion-icon>
                        </button>

                        <div
                            className="relative w-full h-full max-w-6xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedImgIdx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={actualImages[selectedImgIdx]}
                                        alt={`Full view ${selectedImgIdx + 1}`}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            {actualImages.length > 1 && (
                                <>
                                    <button
                                        className={`absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#C9A24D] transition-colors ${selectedImgIdx === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
                                        disabled={selectedImgIdx === 0}
                                        onClick={() => setSelectedImgIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
                                    >
                                        <ion-icon name="chevron-back-outline" style={{ fontSize: '40px' }}></ion-icon>
                                    </button>
                                    <button
                                        className={`absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#C9A24D] transition-colors ${selectedImgIdx === actualImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
                                        disabled={selectedImgIdx === actualImages.length - 1}
                                        onClick={() => setSelectedImgIdx(prev => prev !== null && prev < actualImages.length - 1 ? prev + 1 : prev)}
                                    >
                                        <ion-icon name="chevron-forward-outline" style={{ fontSize: '40px' }}></ion-icon>
                                    </button>
                                </>
                            )}

                            {/* Counter */}
                            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">
                                {selectedImgIdx + 1} / {actualImages.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
