"use server";

import { cryptr } from "@/lib/crypto";
import prisma from '@/lib/prisma';
import { passwordSchema, PasswordSchemaType } from "@/schema/pasword.schema";

export const createPasswordAction = async (newPassword: PasswordSchemaType ) => {
  const parseBody = passwordSchema.safeParse(newPassword);
  if (!parseBody.success) {
    throw new Error(
        `Error: ${parseBody.error.message}`
    );
  }

  const  {password, ...restItem} = parseBody.data;

    const encryptedPassword = cryptr.encrypt(password);

    return await prisma.password.create({
        data: {
            ...restItem,
            encryptedPassword
        }
    })


};