import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const map = new Map<string, string>();
  filteredPosts.forEach(post => {
    post.data.tags.forEach((tag) => {
      const slug = slugifyStr(tag);
      if (!map.has(slug)) map.set(slug, tag);
    });
  });
  return Array.from(map.values());
};

export default getUniqueTags;
