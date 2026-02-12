// @ts-nocheck
'use client';

import React from 'react';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative bg-[#061B3A] text-white overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 15% 20%, #C9A24D 0, transparent 40%), radial-gradient(circle at 80% 30%, #7DA1FF 0, transparent 35%)'
                        }}
                    ></div>
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
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                        {/* LEFT COLUMN: CONTACT INFO */}
                        <div>
                            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                                <h2 className="font-heading text-2xl font-semibold">Contact Details</h2>
                                <div className="mt-6 space-y-4 text-slate-700">
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Address</span>
                                        <p>Chhatauna Main Rd, Behind New High Court, Bilaspur, Chhattisgarh 495220</p>
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Call Us</span>
                                        <p>
                                            <a href="tel:6264883066" className="hover:text-brand-blue transition">62648 83066</a>,{' '}
                                            <a href="tel:7470886613" className="hover:text-brand-blue transition">74708 86613</a>
                                        </p>
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Email</span>
                                        <a href="mailto:Companydct242@gmail.com" className="hover:text-brand-blue transition">Companydct242@gmail.com</a>
                                    </div>
                                </div>

                                <div className="mt-10 bg-[#F7F3EA] rounded-2xl p-6 border border-[#E9DFC5]">
                                    <h3 className="font-heading text-lg font-semibold text-brand-blue">Career Info</h3>
                                    <p className="text-slate-700 mt-2 text-sm leading-relaxed">
                                        If you’re interested in employment opportunities at DCT, please email us at{' '}
                                        <a className="text-brand-blue font-semibold" href="mailto:Companydct242@gmail.com">
                                            Companydct242@gmail.com
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: MAP & ACTIONS */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                            <div className="rounded-2xl overflow-hidden border border-slate-200 h-[420px]">
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
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <a href="tel:6264883066" className="btn-primary !rounded-full justify-center">
                                    Call Now
                                </a>
                                <a href="mailto:Companydct242@gmail.com" className="btn-outline-white !rounded-full justify-center !text-[#061B3A] !border-[#061B3A] hover:!text-white hover:!bg-[#C9A24D] hover:!border-[#C9A24D]">
                                    Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
