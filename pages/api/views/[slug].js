import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { slug } = req.query;
      const postViews = await prisma.tblViews.findFirst({
        where: {
          slug: slug,
        },
      });

      return res.status(200).json(postViews);
    }

    if (req.method === "PUT") {
      const slug = req.body;

      // check if the record exists
      const post = await prisma.tblViews.findUnique({
        where: {
          slug: slug,
        },
      });

      if (post === null) {
        // if it doesn't, create the record. Prisma will handle the views field as it has a default value of 0
        const newPost = await prisma.tblViews.create({
          data: {
            slug: slug,
          },
        });

        // update the post once it was created to increase the view count
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
      } else {
        // else it does exits, increment the view count
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
      }
      return res.status(200).send("ok");
    }
  } catch (error) {
    console.log(error);
    console.log("IN THE CATCH");
    console.log("IN THE CATCH");
    console.log("IN THE CATCH");
    console.log("IN THE CATCH");
    console.log("IN THE CATCH");
    return res.status(500).send(error);
  }
}
