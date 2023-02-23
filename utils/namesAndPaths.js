import fs from "fs";
import path from "path";

export const postNames = fs
  .readdirSync(path.join(process.cwd(), "posts"))
  .map((name) => name.replace(/\.mdx/, ""));
export const postsDir = path.join(process.cwd(), "posts");
