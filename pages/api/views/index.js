import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const allViews = await prisma.tblViews.findMany();

    return res.status(200).json(allViews);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
