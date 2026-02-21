'use client'

export default function BrandVideo() {
    return (
        <section className="w-full relative bg-brand-dark overflow-hidden h-[40vh] md:h-[50vh] lg:h-[60vh]">
            <video
                className="w-full h-full object-cover block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src="/videos/dct_homepage_video_design.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}
