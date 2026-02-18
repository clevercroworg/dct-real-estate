
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    // Check if the current page is a Project Detail Page
    // It should start with /projects/ but NOT be one of the listing pages
    const isProjectPage = pathname?.startsWith('/projects/');
    const isListingPage = [
        '/projects/ongoing',
        '/projects/completed',
        '/projects/commercial',
        '/projects/upcoming'
    ].includes(pathname || '');

    const shouldHideGlobalStickyBar = isProjectPage && !isListingPage;

    return (
        <>
            <footer className="bg-[#05162F] text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* TOP GRID */}
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        {/* BRAND */}
                        <div>
                            <div className="relative h-12 w-32 mb-4">
                                <Image
                                    src="/images/branding/logo.png"
                                    alt="DCT Real Estate"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                <span className="font-semibold text-white">About DCT :</span> DCT Real Estate & Devloper is a real estate company of Bilaspur with top class residential projects that includes apartments, independent villa and plots in Bilaspur at very affordable prices. The company is a result of a strong and dynamic team of individuals with a zest for excellence in its field.
                                <Link href="/about" className="text-[#C9A24D] hover:text-white ml-1 transition-colors">
                                    Read More
                                </Link>
                            </p>
                            <div className="flex gap-4 mt-6 text-white/70">
                                <a href="https://www.facebook.com/DCTBilaspur" target="_blank" className="hover:text-white transition">
                                    <ion-icon name="logo-facebook" class="text-xl"></ion-icon>
                                </a>
                                <a href="https://www.instagram.com/dctbilaspur/" target="_blank" className="hover:text-white transition">
                                    <ion-icon name="logo-instagram" class="text-xl"></ion-icon>
                                </a>
                                <a href="https://www.youtube.com/@dctrealestatedevelopers692/" target="_blank" className="hover:text-white transition">
                                    <ion-icon name="logo-youtube" class="text-xl"></ion-icon>
                                </a>
                                <a href="https://wa.me/916264883066" target="_blank" className="hover:text-[#25D366] transition">
                                    <ion-icon name="logo-whatsapp" class="text-xl"></ion-icon>
                                </a>
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h4 className="font-semibold text-sm tracking-wide mb-4 uppercase">Company</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>
                                    <Link href="/" className="hover:text-white transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-white transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-ventures" className="hover:text-white transition">
                                        Our Ventures
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:text-white transition">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-white transition">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:text-white transition">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/media" className="hover:text-white transition">
                                        Media
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* PROJECTS */}
                        <div>
                            <h4 className="font-semibold text-sm tracking-wide mb-4 uppercase">Projects</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>Residential Developments</li>
                                <li>Commercial Projects</li>
                                <li>Plotted Layouts</li>
                                <li>Villas & Farmhouses</li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h4 className="font-semibold text-sm tracking-wide mb-4 uppercase">Contact</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>📍 Bilaspur, Chhattisgarh, India</li>
                                <li>
                                    <a href="tel:6264883066" className="hover:text-white transition">
                                        +91 62648 83066
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:7470886613" className="hover:text-white transition">
                                        +91 74708 86613
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@dctrealestate.in" className="hover:text-white transition">
                                        info@dctrealestate.in
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-white/50 text-xs">© 2026 DCT Real Estate Developers. All rights reserved.</p>

                        <div className="flex gap-4 text-white/50 text-xs">
                            <Link href="/privacy-policy" className="hover:text-white transition">
                                Privacy Policy
                            </Link>
                            <span>|</span>
                            <Link href="/terms-and-conditions" className="hover:text-white transition">
                                Terms & Conditions
                            </Link>
                            <span>|</span>
                            <Link href="/disclaimer" className="hover:text-white transition">
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </footer >

            {/* STICKY ACTION BAR - GLOBAL (Hidden on Project Details Pages) */}
            {
                !shouldHideGlobalStickyBar && (
                    <>
                        {/* DESKTOP STICKY PILL */}
                        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-12 bg-white px-14 py-5 rounded-full shadow-2xl border border-gray-200">
                            <a
                                href="tel:6264883066"
                                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-gold transition"
                            >
                                <ion-icon name="call-outline" class="text-lg"></ion-icon>
                                Call
                            </a>

                            <a
                                href="https://wa.me/916264883066"
                                target="_blank"
                                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#25D366] transition"
                            >
                                <ion-icon name="logo-whatsapp" class="text-lg"></ion-icon>
                                WhatsApp
                            </a>

                            <Link
                                href="/contact"
                                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-gold transition"
                            >
                                <ion-icon name="send-outline" class="text-lg"></ion-icon>
                                Enquire
                            </Link>
                        </div>

                        {/* MOBILE STICKY BAR */}
                        <div className="fixed bottom-3 left-0 right-0 z-50 px-4 lg:hidden">
                            <div className="flex items-center gap-3 bg-white/95 backdrop-blur px-3 py-3 rounded-2xl shadow-xl border border-gray-200">
                                {/* CALL (GOLD) */}
                                <a
                                    href="tel:6264883066"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-gold text-brand-blue text-sm font-medium shadow-md active:scale-95 transition"
                                >
                                    <ion-icon name="call-outline" class="text-lg"></ion-icon>
                                </a>

                                {/* ENQUIRE (BRAND BLUE) */}
                                <Link
                                    href="/contact"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-blue text-white text-sm font-medium shadow-md active:scale-95 transition"
                                >
                                    <ion-icon name="send-outline" class="text-lg"></ion-icon>
                                </Link>

                                {/* WHATSAPP (PRIMARY) */}
                                <a
                                    href="https://wa.me/916264883066"
                                    target="_blank"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-medium shadow-md active:scale-95 transition"
                                >
                                    <ion-icon name="logo-whatsapp" class="text-lg"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}
