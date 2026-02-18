
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        // Initial check
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navbar background logic:
    // - Home page + Top: Transparent
    // - Home page + Scrolled: Solid Blue
    // - Other pages: Solid Blue
    const navBackground = isHome && !isScrolled ? 'bg-transparent' : 'bg-[#061B3A] shadow-lg';
    // Text color is always white for this design, but if transparent bg needed dark text, we'd handle it here.

    return (
        <header
            id="site-header"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground} ${isScrolled ? 'py-0' : 'py-2'}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`flex items-center justify-between h-20 transition-all duration-300 ${isScrolled ? 'h-[72px]' : ''}`}>
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-4">
                        <img src="/images/branding/logo.png" alt="DCT Real Estate" className="h-12" />
                        <span className="hidden xl:block text-[#C9A24D] text-xs tracking-[0.2em] uppercase font-medium border-l border-white/10 pl-4 py-1">
                            Property Means DCT !
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-8 text-xs tracking-widest font-light uppercase">
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>

                        {/* ABOUT DROPDOWN */}
                        <div className="relative group">
                            <button className={`nav-link flex items-center gap-1 ${['/about', '/directors-message', '/leadership'].includes(pathname) ? 'active' : ''}`}>
                                About
                                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5.25 7.5L10 12.25 14.75 7.5" />
                                </svg>
                            </button>

                            <div className="dropdown-panel">
                                <Link href="/about" className={`dropdown-link ${pathname === '/about' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Overview
                                </Link>
                                <Link href="/directors-message" className={`dropdown-link ${pathname === '/directors-message' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Director’s Message
                                </Link>
                                <Link href="/leadership" className={`dropdown-link ${pathname === '/leadership' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Leadership
                                </Link>
                            </div>
                        </div>

                        {/* PROJECTS DROPDOWN */}
                        <div className="relative group">
                            <button className={`nav-link flex items-center gap-1 ${pathname.startsWith('/projects') ? 'active' : ''}`}>
                                Projects
                                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5.25 7.5L10 12.25 14.75 7.5" />
                                </svg>
                            </button>

                            <div className="dropdown-panel">
                                <Link href="/projects/ongoing" className={`dropdown-link ${pathname === '/projects/ongoing' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Ongoing Projects
                                </Link>
                                <Link href="/projects/completed" className={`dropdown-link ${pathname === '/projects/completed' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Completed Projects
                                </Link>
                                <Link href="/projects/commercial" className={`dropdown-link ${pathname === '/projects/commercial' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Commercial Projects
                                </Link>
                                <Link href="/projects/upcoming" className={`dropdown-link ${pathname === '/projects/upcoming' ? 'active !text-brand-gold font-semibold bg-slate-50' : ''}`}>
                                    Upcoming Projects
                                </Link>
                            </div>
                        </div>

                        <Link href="/our-ventures" className={`nav-link ${pathname === '/our-ventures' ? 'active' : ''}`}>
                            Our Ventures
                        </Link>

                        <Link href="/media" className={`nav-link ${pathname === '/media' ? 'active' : ''}`}>
                            Media
                        </Link>
                        <Link href="/blog" className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}>
                            Blogs
                        </Link>
                        <Link href="/careers" className={`nav-link ${pathname === '/careers' ? 'active' : ''}`}>
                            Careers
                        </Link>
                        <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                            Contact
                        </Link>

                        {/* DESKTOP CALL BUTTON */}
                        <a
                            href="tel:6264883066"
                            className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-blue text-[11px] tracking-widest font-medium rounded-full transition-all duration-200 hover:bg-[#d4b15f] hover:-translate-y-0.5 hover:shadow-lg"
                        >

                            <ion-icon name="call-outline" class="w-4 h-4 text-brand-blue"></ion-icon>
                            62648&nbsp;83066
                        </a>
                    </nav>

                    {/* MOBILE ACTIONS */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {/* MOBILE CALL ICON */}
                        <a
                            href="tel:6264883066"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-brand-blue transition hover:bg-[#d4b15f]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M2 4.5C2 3.12 3.12 2 4.5 2h2c.83 0 1.58.51 1.88 1.29l.97 2.42a2 2.42 0 01-.45 2.11L7.5 9.5a12.5 12.5 0 007 7l1.68-1.4a2 2.42 0 012.11-.45l2.42.97A2 2 0 0122 17.5v2c0 1.38-1.12 2.5-2.5 2.5C9.61 22 2 14.39 2 4.5z"
                                />
                            </svg>
                        </a>

                        {/* HAMBURGER */}
                        <button
                            id="menu-toggle"
                            className="text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 bg-[#061B3A] text-white transform transition-transform duration-300 ease-in-out z-[60] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col gap-8 h-full overflow-y-auto">
                    <button
                        id="menu-close"
                        className="self-end p-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <nav className="flex flex-col gap-6 uppercase tracking-widest text-sm font-light">
                        <Link
                            href="/"
                            className={`text-lg font-medium ${pathname === '/' ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <div className="flex flex-col gap-3">
                            <span className="text-white/50 text-xs">About</span>
                            <Link
                                href="/about"
                                className={`pl-4 border-l ${pathname === '/about' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Overview
                            </Link>
                            <Link
                                href="/directors-message"
                                className={`pl-4 border-l ${pathname === '/directors-message' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Director’s Message
                            </Link>
                            <Link
                                href="/leadership"
                                className={`pl-4 border-l ${pathname === '/leadership' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Leadership
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-white/50 text-xs">Projects</span>
                            <Link
                                href="/projects/ongoing"
                                className={`pl-4 border-l ${pathname === '/projects/ongoing' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Ongoing Projects
                            </Link>
                            <Link
                                href="/projects/completed"
                                className={`pl-4 border-l ${pathname === '/projects/completed' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Completed Projects
                            </Link>
                            <Link
                                href="/projects/commercial"
                                className={`pl-4 border-l ${pathname === '/projects/commercial' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Commercial Projects
                            </Link>
                            <Link
                                href="/projects/upcoming"
                                className={`pl-4 border-l ${pathname === '/projects/upcoming' ? 'border-brand-gold text-brand-gold' : 'border-white/10'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Upcoming Projects
                            </Link>
                        </div>

                        <Link
                            href="/our-ventures"
                            className={`text-lg font-medium ${pathname === '/our-ventures' ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Ventures
                        </Link>

                        <Link
                            href="/media"
                            className={`text-lg font-medium ${pathname === '/media' ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Media
                        </Link>
                        <Link
                            href="/blog"
                            className={`text-lg font-medium ${pathname.startsWith('/blog') ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/careers"
                            className={`text-lg font-medium ${pathname === '/careers' ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Careers
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-lg font-medium ${pathname === '/contact' ? 'text-brand-gold' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="mt-auto">
                        <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
