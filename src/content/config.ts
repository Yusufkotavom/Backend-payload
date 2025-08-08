import { defineCollection, z } from 'astro:content';
import { notionLoader } from 'notion-astro-loader';

// Manual blog posts collection
const manualBlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Admin'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Manual pages collection
const manualPages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

// Notion blog posts collection
const notionBlog = defineCollection({
  loader: notionLoader({
    auth: process.env.NOTION_TOKEN,
    database_id: process.env.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published'
      }
    }
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

// Notion pages collection
const notionPages = defineCollection({
  loader: notionLoader({
    auth: process.env.NOTION_TOKEN,
    database_id: process.env.NOTION_PAGES_DATABASE_ID,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published'
      }
    }
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  'manual-blog': manualBlog,
  'manual-pages': manualPages,
  'notion-blog': notionBlog,
  'notion-pages': notionPages,
};