// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { notionLoader } from 'notion-astro-loader';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
  ],
  experimental: {
    contentLayer: true,
  },
});