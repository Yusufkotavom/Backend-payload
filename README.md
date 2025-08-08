# Astro + Flowbite + Tailwind CSS

A modern web development setup combining the power of Astro's performance, Flowbite's beautiful components, and Tailwind CSS's utility-first approach.

## 🚀 Features

- **Astro** - Lightning-fast static site generator with modern architecture
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **Flowbite** - Beautiful component library built on top of Tailwind CSS
- **TypeScript** - Full TypeScript support for better development experience
- **Responsive Design** - Mobile-first responsive components
- **Dark Mode** - Built-in dark mode support

## 📦 What's Included

- Responsive navigation bar with mobile menu
- Hero section with call-to-action buttons
- Component showcase featuring:
  - Cards
  - Alerts
  - Button groups
  - Interactive modals
- Footer with links
- Dark mode styling throughout

## 🛠️ Installation

The project is already set up and ready to use. If you need to reinstall dependencies:

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with Tailwind/Flowbite setup
│   ├── pages/
│   │   └── index.astro           # Homepage with component examples
│   └── styles/
│       └── global.css            # Global Tailwind CSS imports
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind CSS configuration with Flowbite
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Adding New Components

1. Browse the [Flowbite Components](https://flowbite.com/docs/components/) documentation
2. Copy the component HTML
3. Add it to your Astro pages or create new component files
4. Customize with additional Tailwind classes as needed

### Modifying the Theme

Edit `tailwind.config.mjs` to customize colors, fonts, and other design tokens:

```js
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
      fontFamily: {
        // Add custom fonts
      },
    },
  },
  // ... rest of config
}
```

### Adding More Flowbite Features

Install additional Flowbite packages as needed:

```bash
npm install flowbite-react flowbite-datepicker
```

## 🔧 Configuration Details

### Tailwind CSS v4

This project uses the latest Tailwind CSS v4 with:
- Vite plugin integration via `@tailwindcss/vite`
- Flowbite plugin for component styles
- Flowbite Typography for enhanced text styling

### Flowbite Integration

Flowbite is configured in:
- `tailwind.config.mjs` - Plugin registration and content paths
- `Layout.astro` - JavaScript initialization for interactive components
- Component templates use Flowbite's utility classes

### Astro Configuration

The project uses:
- Minimal Astro template
- TypeScript support
- Tailwind CSS integration via Vite plugin

## 🎯 Interactive Components

The following Flowbite components are demonstrated and fully functional:

- **Navigation Bar** - Responsive menu with mobile toggle
- **Modal** - Accessible modal dialogs with backdrop
- **Alerts** - Styled notification messages
- **Button Groups** - Grouped interactive buttons
- **Cards** - Content cards with images and actions

All interactive JavaScript is automatically handled by Flowbite's initialization script.

## 📚 Resources

- [Astro Documentation](https://astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Flowbite Documentation](https://flowbite.com/docs/)
- [Flowbite Components](https://flowbite.com/docs/components/)

## 🤝 Contributing

Feel free to contribute by:
1. Adding more component examples
2. Improving the styling
3. Adding new pages
4. Enhancing the documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
