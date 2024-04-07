import { PrismaClient } from "@prisma/client";
import dbConnect from "../../../lib/mongo";
import View from "../../../models/View";

// const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    await dbConnect();
    // const allViews = await prisma.tblViews.findMany();
    const allViews = await View.find({});

    return res.status(200).json(allViews);
  } catch (error) {
    return res.status(500).send(error);
  }
}
