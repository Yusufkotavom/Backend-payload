# Astro + Flowbite + Tailwind CSS Blog Platform

A comprehensive, modern blog platform combining the power of Astro's performance, Flowbite's beautiful components, Tailwind CSS's utility-first approach, and seamless Notion integration for content management.

## 🚀 Features

- **Astro** - Lightning-fast static site generator with modern architecture
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **Flowbite Blocks** - Comprehensive component library with 500+ components
- **Notion Integration** - Seamless content management with notion-astro-loader
- **Dual Content System** - Support for both Notion and manual markdown content
- **SEO Optimized** - Built-in SEO with structured data, meta tags, and sitemaps
- **TypeScript** - Full TypeScript support for better development experience
- **Responsive Design** - Mobile-first responsive components
- **Dark Mode** - Built-in dark mode with user preference detection
- **Search & Filtering** - Client-side search and category filtering
- **Social Sharing** - Built-in social media sharing buttons

## 📦 What's Included

### Layout Components
- **BaseLayout** - Comprehensive SEO-optimized layout with structured data
- **BlogPost Layout** - Feature-rich article layout with TOC, social sharing, and author bio
- **Responsive Navigation** - Sticky header with mobile menu and dark mode toggle
- **Professional Footer** - Multi-column footer with social links

### Content Management
- **Manual Blog Posts** - Traditional markdown files in `src/content/manual-blog/`
- **Notion Integration** - Automatic content sync from Notion databases
- **Flexible Schema** - Support for tags, featured posts, drafts, and more
- **Dynamic Routing** - Automatic route generation for all content types

### Flowbite Blocks Implementation
- **Hero Sections** - Multiple hero layouts with CTAs
- **Feature Showcases** - Icon-based feature grids
- **Testimonials** - Customer testimonial blocks
- **Newsletter Signup** - Email subscription forms
- **Card Layouts** - Various card designs for content display
- **Search Interface** - Advanced search and filtering components

### SEO & Performance
- **Structured Data** - JSON-LD for articles and website information
- **Open Graph** - Complete Open Graph and Twitter Card support
- **Sitemap Generation** - Automatic XML sitemap creation
- **Meta Tags** - Comprehensive meta tag management
- **Performance Optimized** - Preloading, lazy loading, and bundle optimization

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone <your-repo-url>
cd astro-flowbite-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

### Notion Integration Setup (Optional)

