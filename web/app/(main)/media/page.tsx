'use client';

import EventGallery from '@/components/media/EventGallery';
import MediaCTA from '@/components/media/MediaCTA';
import Recognitions from '@/components/media/Recognitions';
import { mediaEvents } from './mediaData';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Recognitions | DCT Real Estate',
  description: 'Explore the latest news, media coverage, and awards for DCT Real Estate.',
};


export default function MediaPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* HERO */}
            <section className="relative h-[65vh] flex items-end justify-center pb-16 bg-[#061B3A] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/events/megha-expo/1.jpg"
                        alt="Media and Events Background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/40 to-transparent"></div>

                <div className="relative z-10 text-center px-4">
                    <p className="text-[#C9A24D] text-xs font-bold tracking-[0.3em] uppercase mb-4">DCT Real Estate</p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                        Media & Events
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">

                <Recognitions />

                <div className="mt-20">
                    <h2 className="font-heading text-3xl font-bold text-[#061B3A] text-center mb-12">Event Galleries</h2>
                    {mediaEvents.map((event) => (
                        <EventGallery
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            images={event.images}
                        />
                    ))}
                </div>

            </section>

            {/* CTA SECTION */}
            <MediaCTA />
        </main>
    );
}
