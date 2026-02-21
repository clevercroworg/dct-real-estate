'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import dynamic from 'next/dynamic'

const QuillEditor = dynamic(() => import('./QuillEditor'), { ssr: false, loading: () => <div className="h-64 flex items-center justify-center text-slate-400 bg-slate-50 border rounded-lg">Loading Editor...</div> })

type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string | null;
    author: string;
    published: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export default function AdminBlogsClient({ initialBlogs }: { initialBlogs: BlogPost[] }) {
    const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
    const [view, setView] = useState<'list' | 'form'>('list')
    const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Form States
    const [title, setTitle] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState<string | null>(null)
    const [published, setPublished] = useState(true)

    // Image Upload State
    const [uploadingImage, setUploadingImage] = useState(false)

    const openCreateForm = () => {
        setEditingBlog(null)
        setTitle('')
        setExcerpt('')
        setContent('')
        setImage(null)
        setPublished(true)
        setView('form')
    }

    const openEditForm = (blog: BlogPost) => {
        setEditingBlog(blog)
        setTitle(blog.title)
        setExcerpt(blog.excerpt)
        setContent(blog.content)
        setImage(blog.image)
        setPublished(blog.published)
        setView('form')
    }

    const cancelForm = () => {
        setView('list')
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return

        setUploadingImage(true)
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
            if (!res.ok) throw new Error('Upload failed')
            const data = await res.json()
            setImage(data.url)
        } catch (error) {
            console.error(error)
            alert('Failed to upload image.')
        } finally {
            setUploadingImage(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const payload = { title, excerpt, content, image, published, author: 'DCT Real Estate' }

        try {
            if (editingBlog) {
                const res = await fetch(`/api/blogs/${editingBlog.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                if (!res.ok) throw new Error('Failed to update')
                const updated = await res.json()
                setBlogs(blogs.map(b => b.id === updated.id ? updated : b))
            } else {
                const res = await fetch('/api/blogs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                if (!res.ok) throw new Error('Failed to create')
                const created = await res.json()
                setBlogs([created, ...blogs])
            }
            setView('list')
        } catch (error) {
            console.error(error)
            alert('An error occurred while saving the blog.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog post?')) return

        try {
            const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
            if (!res.ok) throw new Error('Failed to delete')
            setBlogs(blogs.filter(b => b.id !== id))
        } catch (error) {
            console.error(error)
            alert('Failed to delete blog.')
        }
    }

    if (view === 'form') {
        return (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-[#061B3A]">
                        {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </h3>
                    <button onClick={cancelForm} className="text-slate-500 hover:text-slate-800 transition px-4 py-2 bg-slate-100 rounded-lg">
                        Back to List
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-[#061B3A] mb-1">Title</label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-[#061B3A] mb-1">
                                Excerpt <span className="text-xs text-slate-400 font-normal">(Short description for the blog card)</span>
                            </label>
                            <textarea
                                required
                                rows={2}
                                value={excerpt}
                                onChange={e => setExcerpt(e.target.value)}
                                maxLength={200}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                                placeholder="Short description for preview card..."
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-[#061B3A] mb-1">
                                Full Article Content <span className="text-xs text-slate-400 font-normal">(Shown on the dedicated blog page. Style your text here.)</span>
                            </label>
                            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden text-black z-0 relative">
                                <QuillEditor value={content} onChange={setContent} />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-semibold text-[#061B3A] mb-1">Thumbnail Image</label>
                            <div className="flex items-center gap-4">
                                {image && (
                                    <img src={image} alt="Thumbnail preview" className="h-16 w-24 object-cover rounded-lg border border-slate-200" />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={uploadingImage}
                                    className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#C9A24D]/10 file:text-[#061B3A] hover:file:bg-[#C9A24D]/20 transition-all"
                                />
                            </div>
                            {uploadingImage && <p className="text-xs text-[#C9A24D] mt-2">Uploading image...</p>}
                        </div>

                        <div className="col-span-1 flex items-center">
                            <label className="flex items-center gap-2 cursor-pointer mt-4">
                                <input
                                    type="checkbox"
                                    checked={published}
                                    onChange={e => setPublished(e.target.checked)}
                                    className="w-4 h-4 text-[#C9A24D] rounded focus:ring-[#C9A24D]"
                                />
                                <span className="text-sm font-medium text-[#061B3A]">Publish this post immediately</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                        <button type="button" onClick={cancelForm} className="px-6 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition border border-slate-200 font-medium">
                            Cancel
                        </button>
                        <button type="submit" disabled={isSubmitting || uploadingImage} className="px-6 py-2 rounded-lg bg-[#061B3A] text-white hover:bg-blue-900 transition font-medium disabled:opacity-50">
                            {isSubmitting ? 'Saving...' : 'Save Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-[#061B3A]">Blog Management</h3>
                <button
                    onClick={openCreateForm}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A24D] text-[#061B3A] text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#b08d40] transition"
                >
                    <ion-icon name="add-outline" class="text-xl"></ion-icon>
                    Add New Blog
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="text-xs text-[#061B3A] uppercase bg-slate-50/80 border-b border-slate-100">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-semibold w-16">Image</th>
                            <th scope="col" className="px-6 py-4 font-semibold">Title & Excerpt</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-32 text-center">Status</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-32 text-center">Date</th>
                            <th scope="col" className="px-6 py-4 font-semibold w-32 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {blogs.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-16 text-center text-slate-500">
                                    No blog posts found. Click "Add New Blog" to get started.
                                </td>
                            </tr>
                        ) : blogs.map((blog) => (
                            <tr key={blog.id} className="hover:bg-slate-50 transition">
                                <td className="px-6 py-4">
                                    {blog.image ? (
                                        <img src={blog.image} alt={blog.title} className="w-12 h-12 object-cover rounded-lg shadow-sm border border-slate-200" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                                            <ion-icon name="image-outline" class="text-slate-400 text-xl"></ion-icon>
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-[#061B3A] text-base mb-1">{blog.title}</div>
                                    <div className="text-slate-500 text-xs truncate max-w-md" title={blog.excerpt}>{blog.excerpt}</div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${blog.published ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                        {blog.published ? 'Published' : 'Draft'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
                                    {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => openEditForm(blog)}
                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                            title="Edit post"
                                        >
                                            <ion-icon name="create-outline" class="text-lg"></ion-icon>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(blog.id)}
                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                            title="Delete post"
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
