'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { format } from 'date-fns'

type Contact = {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: 'unread' | 'read';
    created_at: string;
}

export default function AdminDashboardClient({ initialContacts }: { initialContacts: Contact[] }) {
    const [contacts, setContacts] = useState<Contact[]>(initialContacts)
    const [updatingId, setUpdatingId] = useState<number | null>(null)
    const supabase = createClient()

    const toggleStatus = async (id: number, currentStatus: string) => {
        setUpdatingId(id)
        const newStatus = currentStatus === 'unread' ? 'read' : 'unread'

        try {
            const { error } = await supabase
                .from('contacts')
                .update({ status: newStatus })
                .eq('id', id)

            if (error) throw error

            // Update local state
            setContacts(contacts.map(c =>
                c.id === id ? { ...c, status: newStatus } : c
            ))
        } catch (err) {
            console.error('Failed to update status:', err)
            alert('Failed to update status. Please try again.')
        } finally {
            setUpdatingId(null)
        }
    }

    if (contacts.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ion-icon name="mail-open-outline" class="text-3xl"></ion-icon>
                </div>
                <h3 className="text-lg font-semibold text-[#061B3A] mb-1">No enquiries yet</h3>
                <p className="text-slate-500">When someone submits a form on the website, it will appear here.</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="text-xs text-[#061B3A] uppercase bg-slate-50/80 border-b border-slate-100">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-semibold w-[20%]">Details</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-[45%]">Message</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-[15%] text-center">Date</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-[10%] text-center">Status</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-[10%] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {contacts.map((contact) => (
                            <tr
                                key={contact.id}
                                className={`group transition-colors ${contact.status === 'unread' ? 'bg-[#C9A24D]/5 hover:bg-[#C9A24D]/10' : 'hover:bg-slate-50 bg-white'}`}
                            >
                                <td className="px-6 py-5 align-top">
                                    <div className="font-semibold text-[#061B3A] text-base mb-1">{contact.name}</div>
                                    <div className="space-y-1">
                                        {contact.phone && (
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <ion-icon name="call-outline"></ion-icon>
                                                <a href={`tel:${contact.phone}`} className="hover:text-[#C9A24D] transition-colors">{contact.phone}</a>
                                            </div>
                                        )}
                                        {contact.email && (
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <ion-icon name="mail-outline"></ion-icon>
                                                <a href={`mailto:${contact.email}`} className="hover:text-[#C9A24D] transition-colors truncate block max-w-[150px]">{contact.email}</a>
                                            </div>
                                        )}
                                    </div>
                                </td>

                                <td className="px-6 py-5 align-top">
                                    <div className="font-medium text-[#061B3A] mb-1">{contact.subject}</div>
                                    <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">{contact.message}</p>
                                </td>

                                <td className="px-6 py-5 align-top text-center whitespace-nowrap">
                                    <div className="text-slate-800 font-medium">
                                        {format(new Date(contact.created_at), 'dd MMM yyyy')}
                                    </div>
                                    <div className="text-slate-500 text-xs mt-1">
                                        {format(new Date(contact.created_at), 'hh:mm a')}
                                    </div>
                                </td>

                                <td className="px-6 py-5 align-top text-center">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${contact.status === 'unread'
                                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                                            : 'bg-green-50 text-green-700 border-green-200'
                                        }`}>
                                        {contact.status === 'unread' ? 'New' : 'Read'}
                                    </span>
                                </td>

                                <td className="px-6 py-5 align-top text-right">
                                    <button
                                        onClick={() => toggleStatus(contact.id, contact.status)}
                                        disabled={updatingId === contact.id}
                                        className={`inline-flex items-center justify-center p-2 rounded-lg transition-all ${contact.status === 'unread'
                                                ? 'bg-[#061B3A] text-white hover:bg-[#0B2550] shadow-sm'
                                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                            } disabled:opacity-50`}
                                        title={contact.status === 'unread' ? "Mark as read" : "Mark as unread"}
                                    >
                                        <ion-icon
                                            name={contact.status === 'unread' ? "checkmark-done-outline" : "return-up-back-outline"}
                                            class="text-xl"
                                        ></ion-icon>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
