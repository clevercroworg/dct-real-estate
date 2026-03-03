import { PrismaClient } from './prisma/generated-client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

async function main() {
    console.log('Fetching all users...');
    const users = await prisma.user.findMany();

    console.log('Current users in DB:', users.map(u => u.email));

    // Delete the old admin if it exists
    const oldEmail = 'admin@dct.com';
    const oldUser = await prisma.user.findUnique({ where: { email: oldEmail } });

    if (oldUser) {
        console.log(`Deleting old user: ${oldEmail}`);
        await prisma.user.delete({ where: { email: oldEmail } });
        console.log('Successfully deleted the old admin account.');
    } else {
        console.log(`Old account ${oldEmail} not found. Safe.`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
