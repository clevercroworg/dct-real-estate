'use client';

import { useState } from 'react';

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
                {displayImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="group relative h-64 overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            alt={`${title} - Image ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                        {/* Zoom Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                <ion-icon name="expand-outline" class="text-2xl"></ion-icon>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
                        onClick={() => setSelectedImage(null)}
                    >
                        <ion-icon name="close-circle-outline" class="text-5xl"></ion-icon>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full screen view"
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
