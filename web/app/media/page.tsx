'use client';

import EventGallery from '@/components/media/EventGallery';
import { mediaEvents } from './mediaData';

export default function MediaPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* HERO */}
            <section className="relative h-[65vh] flex items-end justify-center pb-16 bg-[#061B3A]">
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

                {mediaEvents.map((event) => (
                    <EventGallery
                        key={event.id}
                        title={event.title}
                        description={event.description}
                        images={event.images}
                    />
                ))}

            </section>
        </main>
    );
}
