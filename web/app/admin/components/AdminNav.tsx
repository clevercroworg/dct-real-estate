'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminNav() {
    const pathname = usePathname()

    const navItems = [
        { name: 'Dashboard (Enquiries)', href: '/admin/dashboard' },
        { name: 'Blog Management', href: '/admin/blogs' },
    ]

    return (
        <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8 h-12">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`inline-flex items-center px-1 border-b-2 text-sm font-medium transition-colors ${isActive
                                        ? 'border-[#C9A24D] text-[#061B3A]'
                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
