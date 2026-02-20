import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/authOptions"
import { redirect } from "next/navigation"
import prisma from "@/utils/prisma"
import AdminDashboardClient from './AdminDashboardClient'
import LogoutButton from './LogoutButton'

export const metadata = {
    title: 'Dashboard | DCT Admin',
    description: 'Manage enquiries and leads',
}

export const revalidate = 0 // Disable aggressive caching for dashboard

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect('/admin/login')
    }

    // Fetch all contacts, sorted newest first
    const contacts = await prisma.contact.findMany({
        orderBy: { createdAt: 'desc' }
    })

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
                            <span className="text-sm text-slate-500 hidden sm:block">{session.user.email}</span>
                            <LogoutButton />
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
                <AdminDashboardClient initialContacts={contacts as any} />
            </main>
        </div>
    )
}
