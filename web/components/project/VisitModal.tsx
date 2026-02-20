"use client";

import React, { useEffect } from 'react';
import { useVisitModal } from './VisitModalContext';

export default function VisitModal() {
    const { isOpen, projectName, closeModal } = useVisitModal();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, closeModal]);
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        date: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Include date in the message for context
            const fullMessage = `Preferred Visit Date: ${formData.date}\nNotes: ${formData.message}`;

            const payload: any = {
                name: formData.name,
                phone: formData.phone,
                subject: 'Schedule a Visit Request',
                message: fullMessage
            };

            if (projectName) {
                payload.project = projectName;
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Something went wrong');

            setSubmitStatus({ type: 'success', message: 'Visit request submitted successfully!' });

            // Close modal after a short delay on success
            setTimeout(() => {
                closeModal();
                setSubmitStatus({ type: null, message: '' });
                setFormData({ name: '', phone: '', date: '', message: '' });
            }, 2000);

        } catch (error: any) {
            setSubmitStatus({ type: 'error', message: error.message || 'Failed to submit request.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 py-10">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative z-[61] w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D]">Schedule a Visit</p>
                        <h3 className="font-heading text-2xl font-semibold text-[#061B3A] mt-2">
                            {projectName ? `Plan your visit to ${projectName}` : 'Plan your walkthrough'}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-[#061B3A] hover:text-[#C9A24D] transition-colors"
                    >
                        <ion-icon name="close-outline" class="text-2xl"></ion-icon>
                    </button>
                </div>

                {submitStatus.type === 'success' ? (
                    <div className="mt-8 text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                            <ion-icon name="checkmark-outline" class="text-3xl"></ion-icon>
                        </div>
                        <h4 className="text-xl font-bold text-[#061B3A] mb-2">Request Received</h4>
                        <p className="text-slate-600">We'll be in touch shortly to confirm your visit.</p>
                    </div>
                ) : (
                    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                        />
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                        />
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors"
                        />
                        <textarea
                            name="message"
                            rows={3}
                            placeholder="Preferred time or notes"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A24D] transition-colors resize-none"
                        ></textarea>

                        {submitStatus.type === 'error' && (
                            <div className="text-red-500 text-sm px-2">{submitStatus.message}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-full w-full justify-center inline-flex items-center gap-2 px-4 py-3 text-xs tracking-widest font-semibold uppercase bg-[#061B3A] text-white hover:bg-[#0B2550] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <ion-icon name="calendar-outline"></ion-icon>
                            {isSubmitting ? 'Submitting...' : 'Submit request'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