1. **Create Notion Integration**
   - Go to [Notion Integrations](https://www.notion.so/my-integrations)
   - Create a new integration and get your token

2. **Set up Notion Databases**
   - Create a database for blog posts with these properties:
     - Title (title)
     - Status (select: Published, Draft)
     - Date (date)
     - Tags (multi-select)
     - Featured (checkbox)

3. **Configure Environment Variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Add your Notion credentials
   NOTION_TOKEN=your_notion_integration_token
   NOTION_BLOG_DATABASE_ID=your_blog_database_id
   NOTION_PAGES_DATABASE_ID=your_pages_database_id
   SITE_URL=https://your-domain.com
   ```

4. **Share Database with Integration**
   - In Notion, share your database with your integration

## 🎨 Content Management

### Manual Blog Posts

Create markdown files in `src/content/manual-blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "Brief description of your post"
pubDate: 2024-01-15
updatedDate: 2024-01-20
heroImage: "/blog/hero-image.jpg"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
featured: true
draft: false
---

# Your content here

Write your blog post content in markdown format.
```

### Notion Content

Content from Notion will automatically sync when you build your site. The system supports:
- Rich text content
- Images and media
- Tags and categories
- Publication status
- Featured posts

### Content Schema

#### Manual Blog Posts
- `title` - Post title (required)
- `description` - Meta description (required)
- `pubDate` - Publication date (required)
- `updatedDate` - Last updated date (optional)
- `heroImage` - Featured image URL (optional)
- `author` - Author name (default: "Admin")
- `tags` - Array of tags (default: [])
- `featured` - Featured post flag (default: false)
- `draft` - Draft status (default: false)

#### Notion Posts
- Automatically mapped from Notion database properties
- Supports the same schema with Notion-specific field mappings

## 🎯 Flowbite Components Used

### Navigation & Layout
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Multi-column footer with social links
- **Breadcrumbs** - Navigation breadcrumbs
- **Sticky Sidebar** - Table of contents sidebar

### Content Display
- **Hero Sections** - Multiple hero block variations
- **Feature Cards** - Icon-based feature showcases
- **Blog Cards** - Article preview cards with metadata
- **Testimonials** - Customer testimonial blocks
- **Alert Components** - Status and notification alerts

### Interactive Elements
- **Search Bar** - Real-time content search
- **Dropdown Filters** - Category filtering
- **Modal Dialogs** - Popup content displays
- **Button Groups** - Grouped action buttons
- **Social Share Buttons** - Platform-specific sharing

### Forms & Input
- **Newsletter Signup** - Email subscription forms
- **Search Input** - Enhanced search interface
- **Contact Forms** - User inquiry forms

## 🔧 Customization

### Styling
The project uses Tailwind CSS v4 with Flowbite plugins:

```javascript
// tailwind.config.mjs
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
}
```

### SEO Configuration
Update SEO settings in `src/layouts/BaseLayout.astro`:

```typescript
// Update site information
const siteInfo = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://your-domain.com",
  author: "Your Name",
  social: {
    twitter: "@yourtwitterhandle",
  }
};
```

### Adding New Content Types
1. Define new collections in `src/content/config.ts`
2. Create corresponding page templates
3. Add navigation links as needed

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── blog/                    # Blog images
├── src/
│   ├── content/
│   │   ├── config.ts           # Content collections config
│   │   ├── manual-blog/        # Manual blog posts
│   │   └── manual-pages/       # Manual pages
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout with SEO
│   │   └── BlogPost.astro      # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage with Flowbite blocks
│   │   └── blog/
│   │       ├── index.astro     # Blog listing page
│   │       └── [...slug].astro # Dynamic blog post routes
│   └── styles/
│       └── global.css          # Global Tailwind imports
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind + Flowbite config
└── package.json
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables for Notion (if using)

## 📈 SEO Features

### Automatic SEO
- **Meta Tags** - Title, description, keywords
- **Open Graph** - Facebook, LinkedIn sharing
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - JSON-LD for articles
- **Sitemap** - XML sitemap generation
- **Canonical URLs** - Duplicate content prevention

### Performance Optimization
- **Static Generation** - Pre-rendered pages
- **Image Optimization** - Responsive images
- **CSS Purging** - Unused CSS removal
- **Bundle Splitting** - Optimal loading
- **Preloading** - Critical resource preloading

## 🎨 Design System

### Colors
- **Primary** - Blue (Flowbite default)
- **Secondary** - Gray scale
- **Success** - Green
- **Warning** - Yellow
- **Error** - Red

### Typography
- **Headings** - Font weights 600-800
- **Body** - Font weight 400
- **Code** - Monospace font family

### Spacing
- Consistent 4px grid system
- Responsive breakpoints
- Mobile-first approach

## 🔍 Search & Filtering

### Client-Side Search
- Real-time search across all content
- Title and description matching
- No external dependencies

### Category Filtering
- Dynamic category extraction
- Filter by tags and content types
- Dropdown interface

## 📱 Responsive Design

### Breakpoints
- **Mobile** - < 768px
- **Tablet** - 768px - 1024px
- **Desktop** - > 1024px

### Mobile Features
- Hamburger menu
- Touch-friendly interactions
- Optimized typography
- Responsive images

## 🌙 Dark Mode

### Implementation
- CSS custom properties
- localStorage persistence
- System preference detection
- Smooth transitions

### Usage
```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

### Common Issues

**Notion Integration Not Working**
- Verify your integration token
- Check database permissions
- Ensure correct database IDs

**Build Errors**
- Clear node_modules and reinstall
- Check for TypeScript errors
- Verify content collection schemas

**Styling Issues**
- Ensure Tailwind is properly configured
- Check Flowbite plugin installation
- Verify CSS import order

### Getting Help
- Check the [Astro Documentation](https://docs.astro.build)
- Visit [Flowbite Documentation](https://flowbite.com/docs/)
- Review [Tailwind CSS Documentation](https://tailwindcss.com)

## 🔗 Resources

- [Astro](https://astro.build)
- [Flowbite](https://flowbite.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Notion API](https://developers.notion.com)
- [notion-astro-loader](https://www.npmjs.com/package/notion-astro-loader)

---

Built with ❤️ using Astro, Flowbite, and Tailwind CSS
