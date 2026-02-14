'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="bg-[#F9F9F7] rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200">
            <h2 className="font-heading text-3xl font-bold text-[#061B3A] text-center mb-8">
                Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex">
                        <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-xl hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                            <span className="text-lg">🇮🇳</span>
                            <span className="ml-2">+91</span>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="relative w-full px-5 py-4 rounded-r-xl border border-l-0 border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white resize-none"
                    ></textarea>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-slate-500 italic leading-relaxed">
                    I authorize DCT Real Estate to contact me about offers via call, SMS, email, or WhatsApp, overriding any DNC/NDNC.
                </div>

                {/* Submit Button */}
                <div className="text-center pt-2">
                    <button
                        type="submit"
                        className="inline-block px-10 py-4 bg-brand-gold text-white font-bold rounded-lg shadow-lg hover:bg-[#d4b15f] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
