import fs from "fs";
import path from "path";

export const postsDir = path.join(process.cwd(), "posts");
export const postNames = fs.readdirSync(postsDir);
export const snippetsDir = path.join(process.cwd(), "snippets");
export const snippetsNames = fs.readdirSync(snippetsDir);
