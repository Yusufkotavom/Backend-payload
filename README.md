  🤖 AI Prompt: Generate Proyek Definitif Full-Stack (PayloadCMS + Astro)
Misi AI: Generate proyek backend-first yang siap produksi, mengintegrasikan semua plugin resmi Payload yang relevan, mendukung model bisnis "Affiliate First", memiliki sistem konten yang sangat fleksibel (MDX, HTML, JSON), dan berfungsi sempurna di lingkungan Windows. Kelengkapan dan fungsionalitas adalah prioritas utama.
📋 Spesifikasi Teknis & Arsitektur
 * Node.js Version: v20.11.0 atau lebih baru.
 * Package Manager: pnpm.
 * Kompatibilitas OS: Semua skrip dalam package.json harus menggunakan cross-env agar kompatibel dengan semua OS.
 * Arsitektur:
   * Backend: PayloadCMS v3+
   * Frontend: Astro v4.x
   * Database: MongoDB
   * Tujuan: SEO Maksimal, Otomatisasi Konten & Produk, Skalabilitas, dan Kontrol Penuh.
⚙️ Proyek 1: backend-payload (Prioritas Utama & Paling Detail)
1. Dependensi Wajib (package.json)
{
  "name": "backend-payload",
  "private": true,
  "scripts": {
    "dev": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon",
    "build": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload build",
    "serve": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts NODE_ENV=production node ./build/server.js",
    "seed": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts ts-node src/seed.ts",
    "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types"
  },
  "dependencies": {
    "@payloadcms/db-mongodb": "^3.0.0",
    "@payloadcms/richtext-slate": "^3.0.0",
    "@payloadcms/next": "^3.0.0",
    "payload": "^3.0.0",
    "cross-env": "^7.0.3",
    "express": "^4.18.2",
    "@payloadcms/plugin-form-builder": "^3.0.0",
    "@payloadcms/plugin-nested-docs": "^3.0.0",
    "@payloadcms/plugin-redirects": "^3.0.0",
    "@payloadcms/plugin-search": "^3.0.0",
    "@payloadcms/plugin-sentry": "^3.0.0",
    "@payloadcms/plugin-seo": "^3.0.0",
    "@payloadcms/plugin-stripe": "^3.0.0",
    "@payloadcms/plugin-import-export": "^1.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "typescript": "^5.0.0",
    "@types/express": "^4.17.13",
    "ts-node": "^10.9.2"
  }
}

2. Konfigurasi Plugin (src/payload.config.ts)
// Di dalam src/payload.config.ts
import { formBuilder } from '@payloadcms/plugin-form-builder';
import { nestedDocs } from '@payloadcms/plugin-nested-docs';
import { redirects } from '@payloadcms/plugin-redirects';
import { search } from '@payloadcms/plugin-search';
import { seo } from '@payloadcms/plugin-seo';
// ... import lainnya

export default buildConfig({
  // ... konfigurasi server, db, dll.
  plugins: [
    // Untuk membuat form kontak, survei, dll. dari admin panel.
    formBuilder({ /* Opsi jika ada */ }),
    // Untuk membuat halaman bersarang (parent/child) seperti /about/team.
    nestedDocs({
      collections: ['pages'],
    }),
    // Menangani redirect 301/302 secara otomatis dari admin panel.
    redirects({
      collections: ['posts', 'pages'],
    }),
    // Menambahkan fungsionalitas pencarian ke koleksi yang dipilih.
    search({
      collections: ['posts', 'products'],
    }),
    // Menambahkan field SEO (meta title, desc) & sitemap secara otomatis.
    seo({
      collections: ['posts', 'pages'],
      uploadsCollection: 'media',
    }),
  ],
  // ...
});

3. Definisi Struktur Data (Lengkap & Detail)
Custom Blocks (src/blocks/)
 * RichTextBlock.ts: Field content (tipe richText).
 * HtmlBlock.ts: Field html (tipe code, language html).
 * MdxBlock.ts: Field mdx (tipe code, language markdown).
 * ProductBlock.ts: Field products (tipe relationship ke products, hasMany: true).
 * ImageBlock.ts: Field image (upload) dan caption (text).
Collections (src/collections/)
 * Posts.ts:
   * title (text, required)
   * layout (blocks, required): Gunakan semua blok di atas.
   * status (select: draft, published)
   * publishedDate (date)
   * category (relationship to categories)
   * tags (relationship to tags)
   * relatedProducts (relationship to products, hasMany: true): Untuk menampilkan produk terkait di sidebar/footer.
   * relatedPosts (relationship to posts, hasMany: true): Untuk internal linking otomatis/manual.
 * Products.ts:
   * title (text, required)
   * description (textarea)
   * price (number)
   * affiliateUrl (text, required)
   * productImage (upload to media)
   * category (relationship to categories)
 * Pages.ts, Categories.ts, Tags.ts, Media.ts, Users.ts: Buat dengan konfigurasi standar yang logis.
