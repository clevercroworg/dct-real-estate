'use client'

import { useState, useMemo } from 'react'
import { format } from 'date-fns'
import { toggleContactStatus, deleteContact } from './actions'

type Contact = {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
    subject: string | null;
    project: string | null;
    message: string | null;
    status: string;
    createdAt: Date | string;
}

export default function AdminDashboardClient({ initialContacts }: { initialContacts: Contact[] }) {
    const [contacts, setContacts] = useState<Contact[]>(initialContacts)
    const [updatingId, setUpdatingId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredContacts = useMemo(() => {
        return contacts.filter(contact => {
            if (!searchQuery) return true
            const term = searchQuery.toLowerCase()
            return contact.name.toLowerCase().includes(term) ||
                (contact.email && contact.email.toLowerCase().includes(term)) ||
                (contact.subject && contact.subject.toLowerCase().includes(term)) ||
                (contact.project && contact.project.toLowerCase().includes(term)) ||
                (contact.message && contact.message.toLowerCase().includes(term))
        })
    }, [contacts, searchQuery])

    const toggleStatus = async (id: string, currentStatus: string) => {
        setUpdatingId(id)

        try {
            const newStatus = await toggleContactStatus(id, currentStatus)

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

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this message? This action cannot be undone.')) return

        setUpdatingId(id)
        try {
            await deleteContact(id)
            setContacts(contacts.filter(c => c.id !== id))
        } catch (err) {
            console.error('Failed to delete contact:', err)
            alert('Failed to delete message. Please try again.')
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
            {/* Toolbar: Search and Filter */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-4 flex-wrap">
                <div className="relative flex-1 max-w-md w-full">
                    <ion-icon name="search-outline" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></ion-icon>
                    <input
                        type="text"
                        placeholder="Search by name, email, or subject..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] outline-none transition-all text-sm bg-white shadow-sm"
                    />
                </div>
                <div className="text-sm font-medium text-slate-500 hidden sm:block">
                    Showing {filteredContacts.length} {filteredContacts.length === 1 ? 'enquiry' : 'enquiries'}
                </div>
            </div>

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
                        {filteredContacts.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center">
                                    <div className="text-slate-400 mb-2">
                                        <ion-icon name="search-outline" class="text-4xl opacity-50"></ion-icon>
                                    </div>
                                    <h3 className="text-base font-medium text-slate-600">No matching enquiries found</h3>
                                    <p className="text-sm text-slate-500 mt-1">Try adjusting your search query.</p>
                                </td>
                            </tr>
                        ) : filteredContacts.map((contact) => (
                            <tr
                                key={contact.id}
                                className={`group transition-colors ${contact.status === 'unread' ? 'bg-[#C9A24D]/5 hover:bg-[#C9A24D]/10' : 'hover:bg-slate-50 bg-white'}`}
                            >
                                <td className="px-6 py-5 align-top">
                                    <div className="font-semibold text-[#061B3A] text-base mb-1">{contact.name}</div>
                                    {contact.project && (
                                        <div className="mb-3">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#C9A24D]/10 text-[#061B3A] text-xs font-medium border border-[#C9A24D]/20">
                                                <ion-icon name="business-outline" class="text-[#C9A24D]"></ion-icon>
                                                {contact.project}
                                            </span>
                                        </div>
                                    )}
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
                                                <a href={`mailto:${contact.email}`} className="hover:text-[#C9A24D] transition-colors truncate block max-w-[150px]" title={contact.email}>{contact.email}</a>
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
                                        {format(new Date(contact.createdAt), 'dd MMM yyyy')}
                                    </div>
                                    <div className="text-slate-500 text-xs mt-1">
                                        {format(new Date(contact.createdAt), 'hh:mm a')}
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
                                    <div className="flex items-center justify-end gap-2 outline-none">
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
                                                class="text-lg"
                                            ></ion-icon>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(contact.id)}
                                            disabled={updatingId === contact.id}
                                            className="inline-flex items-center justify-center p-2 rounded-lg transition-all bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 disabled:opacity-50"
                                            title="Delete contact"
                                        >
                                            <ion-icon name="trash-outline" class="text-lg"></ion-icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
