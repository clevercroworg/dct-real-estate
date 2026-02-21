'use client'

import { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default function QuillEditor({ value, onChange }: { value: string, onChange: (val: string) => void }) {
    const editorRef = useRef<HTMLDivElement>(null)
    const quillRef = useRef<Quill | null>(null)

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }
            })

            // Set initial value
            quillRef.current.clipboard.dangerouslyPasteHTML(value)

            // Listen to text changes and trigger onChange
            quillRef.current.on('text-change', () => {
                const html = quillRef.current?.root.innerHTML
                if (html) {
                    onChange(html === '<p><br></p>' ? '' : html)
                }
            })
        }
    }, [])

    return (
        <div className="bg-white text-black z-0 relative">
            <div ref={editorRef} style={{ minHeight: '350px', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }} />
        </div>
    )
}
