'use server';

import { cryptr } from '@/lib/crypto';
import prisma from '@/lib/prisma';

export const GetPasswordsAction = async () => {
  const passwords = await prisma.password.findMany();

  return passwords.map((password) => ({
    ...password,
    decryptedPassword: cryptr.decrypt(password.encryptedPassword),
  }));
};
