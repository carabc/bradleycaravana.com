import fs from "fs";
import path from "path";

export const postsDir = path.join(process.cwd(), "posts");
export const postNames = fs.readdirSync(postsDir);