4. Data Sampel & Script Seeding (src/seed.ts)
// Di dalam src/seed.ts

// STEP 1: Buat produk untuk dijadikan relasi
const newProduct = await payload.create({
  collection: 'products',
  data: {
    title: 'Produk Afiliasi Canggih 2025',
    slug: 'produk-canggih-2025',
    affiliateUrl: 'https://example.com/aff/produk-canggih',
  },
});

// STEP 2: Buat artikel yang terhubung dengan produk di atas
const newPost = await payload.create({
  collection: 'posts',
  data: {
    title: 'Artikel Lengkap dengan Semua Fitur',
    status: 'published',
    relatedProducts: [newProduct.id], // Menautkan ke produk
    layout: [
      {
        blockType: 'richText',
        content: [{"children":[{"text":"Ini adalah paragraf yang membahas produk canggih."}]}]
      },
      {
        blockType: 'productBlock',
        products: [newProduct.id] // Menyisipkan produk di dalam konten
      },
    ],
    // Data untuk plugin SEO
    meta: {
      title: 'Judul SEO untuk Artikel Lengkap',
      description: 'Deskripsi meta yang dioptimalkan untuk SEO.',
    },
  },
});

// STEP 3: Buat redirect ke artikel baru (ditangani oleh plugin)
await payload.create({
  collection: 'redirects',
  data: {
    from: '/artikel-lama-yang-usang',
    to: {
      type: 'reference',
      reference: {
        relationTo: 'posts',
        value: newPost.id,
      },
    },
  },
});

5. Environment (.env.example)
PAYLOAD_SECRET=your_secret_key_here
MONGODB_URI=mongodb://127.0.0.1/payload-project
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:4000
SENTRY_DSN=
STRIPE_SECRET_KEY=

🚀 Proyek 2: frontend-astro (Minimal & Fungsional)
 * Tujuan: Sebagai pembuktian konsep bahwa backend berfungsi.
 * Halaman: Buat src/pages/blog/[slug].astro.
 * Logika:
   * fetch data dari Posts.
   * Render SEO: Tampilkan post.meta.title dan post.meta.description di dalam <head>.
   * Render layout: Buat komponen Astro sederhana untuk setiap blok.
   * Di ProductBlock.astro, fetch detail produk berdasarkan ID dan tampilkan title dan affiliateUrl.
📜 Instruksi Final untuk AI
 * Laksanakan Semua Detail: Ikuti setiap poin dalam dokumen ini tanpa memotong atau menyederhanakan. Kelengkapan adalah kunci.
 * Fokus pada Integrasi Plugin: Pastikan semua plugin terkonfigurasi dengan benar dan fungsionalitasnya tercermin dalam struktur data dan script seed.
 * Jaminan Build: Hasil akhir harus berupa dua direktori proyek yang bisa langsung di-install, di-seed, di-build, dan di-run tanpa error di lingkungan Windows.
  "@payloadcms/plugin-form-builder": "^3.0.0",
    "@payloadcms/plugin-nested-docs": "^3.0.0",
    "@payloadcms/plugin-redirects": "^3.0.0",
    "@payloadcms/plugin-search": "^3.0.0",
    "@payloadcms/plugin-sentry": "^3.0.0",
    "@payloadcms/plugin-seo": "^3.0.0",
    "@payloadcms/plugin-stripe": "^3.0.0",
    "@payloadcms/plugin-import-export": "^1.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "typescript": "^5.0.0",
    "@types/express": "^4.17.13",
    "ts-node": "^10.9.2"
  }
}

2. Konfigurasi Plugin (src/payload.config.ts)
Impor dan konfigurasikan semua plugin yang relevan.
// Di dalam src/payload.config.ts
import { formBuilder } from '@payloadcms/plugin-form-builder';
import { nestedDocs } from '@payloadcms/plugin-nested-docs';
import { redirects } from '@payloadcms/plugin-redirects';
import { search } from '@payloadcms/plugin-search';
import { seo } from '@payloadcms/plugin-seo';
// ... import lainnya

export default buildConfig({
  // ... konfigurasi server, db, dll.
  plugins: [
    formBuilder({ /* Opsi jika ada */ }),
    nestedDocs({
      collections: ['pages'],
    }),
    redirects({
      collections: ['posts', 'pages'], // Redirects akan dibuat otomatis untuk koleksi ini
    }),
    search({
      collections: ['posts', 'products'],
      defaultPriorities: {
        posts: 10,
        products: 20,
      },
    }),
    seo({
      collections: ['posts', 'pages'],
      uploadsCollection: 'media',
    }),
    // Sentry & Stripe bisa dikonfigurasi nanti, cukup install dependensinya
  ],
  // ...
});

