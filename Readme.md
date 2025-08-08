1. Tujuan membuat backend payloadcms
npx create-payload-app@latest -t website

2. Membuat astro tailwind+flowbite+payload
3. Membuat nextjs tailwind+flowbite+payload

Payload dan static site akan di hosting terpisah. 
Pastikan astro dan nextjs bisa handle semua payload collection,global dan block. 
Selain payload astro dan nextjs juga memiliki sample content sendiri untuk page, post dan product. 

📂 Collections (Koleksi Data)
 * Posts: Untuk artikel dan blog.
 * Products: Untuk produk afiliasi.
 * Pages: Untuk halaman statis (Homepage, About, dll).
 * Categories: Untuk mengelompokkan Posts dan Products.
 * Tags: Untuk memberi tag pada Posts.
 * Media: Pustaka untuk semua file.
 * Users: Untuk manajemen pengguna.
 * Redirects: Dibuat oleh plugin resmi.
 * Forms: Dibuat oleh plugin resmi.
🧩 Custom Blocks (Blok Konten Modular)
 * HeroBlock: Blok hero section dengan judul, deskripsi, gambar, dan tombol.
 * RichTextBlock: Untuk konten teks standar (WYSIWYG).
 * HtmlBlock: Untuk menyisipkan kode HTML mentah.
 * MdxBlock: Untuk konten format MDX.
 * ProductBlock: Untuk menampilkan produk afiliasi di dalam konten.
 * ImageBlock: Untuk menampilkan gambar dengan caption.
🌐 Globals (Panel Kontrol Website)
Kita akan membaginya menjadi beberapa Globals agar terorganisir, dengan penambahan Global SEO yang sangat detail.
1. Site Identity (siteIdentity)
 * Tujuan: Informasi dasar dan branding situs.
 * Fields: siteName, tagline, logo, logoDark, favicon.
2. Business Information (businessInfo)
 * Tujuan: Semua data kontak dan legalitas bisnis.
 * Fields: address, email, phoneNumber, socialMediaLinks.
3. Navigation Menus (navigation)
 * Tujuan: Mengelola semua link navigasi.
 * Fields: headerMenuLinks, footerPrimaryLinks, footerSecondaryLinks.
4. Website Design (websiteDesign)
 * Tujuan: Mengontrol skema warna dasar website.
 * Fields: primaryColor, secondaryColor, textColor, backgroundColor.
5. Global SEO & Rich Snippets (seoDefaults)
 * Tujuan: Mengatur fallback SEO dan Rich Snippet default untuk seluruh situs. Ini adalah panel kontrol SEO terpusat.
 * Fields:
   * Fallback Meta Tags:
     * defaultMetaTitle: Judul default jika halaman tidak memiliki judul SEO.
     * defaultMetaDescription: Deskripsi default.
     * defaultOgImage: Gambar Open Graph (untuk social media) default.
   * Global Rich Snippet Schema:
     * Tipe: blocks. Ini memungkinkanmu memilih dan mengisi satu jenis skema utama untuk websitemu.
     * Blok yang Tersedia:
       * Local Business Block:
         * Fields: businessName, address, telephone, email, priceRange, openingHours (array).
       * Service Block:
         * Fields: serviceType (misal: "Jasa Digital Marketing"), providerName, areaServed (misal: "Indonesia"), description.
       * Review Block (untuk halaman review umum):
         * Fields: itemName (apa yang direview), author, reviewRating (skala 1-5), reviewBody.
       * Organization Block:
         * Fields: organizationName, legalName, logo, url.
Dengan struktur ini, kamu bisa, misalnya, masuk ke Global seoDefaults, memilih "Local Business Block", mengisi semua data bisnismu, dan secara otomatis setiap halaman di websitemu akan memiliki JSON-LD script untuk Local Business. Ini sangat kuat untuk SEO lokal.
