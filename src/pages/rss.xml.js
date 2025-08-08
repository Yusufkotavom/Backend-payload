import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Get all published blog posts from both manual and Notion sources
  const manualPosts = await getCollection('manual-blog', ({ data }) => {
    return !data.draft;
  });

  let notionPosts = [];
  try {
    notionPosts = await getCollection('notion-blog');
  } catch (error) {
    console.log('Notion blog collection not available for RSS');
  }

  // Combine and sort all posts
  const allPosts = [
    ...manualPosts.map(post => ({
      ...post,
      type: 'manual',
      date: post.data.pubDate,
      url: `/blog/${post.slug}/`
    })),
    ...notionPosts.map(post => ({
      ...post,
      type: 'notion',
      date: post.data.date,
      url: `/blog/notion/${post.slug}/`
    }))
  ].sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return rss({
    title: 'Astro + Flowbite Blog',
    description: 'Modern blog platform with Astro, Flowbite, and Tailwind CSS. Featuring tutorials, guides, and insights about web development.',
    site: context.site,
    language: 'en-US',
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.date,
      link: post.url,
      author: post.data.author || 'Astro Blog Team',
      categories: post.data.tags || [],
      content: post.body || '',
      customData: `
        <content:encoded><![CDATA[${post.body || post.data.description}]]></content:encoded>
        <dc:creator>${post.data.author || 'Astro Blog Team'}</dc:creator>
        <guid isPermaLink="true">${context.site}${post.url}</guid>
        ${post.data.heroImage ? `<enclosure url="${post.data.heroImage}" type="image/jpeg" />` : ''}
      `,
    })),
    customData: `
      <language>en-US</language>
      <managingEditor>admin@yourdomain.com (Astro Blog Team)</managingEditor>
      <webMaster>admin@yourdomain.com (Astro Blog Team)</webMaster>
      <copyright>© ${new Date().getFullYear()} Astro Blog. All rights reserved.</copyright>
      <category>Web Development</category>
      <category>Programming</category>
      <category>Technology</category>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <generator>Astro RSS</generator>
      <ttl>60</ttl>
      <image>
        <url>${context.site}/logo.png</url>
        <title>Astro + Flowbite Blog</title>
        <link>${context.site}</link>
        <description>Modern blog platform logo</description>
        <width>144</width>
        <height>144</height>
      </image>
    `,
    xmlns: {
      content: 'http://purl.org/rss/1.0/modules/content/',
      dc: 'http://purl.org/dc/elements/1.1/',
      atom: 'http://www.w3.org/2005/Atom',
    },
    stylesheet: '/rss-styles.xsl',
  });
}