3. Definisi Struktur Data (Lengkap & Detail)
Custom Blocks (src/blocks/)
Ini adalah inti dari fleksibilitas konten. Buat file terpisah untuk setiap blok.
 * RichTextBlock.ts: Berisi satu field content dengan tipe richText.
 * HtmlBlock.ts: Berisi satu field html dengan tipe code dan admin: { language: 'html' }.
 * MdxBlock.ts: Berisi satu field mdx dengan tipe code dan admin: { language: 'markdown' }.
 * JsonBlock.ts: Berisi satu field jsonData dengan tipe json.
 * ProductBlock.ts: Berisi satu field products dengan tipe relationship ke collection products (hasMany: true).
 * ImageBlock.ts: Berisi field image (upload) dan caption (text).
Collections (src/collections/)
 * Posts.ts:
   * title (text, required)
   * layout (blocks, required): Gunakan semua blok yang didefinisikan di atas.
   * status (select: draft, published)
   * publishedDate (date)
   * category (relationship to categories)
   * tags (relationship to tags)
   * relatedProducts (relationship to products, hasMany: true)
   * relatedPosts (relationship to posts, hasMany: true)
   * Catatan untuk AI: Field SEO (metaTitle, metaDescription) dan slug akan ditangani oleh @payloadcms/plugin-seo. Jangan definisikan ulang.
 * Products.ts:
   * title (text, required)
   * description (textarea)
   * price (number)
   * affiliateUrl (text, required)
   * productImage (upload to media)
   * category (relationship to categories)
 * Pages.ts, Categories.ts, Tags.ts, Media.ts, Users.ts: Buat dengan konfigurasi standar yang logis.
4. Data Sampel & Script Seeding (src/seed.ts)
Buat script seed.ts yang mendemonstrasikan semua fungsionalitas, terutama relasi.
// Di dalam src/seed.ts

// 1. Hapus data lama
// 2. Buat sample Category
// 3. Buat sample Product
const newProduct = await payload.create({
  collection: 'products',
  data: {
    title: 'Produk Afiliasi Canggih 2025',
    slug: 'produk-canggih-2025',
    price: 1500000,
    affiliateUrl: 'https://example.com/aff/produk-canggih',
  },
});

// 4. Buat sample Post yang berhubungan dengan Product di atas
const newPost = await payload.create({
  collection: 'posts',
  data: {
    title: 'Artikel Lengkap dengan Semua Fitur',
    status: 'published',
    // Gunakan ID dari produk yang baru dibuat
    relatedProducts: [newProduct.id],
    layout: [
      {
        blockType: 'richText',
        content: [{"children":[{"text":"Ini adalah paragraf dari Rich Text editor."}]}]
      },
      {
        blockType: 'productBlock',
        products: [newProduct.id] // Tampilkan produk di dalam konten
      },
      {
        blockType: 'htmlBlock',
        html: "<h2>Judul dari HTML Mentah</h2>"
      }
    ],
    // Data untuk plugin SEO
    meta: {
      title: 'Judul SEO untuk Artikel Lengkap',
      description: 'Deskripsi meta yang dioptimalkan untuk SEO.',
    },
  },
});

// 5. Buat sample Redirect (ditangani oleh plugin)
await payload.create({
  collection: 'redirects',
  data: {
    from: '/artikel-lama',
    to: {
      type: 'reference',
      reference: {
        relationTo: 'posts',
        value: newPost.id,
      },
    },
  },
});

5. Environment (.env.example)
PAYLOAD_SECRET=your_secret_key_here
MONGODB_URI=mongodb://127.0.0.1/payload-project
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:4000
SENTRY_DSN=
STRIPE_SECRET_KEY=

🚀 Proyek 2: frontend-astro (Minimal & Fungsional)
 * Tujuan: Sebagai pembuktian konsep bahwa backend berfungsi.
 * Halaman: Buat src/pages/blog/[slug].astro.
 * Logika:
   * fetch data dari Posts berdasarkan slug.
   * Render SEO: Tampilkan post.meta.title dan post.meta.description di dalam <head>.
   * Render layout: Buat komponen Astro sederhana untuk setiap blok (RichTextBlock.astro, ProductBlock.astro, dll.) dan render secara dinamis.
   * Penting: Di ProductBlock.astro, fetch detail produk berdasarkan ID yang ada di blok dan tampilkan title, price, dan affiliateUrl.
 * Redirects: Frontend tidak perlu menangani redirect karena plugin Payload akan melakukannya di level server.
📜 Instruksi Final untuk AI
 * Laksanakan Semua Detail: Ikuti setiap poin dalam dokumen ini tanpa memotong atau menyederhanakan lebih lanjut. Kelengkapan adalah kunci.
 * Prioritaskan Backend: Pastikan backend-payload berfungsi sempurna, termasuk semua plugin dan script seed.
 * Verifikasi Dependensi: Gunakan versi paket yang tercantum untuk menghindari konflik.
 * Jaminan Build: Hasil akhir harus berupa dua direktori proyek yang bisa langsung di-install, di-seed, di-build, dan di-run tanpa error di lingkungan Windows.

