'use client';

import React from 'react';

export default function VRTour() {
    return (
        <section className="bg-[#061B3A] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-8 bg-brand-gold"></div>
                            <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold">Excellence in 360°</span>
                        </div>
                        <h2 className="font-heading text-4xl lg:text-5xl font-[900] text-white leading-tight">
                            Experience the <span className="text-brand-gold italic">Future</span> <br />
                            of Living with <span className="underline decoration-brand-gold/30 underline-offset-8 text-white">360° VR Tour</span>
                        </h2>
                    </div>
                    <div className="hidden lg:block pb-2">
                        <p className="text-white/50 text-sm max-w-[280px] border-l border-white/10 pl-6 leading-relaxed">
                            Step into your future home today. Explore every corner of our projects with immersive virtual reality.
                        </p>
                    </div>
                </div>

                {/* VR PLAYER / VIDEO CONTAINER */}
                <div className="relative group reveal">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors"></div>

                    {/* Videos Grid */}
                    <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 relative z-10">
                        {/* Video 1 */}
                        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video group/v1">
                            <iframe
                                src="https://drive.google.com/file/d/1IhdRpFTYyZsexnXYR4njzCKkqZd7EajK/preview"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay"
                                title="VR Tour Video 1"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover/v1:opacity-0"></div>
                        </div>

                        {/* Video 2 */}
                        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video group/v2">
                            <iframe
                                src="https://drive.google.com/file/d/1zrgznf-hm7Sn0q0HBS1QfVRQNvMEpUMu/preview"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay"
                                title="VR Tour Video 2"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover/v2:opacity-0"></div>
                        </div>

                        {/* Video 3 */}
                        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video group/v3">
                            <iframe
                                src="https://drive.google.com/file/d/1siKtGvVVIOkhy3A3SjBSSF7U5lYGbEZO/preview"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay"
                                title="VR Tour Video 3"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover/v3:opacity-0"></div>
                        </div>

                        {/* Video 4 */}
                        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video group/v4">
                            <iframe
                                src="https://drive.google.com/file/d/1OsDuzwNrM9Zt6m75-cgV5YcBT7KvfHP4/preview"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay"
                                title="VR Tour Video 4"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover/v4:opacity-0"></div>
                        </div>
                    </div>

                    {/* Call to Action Pin */}
                    <div className="mt-12 flex justify-center">
                        <div className="bg-brand-gold text-brand-blue px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all cursor-pointer border border-brand-gold z-20 hover:-translate-y-1">
                            <ion-icon name="videocam-outline" class="text-base"></ion-icon>
                            Explore All Projects
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/[0.03] to-transparent pointer-events-none"></div>
        </section>
    );
}
