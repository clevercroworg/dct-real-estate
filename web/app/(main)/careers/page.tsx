import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Careers | DCT Real Estate',
    description: 'Join the dynamic team at DCT Real Estate. Explore career opportunities and help us build thriving communities.',
};

export default function CareerPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/about/contact.jpg" // Using contact.jpg as a generic professional background
                        alt="Careers at DCT"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#061B3A]/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center text-white">
                    <p className="text-sm font-medium tracking-[0.2em] text-[#C9A24D] uppercase mb-4 animate-fadeIn">
                        Join Our Team
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-slideUp">
                        Careers
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="text-[#C9A24D] font-medium tracking-widest text-sm uppercase block mb-4">
                                Work With Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#061B3A] mb-8 leading-tight">
                                Shape Your Future with <br /> DCT Real Estate Developers®
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    At <strong>DCT Real Estate Developers®</strong>, our people are our greatest asset.
                                    We are a dynamic, innovative team driven by creativity, expertise, and commitment.
                                    If you're looking for a career that fosters growth, offers purpose, and allows you to
                                    make a real impact in the <strong>real estate industry</strong>, this is the place for you.
                                </p>
                                <p>
                                    We cultivate a diverse and inclusive work environment where collaboration, continuous
                                    learning, and professional development are at the forefront. Be part of a team that
                                    builds not just properties but also thriving communities and lasting legacies.
                                </p>
                            </div>

                            <div className="mt-10 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-semibold text-[#061B3A] mb-6">Connect with Us</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                            <ion-icon name="call-outline" class="w-5 h-5"></ion-icon>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Call Us</p>
                                            <div className="flex flex-col sm:flex-row sm:gap-4 text-[#061B3A] font-medium">
                                                <a href="tel:+916264883066" className="hover:text-[#C9A24D] transition-colors">62648 83066</a>
                                                <span className="hidden sm:inline text-gray-300">|</span>
                                                <a href="tel:+917470886613" className="hover:text-[#C9A24D] transition-colors">74708 86613</a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                            <ion-icon name="mail-outline" class="w-5 h-5"></ion-icon>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Email Us</p>
                                            <a href="mailto:Companydct242@gmail.com" className="text-[#061B3A] font-medium hover:text-[#C9A24D] transition-colors">
                                                Companydct242@gmail.com
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                            <ion-icon name="location-outline" class="w-5 h-5"></ion-icon>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Visit Us</p>
                                            <p className="text-[#061B3A] font-medium">
                                                Chhatauna Main Rd, Behind New High Court, <br /> Bilaspur, Chhattisgarh 495220
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <a
                                        href="mailto:Companydct242@gmail.com?subject=Job Application - [Your Name]"
                                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#061B3A] text-white font-medium tracking-widest uppercase text-sm rounded-full hover:bg-[#C9A24D] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl group border-4 border-white/20">
                                <div className="absolute inset-0 bg-[#061B3A]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <Image
                                    src="/images/about/career.png"
                                    alt="Work culture at DCT Real Estate"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
