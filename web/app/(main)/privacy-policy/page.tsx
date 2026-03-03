import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DCT Real Estate',
  description: 'Learn how DCT Real Estate protects your privacy and personal information.',
};


export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/background/bg-4.png')"
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 text-center text-white px-4">
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold">Privacy & Policy</h1>
                        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                            How DCT Real Estate Developers® Protects Your Privacy
                        </p>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Information We Collect:",
                                    description: "Personal data like name, contact details, and transaction history."
                                },
                                {
                                    title: "Purpose:",
                                    description: "Used for project updates, service improvements, and communication."
                                },
                                {
                                    title: "Data Sharing:",
                                    description: "Shared only with trusted partners or legal authorities when necessary."
                                },
                                {
                                    title: "Security:",
                                    description: "Robust encryption and monitoring ensure your data remains safe."
                                },
                                {
                                    title: "Your Rights:",
                                    description: "You can access, update, or delete your data by contacting us."
                                },
                                {
                                    title: "Cookies:",
                                    description: "Used to enhance browsing experience; settings can be adjusted in your browser."
                                },
                                {
                                    title: "Contact Us:",
                                    description: (
                                        <>
                                            For questions, email us at{' '}
                                            <a href="mailto:Companydct242@gmail.com" className="text-brand-gold hover:underline">
                                                Companydct242@gmail.com
                                            </a>{' '}
                                            or call us at{' '}
                                            <a href="tel:6264883066" className="text-brand-gold hover:underline">
                                                62648 83066
                                            </a>
                                            .
                                        </>
                                    )
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <ion-icon name="arrow-forward-circle" class="text-brand-blue text-2xl"></ion-icon>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[#061B3A]">{item.title}</h3>
                                        <p className="text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
