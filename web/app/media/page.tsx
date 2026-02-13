'use client';

import EventGallery from '@/components/media/EventGallery';

export default function MediaPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* HERO */}
            <section className="relative h-[40vh] flex items-end justify-center pb-16 bg-[#061B3A]">
                <div className="absolute inset-0 bg-[url('/images/events/megha-expo/1.jpg')] bg-cover bg-center opacity-30"></div>
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

                {/* Event 1 - Award */}
                <EventGallery
                    title="Rajendra Singh Rajput Honored by Chirag Paswan with Prime of Central India Award"
                    description="A prestigious moment for DCT Real Estate as our founder receives recognition for excellence in real estate development."
                    images={[
                        "/images/events/award/IMG-20250114-WA0039.jpg",
                        "/images/events/award/dc1.jpg",
                        "/images/events/award/dc2.jpg",
                        "/images/events/award/dc3.jpg",
                        "/images/events/award/dct.jpg",
                        "/images/events/award/dct4.jpg",
                        "/images/events/award/dct5.jpg",
                        "/images/events/award/dct6.jpg",
                        "/images/events/award/dct8.jpg",
                        "/images/events/award/dct10.jpg",
                        "/images/events/award/dct16.jpg"
                    ]}
                />

                {/* Event 2 - Megha Expo */}
                <EventGallery
                    title="Megha Expo 2025"
                    description="Showcasing our latest projects and future vision at the Megha Expo 2025."
                    images={[
                        "/images/events/megha-expo/1.jpg",
                        "/images/events/megha-expo/2.jpg",
                        "/images/events/megha-expo/3.jpg",
                        "/images/events/megha-expo/4.jpg",
                        "/images/events/megha-expo/5.jpg",
                        "/images/events/megha-expo/6.jpg",
                        "/images/events/megha-expo/7.jpg",
                        "/images/events/megha-expo/8.jpg",
                        "/images/events/megha-expo/9.jpg",
                        "/images/events/megha-expo/10.jpg",
                        "/images/events/megha-expo/dct-real-estate.jpg",
                        "/images/events/megha-expo/dct-real-estate1.jpg",
                        "/images/events/megha-expo/dct-real-estate2.jpg",
                        "/images/events/megha-expo/dct-real-estate3.jpg",
                        "/images/events/megha-expo/dct-real-estate4.jpg",
                        "/images/events/megha-expo/dct-real-estate5.jpg",
                        "/images/events/megha-expo/dct-real-estate6.jpg",
                        "/images/events/megha-expo/dct-real-estate7.jpg",
                        "/images/events/megha-expo/dct-real-estate8.jpg",
                        "/images/events/megha-expo/dct-real-estate9.jpg",
                        "/images/events/megha-expo/dct-real-estate10.jpg",
                        "/images/events/megha-expo/dct-real-estate11.jpg",
                        "/images/events/megha-expo/dct-real-estate12.jpg",
                        "/images/events/megha-expo/dct-real-estate13.jpg",
                        "/images/events/megha-expo/dct-real-estate14.jpg",
                        "/images/events/megha-expo/dct-real-estate15.jpg",
                        "/images/events/megha-expo/dct-real-estate16.jpg",
                        "/images/events/megha-expo/dct-real-estate17.jpg",
                        "/images/events/megha-expo/dct-real-estate18.jpg",
                        "/images/events/megha-expo/dct-real-estate19.jpg",
                        "/images/events/megha-expo/dct-real-estate20.jpg",
                        "/images/events/megha-expo/dct-real-estate21.jpg",
                        "/images/events/megha-expo/dct-real-estate22.jpg",
                        "/images/events/megha-expo/dct-real-estate23.jpg",
                        "/images/events/megha-expo/dct-real-estate24.jpg",
                        "/images/events/megha-expo/dct-real-estate25.jpg",
                        "/images/events/megha-expo/dct-real-estate26.jpg"
                    ]}
                />

            </section>
        </main>
    );
}
