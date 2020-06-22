import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: BlogFrontmatter) => {
  if (post.postSlug) {
    // Support nested slugs like "2019/why-we-switched..."
    return post.postSlug
      .split('/')
      .map((seg) => slugger(seg))
      .join('/');
  }
  return slugger(post.title);
};

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
