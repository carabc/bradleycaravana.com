import prisma from "@/lib/prisma";
import connectDB from "../../../lib/mongo";
import View from "../../../models/View";
import mongoose from "mongoose";
export default async function handler(req, res) {
  // connect to mongodb
  await connectDB();
  try {
    if (req.method === "GET") {
      const { slug } = req.query;

      const postViews = await View.findOne({ slug: slug });
      // create a record
      return res.status(200).json(postViews);
    }

    if (req.method === "PUT") {
      const slug = req.body;

      // check if the record exists

      const post = await View.findOne({ slug: slug });

      if (post === null) {
        // if it doesn't, create the record. Prisma will handle the views field as it has a default value of 0
        // mongodb solution will have 1 as the default value for views, no need to update after creation
        const newPost = await View.create({ slug: slug });
      } else {
        // else it does exits, increment the view count
        const updatedView = await View.findOneAndUpdate(
          { slug: slug },
          { $inc: { views: 1 } }
        );
      }
      return res.status(200).send("ok");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}

/*
//
OLD PRISMA SOLUTIONS BELOW USING PLANET SCALE
 const postViews = await prisma.tblViews.findFirst({
        where: {
          slug: slug,
        },
      });
 const post = await prisma.tblViews.findUnique({
        where: {
          slug: slug,
        },
      });

 const newPost = await prisma.tblViews.create({
          data: {
            slug: slug,
          },
        });


update the post once it was created to increase the view count
        const updateView = await prisma.tblViews.update({
          where: {
            slug: slug,
          },
          data: {
            views: {
              increment: 1,
            },
          },
        });

const updateView = await prisma.tblViews.update({
          where: {
            slug: slug,
          },
          data: {
            views: {
              increment: 1,
            },
          },
        });



 */
