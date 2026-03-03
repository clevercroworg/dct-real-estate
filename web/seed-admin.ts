import { PrismaClient } from './prisma/generated-client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@dctdevelopers.com';
    const password = await bcrypt.hash('Q7@fL2x#V9sT', 10);

    console.log('Seeding admin user:', email);

    // Look for existing user to either update or create
    const user = await prisma.user.upsert({
        where: { email },
        update: {
            // Optional: if you want to hard reset the password
            password
        },
        create: {
            email,
            password
        }
    });

    console.log('Admin user seeded successfully:', user.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
