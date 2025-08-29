import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE } from '@config';
import slugify from '@utils/slugify';
import stripMarkdown from '@utils/stripMarkdown';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: stripMarkdown(post.data.description),
      pubDate: post.data.pubDatetime,
      link: `/posts/${slugify(post.data)}`,
    })),
  });
}
