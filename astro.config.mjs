// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import pagefind from 'astro-pagefind';
import { notionLoader } from 'notion-astro-loader';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your actual domain
  output: 'hybrid', // Enable hybrid rendering for Vercel
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
        wrap: true,
      },
      gfm: true,
    }),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    robotsTxt({
      sitemap: [
        'https://your-domain.com/sitemap-index.xml',
        'https://your-domain.com/sitemap-0.xml',
      ],
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/private/', '/*.json'],
          crawlDelay: 2,
        },
        {
          userAgent: 'GPTBot',
          disallow: '/',
        },
        {
          userAgent: 'ChatGPT-User',
          disallow: '/',
        },
      ],
    }),
    pagefind(),
  ],
  experimental: {
    contentLayer: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});