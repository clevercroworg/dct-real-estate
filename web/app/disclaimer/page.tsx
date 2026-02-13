import React from 'react';

export default function DisclaimerPage() {
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
                        <h1 className="font-heading text-4xl md:text-5xl font-semibold">Disclaimer</h1>
                        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                            Important Information Regarding Our Website and Services
                        </p>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="space-y-8">
                            {[
                                {
                                    title: "General Information:",
                                    description: "All content on this website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information provided."
                                },
                                {
                                    title: "Accuracy of Information:",
                                    description: "DCT Real Estate Developers® does not guarantee the accuracy of any project details, pricing, availability, or other data provided on the website. Changes in design, pricing, or availability may occur without prior notice."
                                },
                                {
                                    title: "External Links:",
                                    description: "Our website may contain links to third-party websites. These links are provided for convenience and do not imply any endorsement or responsibility for the content, policies, or practices of those external sites."
                                },
                                {
                                    title: "Limitation of Liability:",
                                    description: "DCT Real Estate Developers® will not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or any content provided."
                                },
                                {
                                    title: "No Investment Advice:",
                                    description: "The content of this website is not intended as financial or investment advice. Any decision to purchase real estate or enter into a contractual agreement is the sole responsibility of the user."
                                },
                                {
                                    title: "Availability of Services:",
                                    description: "We reserve the right to modify, suspend, or discontinue any aspect of the website or the services provided without prior notice."
                                },
                                {
                                    title: "Copyright and Ownership:",
                                    description: "All intellectual property rights, including but not limited to the website design, graphics, logos, text, and other content, are owned by DCT Real Estate Developers® and are protected by applicable copyright laws."
                                },
                                {
                                    title: "Governing Law:",
                                    description: "These terms and conditions are governed by the laws of India, and any legal disputes will be handled in accordance with the jurisdiction of India."
                                },
                                {
                                    title: "Contact Us:",
                                    description: (
                                        <>
                                            If you have any questions regarding this disclaimer or require more information, please contact us at{' '}
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
