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
