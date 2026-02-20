'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })

            if (res?.error) {
                throw new Error(res.error)
            }

            // Hard redirect to clear out any cached states
            window.location.href = '/admin/dashboard'
        } catch (err: any) {
            console.error('Login error:', err)
            setError(err.message || 'Failed to login. Please check your credentials.')
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#F9F9F7] flex items-center justify-center p-6">
            <div className="w-full max-w-md">

                {/* Logo Area */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-[#061B3A] rounded-full flex items-center justify-center shadow-lg border-4 border-[#C9A24D]/30">
                        {/* You can replace this with your actual logo component if preferred */}
                        <div className="text-white text-center">
                            <span className="block text-2xl font-bold tracking-widest text-[#C9A24D]">DCT</span>
                            <span className="block text-[0.5rem] tracking-widest uppercase mt-0.5">Admin</span>
                        </div>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-2xl font-bold text-[#061B3A]">Secure Portal</h1>
                        <p className="text-slate-500 text-sm mt-2">Enter your credentials to access the dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-[#061B3A]" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                placeholder="admin@dct.com"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-[#061B3A]" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-start gap-2">
                                <ion-icon name="warning-outline" class="text-xl shrink-0"></ion-icon>
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 bg-[#061B3A] text-white font-bold rounded-xl shadow-lg shadow-[#061B3A]/20 hover:bg-[#0B2550] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={() => alert('Please contact the IT administrator to reset your password.')}
                            className="text-sm text-slate-500 hover:text-[#C9A24D] transition-colors font-medium bg-transparent border-none p-0 cursor-pointer"
                        >
                            Forgot your password?
                        </button>
                    </div>
                </div>

                <div className="text-center mt-8 space-x-4">
                    <button
                        onClick={() => router.push('/')}
                        className="text-xs text-slate-400 hover:text-[#061B3A] transition-colors"
                    >
                        &larr; Return to Website
                    </button>
                </div>
            </div>
        </div>
    )
}
