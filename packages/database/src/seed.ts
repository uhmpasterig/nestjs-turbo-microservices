import { prisma } from './client';
import type { User } from '@prisma/client';

const DEFAULT_USERS = [
  {
    username: 'testuser1',
    email: 'testuser1@gmail.com',
  },
] as Array<Partial<User>>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map(async (user) => {
        await prisma.user.upsert({
          where: { username: user.username },
          update: {
            ...user,
          },
          create: {
            username: user.username!,
            email: user.email,
          },
        });

        console.log(`User ${user.username} created`);
      }),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
