'use client';

import { useState } from 'react';

export default function ProjectFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Where is Chitvan Farmhouse located?",
            answer: "The project is located at Mohda Mod, Bhojpuri Toll Plaza, NH 130, Bilaspur (C.G.)."
        },
        {
            question: "What amenities are available?",
            answer: "The community offers a grand entrance, clubhouse, swimming pool, kids play area, open-air gym, yoga center, and lush gardens."
        },
        {
            question: "How can I get the brochure?",
            answer: "Use the brochure form on this page and you will get the download instantly."
        },
        {
            question: "Is site visit available?",
            answer: "Yes. Click “Book a site visit” and our team will coordinate a convenient time."
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">Frequently Asked Questions</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">Answers to common questions</h2>
                    </div>
                    <a href="/contact" className="text-sm font-medium text-[#061B3A] hover:text-[#C9A24D] inline-flex items-center gap-2">
                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                        Ask a question
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex items-center justify-between font-semibold text-[#061B3A]">
                                {faq.question}
                                <ion-icon name={openIndex === index ? "remove-outline" : "add-outline"} class="text-[#C9A24D] text-xl transition-transform duration-300"></ion-icon>
                            </div>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-sm text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
