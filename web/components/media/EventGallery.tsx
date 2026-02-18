'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface EventGalleryProps {
    title: string;
    description?: string;
    images?: string[];
}

export default function EventGallery({ title, description, images = [] }: EventGalleryProps) {
    // Default placeholders if no images provided
    const displayImages = images.length > 0 ? images : [
        "/images/banners/launch-1.jpg",
        "/images/banners/launch-2.jpg",
        "/images/verticals/vertical-commercial.jpg",
        "/images/verticals/vertical-residential.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldPreload, setShouldPreload] = useState(false);

    // Preload rest of images after initial mount to make "Show More" instant
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldPreload(true);
        }, 2500); // Wait 2.5s for initial page load to settle
        return () => clearTimeout(timer);
    }, []);

    // Progressive loading - initial count
    const InitialCount = 8;
    const visibleImages = isExpanded ? displayImages : displayImages.slice(0, InitialCount);
    const hasMore = displayImages.length > InitialCount;

    return (
        <div className="mb-20 last:mb-0">
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-12 bg-[#C9A24D]"></div>
                    <p className="text-[#C9A24D] text-xs font-bold tracking-[0.2em] uppercase">Event</p>
                </div>
                <h2 className="font-heading text-2xl lg:text-4xl font-semibold text-[#061B3A] mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-slate-600 text-lg max-w-3xl">
                        {description}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                    {visibleImages.map((img, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            key={img + idx}
                            className="group relative h-64 overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`${title} - Image ${idx + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                            {/* Zoom Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                    <ion-icon name="expand-outline" class="text-2xl"></ion-icon>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Hidden pre-load container: Renders images but keeps them out of layout */}
                {!isExpanded && shouldPreload && displayImages.slice(InitialCount).map((img, idx) => (
                    <div key={`preload-${idx}`} className="hidden" aria-hidden="true">
                        <Image
                            src={img}
                            alt="preload"
                            width={10}
                            height={10}
                            priority={false}
                        />
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="px-8 py-3 border-2 border-[#061B3A] text-[#061B3A] font-bold rounded-lg hover:bg-[#061B3A] hover:text-white transition-all transform active:scale-95"
                    >
                        {isExpanded ? 'Show Less' : `View All Photos (${displayImages.length})`}
                    </button>
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <ion-icon name="close-circle-outline" class="text-5xl"></ion-icon>
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-h-[85vh] max-w-[90vw] aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full screen view"
                                fill
                                className="object-contain rounded-lg shadow-2xl"
                                sizes="90vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
