import React from 'react';

export default function TermsConditionsPage() {
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
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold">Terms & Conditions</h1>
                        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                            Understand Our Terms of Use
                        </p>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Acceptance of Terms:",
                                    description: "By accessing our website, you agree to comply with these terms and conditions."
                                },
                                {
                                    title: "Services:",
                                    description: "Information provided is for general purposes and may change without prior notice."
                                },
                                {
                                    title: "Intellectual Property:",
                                    description: "All content, including logos, text, images, and design, is owned by DCT Real Estate Developers® and may not be copied or reproduced without permission."
                                },
                                {
                                    title: "User Conduct:",
                                    description: "Users must not engage in activities that could harm the site, its content, or other users."
                                },
                                {
                                    title: "Privacy:",
                                    description: "Refer to our Privacy Policy for details on how your information is collected and used."
                                },
                                {
                                    title: "Third-Party Links:",
                                    description: "Our site may include links to external websites. We are not responsible for the content or policies of those sites."
                                },
                                {
                                    title: "Liability Limitation:",
                                    description: "We are not liable for inaccuracies, errors, or interruptions in our service."
                                },
                                {
                                    title: "Amendments:",
                                    description: "We reserve the right to modify these terms at any time. Continued use implies acceptance of any changes."
                                },
                                {
                                    title: "Governing Law:",
                                    description: "These terms are governed by the laws of India, and any disputes will be resolved under Indian jurisdiction."
                                },
                                {
                                    title: "Contact Us:",
                                    description: (
                                        <>
                                            For queries, contact us via email at{' '}
                                            <a href="mailto:Companydct242@gmail.com" className="text-brand-gold hover:underline">
                                                Companydct242@gmail.com
                                            </a>{' '}
                                            or call{' '}
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
