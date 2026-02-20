import { NextResponse } from 'next/server'
import prisma from '@/utils/prisma'
import bcrypt from 'bcryptjs'

export async function GET() {
    try {
        const email = 'admin@dct.com'
        const password = 'AdminPassword123!'

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return NextResponse.json({ message: 'Admin user already exists.' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        })

        return NextResponse.json({ message: 'Admin user created successfully!', email, password })
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
