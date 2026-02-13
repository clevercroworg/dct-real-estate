import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../blogData';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Filter out the current post to show related posts
    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="pt-24">
                {/* STANDARD PAGE HEADER (Matches Reference) */}
                <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/background/bg-4.png')",
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-[#061B3A]/70"></div>
                    <div className="relative z-10 text-center text-white px-4 pt-20">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog Details</h1>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        {/* SINGLE POST CARD */}
                        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-lg shadow-sm">

                            {/* TITLE & META */}
                            <div className="mb-8">
                                <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#061B3A] mb-4">
                                    {post.title}
                                </h1>
                                <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gold"><ion-icon name="person"></ion-icon></span>
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-gold"><ion-icon name="calendar"></ion-icon></span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* FEATURED IMAGE */}
                            <div className="mb-10 w-full overflow-hidden rounded-lg">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* BLOG CONTENT */}
                            <div
                                className="prose prose-lg prose-slate max-w-none 
                                prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#061B3A]
                                prose-p:leading-loose prose-p:text-slate-600
                                prose-li:text-slate-600
                                prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-gold prose-a:transition-colors
                                prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            ></div>

                            {/* SHARE / TAGS */}
                            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                                <Link href="/blog" className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition font-medium">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                    Back to Blogs
                                </Link>

                                <div className="flex gap-4">
                                    <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">Share:</span>
                                    <a href="#" className="text-slate-400 hover:text-[#1877F2] transition"><ion-icon name="logo-facebook" class="text-xl"></ion-icon></a>
                                    <a href="#" className="text-slate-400 hover:text-[#1DA1F2] transition"><ion-icon name="logo-twitter" class="text-xl"></ion-icon></a>
                                    <a href="#" className="text-slate-400 hover:text-[#0A66C2] transition"><ion-icon name="logo-linkedin" class="text-xl"></ion-icon></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* RELATED POSTS */}
                {relatedPosts.length > 0 && (
                    <section className="py-20 bg-white border-t border-slate-200">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <h2 className="font-heading text-3xl font-bold text-[#061B3A] mb-12">Related Articles</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedPosts.map((related) => (
                                    <Link href={`/blog/${related.slug}`} key={related.id} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                                            <div className="relative h-52 overflow-hidden">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 text-[10px] text-slate-400 mb-3 uppercase tracking-widest font-medium">
                                                    <span>{related.date}</span>
                                                </div>
                                                <h3 className="font-heading text-lg font-bold text-[#061B3A] mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                                                    {related.title}
                                                </h3>
                                                <span className="mt-auto flex items-center gap-2 text-brand-gold font-semibold text-xs group-hover:gap-3 transition-all pt-4">
                                                    Read Article
                                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
