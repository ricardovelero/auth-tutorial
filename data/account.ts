import { db } from "@/lib/db";

export const getAccountByUserID = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { id: userId },
    });
    return account;
  } catch (error) {
    console.log(error);

    return null;
  }
};
