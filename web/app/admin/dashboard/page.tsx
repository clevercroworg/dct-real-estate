import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import AdminDashboardClient from './AdminDashboardClient'

export const metadata = {
    title: 'Dashboard | DCT Admin',
    description: 'Manage enquiries and leads',
}

export const revalidate = 0 // Disable aggressive caching for dashboard

export default async function AdminDashboard() {
    const supabase = await createClient()

    // Verify authentication explicitly
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        redirect('/admin/login')
    }

    // Fetch all contacts, sorted newest first
    const { data: contacts, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching contacts:', error)
    }

    return (
        <div className="min-h-screen bg-[#F9F9F7]">
            {/* Top Navbar */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#061B3A] rounded-full flex items-center justify-center shadow-md">
                                <div className="text-white text-center">
                                    <span className="block text-xs font-bold tracking-widest text-[#C9A24D]">DCT</span>
                                </div>
                            </div>
                            <h1 className="font-heading font-bold text-xl text-[#061B3A]">Admin Dashboard</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-500 hidden sm:block">{user.email}</span>
                            <form action={async () => {
                                'use server'
                                const supabase = await createClient()
                                await supabase.auth.signOut()
                                redirect('/admin/login')
                            }}>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#061B3A] font-heading">Recent Enquiries</h2>
                    <p className="text-slate-500 mt-1">Manage all contact and visit requests from the website.</p>
                </div>

                {/* Client component for interactive table */}
                <AdminDashboardClient initialContacts={contacts || []} />
            </main>
        </div>
    )
}
