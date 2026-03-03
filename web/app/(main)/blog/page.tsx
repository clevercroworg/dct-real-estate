import React from 'react';
import Link from 'next/link';
import prisma from '@/utils/prisma';
import { format } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | DCT Real Estate',
  description: 'Read the latest real estate trends, tips, and updates on the DCT Blog.',
};


export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    let blogPosts: any[] = [];
    try {
        blogPosts = await prisma.post.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' }
        });
    } catch {
        console.log('Could not reach database during build. Rendering blog page with no posts.');
    }

    return (
        <div className="min-h-screen">
            <main className="pt-24">
                {/* HERO SECTION */}
                <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/background/bg-4.png')",
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-[#061B3A]/70"></div>
                    <div className="relative z-10 text-center text-white px-4">
                        <p className="uppercase text-xs tracking-[0.3em] text-[#C9A24D] font-bold mb-4">Insights & Updates</p>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold">Latest Blogs</h1>
                        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                            Stay updated with the latest trends, tips, and news from the real estate world.
                        </p>
                    </div>
                </section>

                {/* BLOG GRID */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post: any) => (
                                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                                        <div className="relative h-60 overflow-hidden">
                                            <img
                                                src={post.image || '/images/default-blog.png'}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                Read More
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 uppercase tracking-widest font-medium">
                                                <span>{format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
                                                <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
                                                <span>{post.author}</span>
                                            </div>
                                            <h3 className="font-heading text-xl font-bold text-[#061B3A] mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>
                                            <span className="flex items-center gap-2 text-brand-gold font-semibold text-sm group-hover:gap-3 transition-all">
                                                Read Full Article
                                                <ion-icon name="arrow-forward-outline"></ion-icon>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-brand-blue py-20">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                            Are you in search of a home or property investment?
                        </h2>
                        <a
                            href="tel:6264883066"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <ion-icon name="call-outline" class="text-xl"></ion-icon>
                            Call Now
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
