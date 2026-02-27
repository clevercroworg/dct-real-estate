'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            // Redirect to the existing Thank You page
            window.location.href = '/thank-you';

        } catch (error: any) {
            setSubmitStatus({ type: 'error', message: error.message || 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
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

                    {/* Project */}
                    <div>
                        <select
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-slate-700 bg-white appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select Project</option>
                            <option value="Aishwaryam">Aishwaryam</option>
                            <option value="Chitvan Farm">Chitvan Farm</option>
                            <option value="Gold Farm House">Gold Farm House</option>
                            <option value="Krishnapuram">Krishnapuram</option>
                            <option value="Bilaspur Textile Market">Bilaspur Textile Market</option>
                            <option value="Shri Ram Park">Shri Ram Park</option>
                            <option value="Induimperial">Induimperial</option>
                            <option value="Upcoming Project">Upcoming Project</option>
                            <option value="General Enquiry">General Enquiry</option>
                        </select>
                    </div>
                </div>



                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400 bg-white resize-none"
                    ></textarea>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-slate-500 italic leading-relaxed">
                    I authorize DCT Real Estate to contact me about offers via call, SMS, email, or WhatsApp, overriding any DNC/NDNC.
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                    <div className={`p-4 rounded-xl text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {submitStatus.message}
                    </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-block px-10 py-4 bg-brand-gold text-white font-bold rounded-lg shadow-lg hover:bg-[#d4b15f] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}
