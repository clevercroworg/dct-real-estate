'use server'

import prisma from '@/utils/prisma'
import { revalidatePath } from 'next/cache'

export async function toggleContactStatus(id: string, currentStatus: string) {
    const newStatus = currentStatus === 'unread' ? 'read' : 'unread'

    await prisma.contact.update({
        where: { id },
        data: { status: newStatus }
    })

    revalidatePath('/admin/dashboard')
    return newStatus
}

export async function deleteContact(id: string) {
    try {
        await prisma.contact.delete({
            where: { id }
        })
    } catch (error) {
        // Record might already be deleted. Catch to prevent 500 errors from bubbling up
        console.warn(`Contact ${id} was already deleted or not found.`)
    }

    revalidatePath('/admin/dashboard')
    return true
}
