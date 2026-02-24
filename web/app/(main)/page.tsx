
import Hero from '../../components/home/Hero';
import Marquee from '../../components/home/Marquee';
import AboutSection from '../../components/home/AboutSection';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const NewLaunches = dynamic(() => import('../../components/home/NewLaunches'));
const Verticals = dynamic(() => import('../../components/home/Verticals'));
const FeaturedProjects = dynamic(() => import('../../components/home/FeaturedProjects'));
const WhyDCT = dynamic(() => import('../../components/home/WhyDCT'));
const FinalCTA = dynamic(() => import('../../components/home/FinalCTA'));
const Testimonials = dynamic(() => import('../../components/home/Testimonials'));
const BrandVideo = dynamic(() => import('../../components/home/BrandVideo'));
const VRTour = dynamic(() => import('../../components/home/VRTour'));
const DisclaimerPopup = dynamic(() => import('../../components/home/DisclaimerPopup'));

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Marquee />
        <AboutSection />

        {/* FOUNDER SECTION */}
        <section className="bg-slate-50 py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/director.jpg"
                  alt="Rajendra Singh Rajput - Founder DCT Real Estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Award Tag */}
              <div className="absolute bottom-6 left-6 bg-brand-dark text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <ion-icon name="ribbon-outline" class="text-brand-gold text-xl"></ion-icon>
                <span className="text-sm font-medium">Trusted Real Estate Leader</span>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-[900] text-brand-blue mb-3">
                About Rajendra Singh Rajput
              </h2>

              <p className="text-brand-gold font-medium mb-4">Founder & Visionary – DCT Real Estate</p>

              <p className="text-text-muted leading-relaxed mb-5">
                Rajendra Singh Rajput is the driving force behind DCT Real Estate, known for his commitment to quality, transparent, and long-term value creation. His leadership has helped shape DCT into one of Bilaspur’s most trusted real estate brands.
              </p>

              <p className="text-text-muted leading-relaxed mb-6">
                With a strong focus on ethical development and customer satisfaction, he continues to lead projects that combine strategic planning, legal clarity, and sustainable growth.
              </p>

              {/* CTA */}
              <Link
                href="/directors-message"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-blue font-medium rounded-md hover:bg-[#d4b15f] transition"
              >
                Learn More
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </section>

        <NewLaunches />
        <Verticals />
        <VRTour />
        <Testimonials />
        <BrandVideo />
        <FeaturedProjects />
        <WhyDCT />
        <FinalCTA />
        <DisclaimerPopup />
      </main>
    </div>
  );
}
