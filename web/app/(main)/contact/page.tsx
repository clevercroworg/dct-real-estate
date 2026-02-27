// @ts-nocheck removed
'use client';

import React from 'react';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white overflow-hidden min-h-[65vh] flex items-center">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/about/contact.jpg"
                            alt="Contact Us"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#061B3A]/80"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
                        <p className="uppercase text-xs tracking-[0.3em] text-white/60">Get In Touch</p>
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-3">We’d love to hear from you</h1>
                        <p className="text-white/70 text-lg mt-5 max-w-3xl">
                            Reach out for project inquiries, site visits, or career opportunities.
                            Our team responds quickly and helps you make confident real estate decisions.
                        </p>
                    </div>
                </section>

                {/* CONTACT DETAILS & MAP */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
                        {/* LEFT COLUMN: CONTACT INFO */}
                        <div className="order-2 lg:order-1 lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* Contact Card */}
                                <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                                    <h2 className="font-heading text-2xl font-bold text-[#061B3A] border-b border-slate-100 pb-4 mb-6">
                                        Contact Details
                                    </h2>
                                    <div className="space-y-6 text-slate-700">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#061B3A]/5 flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                                <ion-icon name="location" class="text-xl"></ion-icon>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Address</span>
                                                <p className="leading-relaxed text-sm">Chhatauna Main Rd, Behind New High Court, Bilaspur, Chhattisgarh 495220</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#061B3A]/5 flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                                <ion-icon name="call" class="text-xl"></ion-icon>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Call Us</span>
                                                <p className="text-sm">
                                                    <a href="tel:6264883066" className="hover:text-brand-gold transition font-medium">62648 83066</a>,{' '}
                                                    <a href="tel:7470886613" className="hover:text-brand-gold transition font-medium">74708 86613</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#061B3A]/5 flex items-center justify-center flex-shrink-0 text-[#061B3A]">
                                                <ion-icon name="mail" class="text-xl"></ion-icon>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Email</span>
                                                <a href="mailto:Companydct242@gmail.com" className="hover:text-brand-gold transition font-medium text-sm">Companydct242@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Card */}
                                <div className="bg-[#061B3A] rounded-3xl p-8 shadow-lg text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                                    <h3 className="font-heading text-xl font-bold mb-3 relative z-10">Career Info</h3>
                                    <p className="text-white/80 text-sm leading-relaxed relative z-10 mb-4">
                                        Interested in joining our dynamic team? We'd love to hear from you.
                                    </p>
                                    <a className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm hover:translate-x-1 transition-transform" href="mailto:Companydct242@gmail.com">
                                        Send Mail <ion-icon name="arrow-forward"></ion-icon>
                                    </a>
                                </div>

                                {/* Socials Card */}
                                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
                                    <span className="font-heading font-bold text-[#061B3A]">Follow Us</span>
                                    <div className="flex gap-4 text-[#061B3A]">
                                        <a href="https://www.facebook.com/DCTBilaspur" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                                            <ion-icon name="logo-facebook" class="text-xl"></ion-icon>
                                        </a>
                                        <a href="https://www.instagram.com/dctbilaspur/" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300">
                                            <ion-icon name="logo-instagram" class="text-xl"></ion-icon>
                                        </a>
                                        <a href="https://www.youtube.com/@dctrealestatedevelopers692/" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                                            <ion-icon name="logo-youtube" class="text-xl"></ion-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: MAP & ACTIONS */}
                        <div className="order-1 lg:order-2 lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                            <div className="rounded-2xl overflow-hidden border border-slate-200 h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.8580824232267!2d82.08956177604578!3d22.016748079891393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21aeba1c52739d0f%3A0x9e71225418876c19!2sDCT%20REAL%20ESTATE%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1770860827964!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* CONTACT FORM */}
                            <div className="mt-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
