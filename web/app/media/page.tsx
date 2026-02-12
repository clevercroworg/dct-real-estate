'use client';

import EventGallery from '@/components/media/EventGallery';

export default function MediaPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* HERO */}
            <section className="relative h-[40vh] flex items-end justify-center pb-16 bg-[#061B3A]">
                <div className="absolute inset-0 bg-[url('/images/vertical-commercial.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] to-transparent"></div>

                <div className="relative z-10 text-center px-4">
                    <p className="text-[#C9A24D] text-xs font-bold tracking-[0.3em] uppercase mb-4">DCT Real Estate</p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                        Media & Events
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Event 1 */}
                <EventGallery
                    title="Rajendra Singh Rajput Honored by Chirag Paswan with Prime of Central India Award"
                    description="A prestigious moment for DCT Real Estate as our founder receives recognition for excellence in real estate development."
                    images={[
                        "/images/launch-1.jpg",
                        "/images/launch-2.jpg",
                        "/images/launch-1.jpg",
                        "/images/launch-2.jpg"
                    ]}
                />

                {/* Event 2 */}
                <EventGallery
                    title="Megha Expo 2025"
                    description="Showcasing our latest projects and future vision at the Megha Expo 2025."
                    images={[
                        "/images/vertical-commercial.jpg",
                        "/images/vertical-residential.jpg",
                        "/images/vertical-plotted.jpg",
                        "/images/vertical-villas.jpg"
                    ]}
                />

            </section>
        </main>
    );
}
