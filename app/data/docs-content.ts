export interface DocSectionHeading {
  id: string;
  title: string;
}

export interface DocArticle {
  id: string;
  slug: string;
  category: string;
  categoryTitle: string;
  title: string;
  description: string;
  badge?: string;
  updatedAt: string;
  headings: DocSectionHeading[];
  content: string; // Rich markdown-like or JSX format
  titleEn: string;
  descriptionEn: string;
  categoryTitleEn: string;
  headingsEn: DocSectionHeading[];
  contentEn: string;
}

export interface DocCategory {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  articles: {
    slug: string;
    title: string;
    titleEn: string;
    badge?: string;
    badgeEn?: string;
  }[];
}

export const DOC_CATEGORIES: DocCategory[] = [
  {
    id: "getting-started",
    title: "Pengenalan & Quickstart",
    titleEn: "Introduction & Quickstart",
    icon: "book",
    description: "Mulai dari sini — gambaran sistem, arsitektur, dan langkah setup pertama",
    descriptionEn: "Start here — system overview, architecture, and first setup steps",
    articles: [
      { slug: "getting-started-overview", title: "Gambaran Umum POSKART", titleEn: "POSKART Platform Overview" },
      { slug: "getting-started-quickstart", title: "Panduan Memulai Cepat", titleEn: "Quick Start Guide", badge: "Mulai", badgeEn: "Start" },
    ],
  },
  {
    id: "admin",
    title: "Panduan Admin Dashboard",
    titleEn: "Admin Dashboard Guide",
    icon: "monitor",
    description: "Kelola organisasi, perangkat, harga, galeri, keuangan, dan antrean dari dashboard web",
    descriptionEn: "Manage organizations, devices, pricing, gallery, finances, and queues from the web dashboard",
    articles: [
      { slug: "admin-organization", title: "Organisasi & Role Akses", titleEn: "Organization & Access Roles" },
      { slug: "admin-subscription", title: "Subskripsi SaaS & Invoice", titleEn: "SaaS Subscription & Invoice" },
      { slug: "admin-devices", title: "Device Management & Monitoring", titleEn: "Device Management & Monitoring", badge: "Baru", badgeEn: "New" },
      { slug: "admin-pricing", title: "Pengaturan Paket Harga & Akses", titleEn: "Pricing Plans & Access Settings" },
      { slug: "admin-gallery", title: "Manajemen Galeri & Delivery Foto", titleEn: "Gallery Management & Photo Delivery" },
      { slug: "admin-money-payout", title: "Keuangan & Pencairan Payout", titleEn: "Finance & Payout Withdrawal" },
      { slug: "admin-queue", title: "Sistem Antrean & Queue Display", titleEn: "Queue System & Queue Display", badge: "Baru", badgeEn: "New" },
    ],
  },
  {
    id: "kiosk",
    title: "Panduan Flutter Kiosk",
    titleEn: "Flutter Kiosk Guide",
    icon: "smartphone",
    description: "Setup, pairing, alur pengguna, pembayaran, dan konfigurasi aplikasi tablet kiosk",
    descriptionEn: "Setup, pairing, user flow, payments, and tablet kiosk app configuration",
    articles: [
      { slug: "kiosk-installation", title: "Instalasi Aplikasi Kiosk", titleEn: "Kiosk App Installation" },
      { slug: "kiosk-pairing", title: "Pairing Perangkat & Bearer Token", titleEn: "Device Pairing & Bearer Token", badge: "Wajib", badgeEn: "Required" },
      { slug: "kiosk-user-flow", title: "User Journey Lengkap di Kiosk", titleEn: "Complete User Journey on Kiosk", badge: "Baru", badgeEn: "New" },
      { slug: "kiosk-offline-mode", title: "Offline Mode & Data Sync", titleEn: "Offline Mode & Data Sync", badge: "Baru", badgeEn: "New" },
      { slug: "kiosk-printer-tuning", title: "Kalibrasi & Tuning Printer", titleEn: "Printer Calibration & Tuning" },
      { slug: "kiosk-pos-qris", title: "Mode Pembayaran QRIS & POS", titleEn: "QRIS & POS Payment Mode" },
    ],
  },
  {
    id: "builder",
    title: "Visual Builder",
    titleEn: "Visual Builder",
    icon: "layers",
    description: "Desain template bingkai foto dan kustomisasi tampilan layar kiosk",
    descriptionEn: "Design photo frame templates and customize kiosk screen appearance",
    articles: [
      { slug: "builder-frame-builder", title: "Frame Template Builder (1-5 Foto)", titleEn: "Frame Template Builder (1-5 Photos)" },
      { slug: "builder-theme-builder", title: "Theme Builder & Kustomisasi Layar", titleEn: "Theme Builder & Screen Customization" },
    ],
  },
  {
    id: "api",
    title: "API & Integrasi Developer",
    titleEn: "API & Developer Integrations",
    icon: "terminal",
    description: "Referensi teknis endpoint, webhook pembayaran, dan worker pipeline",
    descriptionEn: "Technical reference for endpoints, payment webhooks, and worker pipeline",
    articles: [
      { slug: "api-kiosk-endpoints", title: "Kiosk API Reference (/api/kiosk/*)", titleEn: "Kiosk API Reference (/api/kiosk/*)" },
      { slug: "api-payment-webhooks", title: "Webhook Pembayaran Duitku/Midtrans", titleEn: "Duitku/Midtrans Payment Webhook" },
      { slug: "api-live-photo-worker", title: "Live Photo FFmpeg Worker Pipeline", titleEn: "Live Photo FFmpeg Worker Pipeline" },
    ],
  },
  {
    id: "faq",
    title: "Troubleshooting & FAQ",
    titleEn: "Troubleshooting & FAQ",
    icon: "help",
    description: "Solusi cepat untuk kendala printer, QRIS, dan konektivitas",
    descriptionEn: "Quick solutions for printer issues, QRIS, and connectivity problems",
    articles: [
      { slug: "faq-troubleshooting", title: "Solusi Kendala Hardware & Transaksi", titleEn: "Hardware & Transaction Troubleshooting" },
    ],
  },
];

export const DOC_ARTICLES: Record<string, DocArticle> = {
  "getting-started-overview": {
    id: "getting-started-overview",
    slug: "getting-started-overview",
    category: "getting-started",
    categoryTitle: "Pengenalan & Quickstart",
    title: "Gambaran Umum POSKART",
    description: "Memahami arsitektur ekosistem SaaS Photobooth POSKART, hubungan antara Web Admin dan Aplikasi Flutter Kiosk.",
    badge: "Konsep Utama",
    updatedAt: "2026-07-30",
    headings: [
      { id: "tentang-poskart", title: "1. Tentang Platform POSKART" },
      { id: "arsitektur-sistem", title: "2. Arsitektur Komponen Utama" },
      { id: "alur-operasional", title: "3. Alur Operasional Photobooth" },
      { id: "keunggulan-sistem", title: "4. Fitur Unggulan Platform" },
    ],
    titleEn: "POSKART Platform Overview",
    descriptionEn: "Understanding the POSKART SaaS Photobooth ecosystem architecture, and the relationship between Web Admin and the Flutter Kiosk App.",
    categoryTitleEn: "Introduction & Quickstart",
    headingsEn: [
      { id: "tentang-poskart", title: "1. About the POSKART Platform" },
      { id: "arsitektur-sistem", title: "2. Core Component Architecture" },
      { id: "alur-operasional", title: "3. Photobooth Operational Flow" },
      { id: "keunggulan-sistem", title: "4. Platform Key Features" },
    ],
    contentEn: `
      <h2>1. About the POSKART Platform</h2>
      <p><strong>POSKART</strong> is an integrated SaaS (Software-as-a-Service) platform for managing modern photobooth business operations. POSKART connects a web management dashboard for business owners (Web Admin) with an interactive Flutter-based kiosk app running on photobooth tablets.</p>

      <h2>2. Core Component Architecture</h2>
      <p>The POSKART system is divided into three main layers:</p>
      <ul>
        <li><strong>POSKART Web Admin (Next.js 15 & Supabase):</strong> Where owners/admins manage the organization, pricing packages, frame templates, themes, device monitoring, photo gallery, finances, and SaaS subscription payments.</li>
        <li><strong>POSKART Kiosk Client (Flutter App):</strong> The kiosk app running on tablet devices (Android/iOS). Communicates directly with the server via <code>/api/kiosk/*</code> using a dedicated authentication token.</li>
        <li><strong>Railway Live Photo Worker (FFmpeg Node Service):</strong> A background service that processes video files into high-resolution framed <em>Live Photo animations (GIF/MP4)</em>.</li>
      </ul>

      <h2>3. Photobooth Operational Flow</h2>
      <p>The POSKART end-to-end workflow is designed to be fully automated:</p>
      <ol>
        <li><strong>Web Configuration:</strong> Admin sets up frame templates, pricing options, and payment methods in Web Admin.</li>
        <li><strong>Kiosk Sync:</strong> The kiosk tablet fetches the latest configuration manifest via the Kiosk API.</li>
        <li><strong>Guest Transaction:</strong> The guest selects a package and pays via Duitku QRIS or cashier.</li>
        <li><strong>Photo Session:</strong> Guest takes 1–5 photos using their chosen template.</li>
        <li><strong>Print & Digital Delivery:</strong> Print output is sent to the thermal/photo printer, while digital versions (including Live Photo) can be downloaded via QR Code or email.</li>
      </ol>

      <h2>4. Platform Key Features</h2>
      <ul>
        <li><strong>Multi-Tenant Organization:</strong> Securely isolated management of branches, locations, or businesses.</li>
        <li><strong>Visual Frame Builder:</strong> Drag-and-drop designer for arranging photo positions, text, and sticker decorations.</li>
        <li><strong>Live Photo Rendering:</strong> Automatically generate animated photos from short video recordings of the photo session.</li>
        <li><strong>Thermal Printer Tuning:</strong> Full control over contrast, print density, and safe zone margins.</li>
      </ul>
    `,
    content: `
      <h2>1. Tentang Platform POSKART</h2>
      <p><strong>POSKART</strong> adalah platform SaaS (Software-as-a-Service) terintegrasi untuk pengelolaan operasional bisnis photobooth modern. POSKART menghubungkan dashboard manajemen web untuk pemilik bisnis (Web Admin) dengan aplikasi kiosk interaktif berbasis Flutter yang berjalan di tablet photobooth.</p>
      
      <h2>2. Arsitektur Komponen Utama</h2>
      <p>Sistem POSKART terbagi menjadi tiga lapis utama:</p>
      <ul>
        <li><strong>POSKART Web Admin (Next.js 15 & Supabase):</strong> Tempat owner/admin mengelola organisasi, paket harga, frame template, theme, monitoring device, galeri foto, keuangan, serta pembayaran subskripsi SaaS.</li>
        <li><strong>POSKART Kiosk Client (Flutter App):</strong> Aplikasi kiosk yang berjalan di perangkat tablet (Android/iOS). Berkomunikasi langsung dengan server melalui <code>/api/kiosk/*</code> menggunakan token autentikasi khusus.</li>
        <li><strong>Railway Live Photo Worker (FFmpeg Node Service):</strong> Service latar belakang yang mengolah file video menjadi animasi <em>Live Photo berbingkai (GIF/MP4)</em> beresolusi tinggi.</li>
      </ul>

      <h2>3. Alur Operasional Photobooth</h2>
      <p>Alur kerja end-to-end POSKART dirancang agar sepenuhnya otomatis:</p>
      <ol>
        <li><strong>Konfigurasi Web:</strong> Admin mengatur template bingkai, pilihan paket harga, dan metode pembayaran di Web Admin.</li>
        <li><strong>Sync Kiosk:</strong> Tablet kiosk mengambil manifest konfigurasi terbaru melalui Kiosk API.</li>
        <li><strong>Transaksi Pengunjung:</strong> Pengunjung memilih paket, melakukan pembayaran via QRIS Duitku atau kasir.</li>
        <li><strong>Sesi Foto:</strong> Pengunjung mengambil 1–5 foto sesuai template pilihan.</li>
        <li><strong>Cetak & Digital Delivery:</strong> Hasil cetak dikirim ke printer thermal/photo printer, sementara versi digital (termasuk Live Photo) langsung dapat diunduh via QR Code atau email.</li>
      </ol>

      <h2>4. Fitur Unggulan Platform</h2>
      <ul>
        <li><strong>Multi-Tenant Organization:</strong> Manajemen cabang, lokasi, atau bisnis yang terisolasi dengan aman.</li>
        <li><strong>Visual Frame Builder:</strong> Drag-and-drop designer untuk mengatur posisi foto, teks, dan dekorasi stiker.</li>
        <li><strong>Live Photo Rendering:</strong> Hasilkan foto bergerak otomatis dari rekaman video singkat sesi pemotretan.</li>
        <li><strong>Tuning Thermal Printer:</strong> Kontrol penuh atas kontras, kegelapan cetak (density), dan safe zone margin.</li>
      </ul>
    `,
  },

  "getting-started-quickstart": {
    id: "getting-started-quickstart",
    slug: "getting-started-quickstart",
    category: "getting-started",
    categoryTitle: "Pengenalan & Quickstart",
    title: "Panduan Memulai Cepat",
    description: "Langkah-langkah cepat membuat akun organisasi, mendaftarkan device kiosk, dan melakukan sesi foto pertama.",
    badge: "Quickstart",
    updatedAt: "2026-07-30",
    headings: [
      { id: "langkah-1-registrasi", title: "Langkah 1: Registrasi Akun & Organisasi" },
      { id: "langkah-2-buat-template", title: "Langkah 2: Buat Template Frame" },
      { id: "langkah-3-tambah-device", title: "Langkah 3: Registrasi Perangkat (Booth)" },
      { id: "langkah-4-pairing-kiosk", title: "Langkah 4: Pairing Aplikasi Kiosk" },
    ],
    titleEn: "Quick Start Guide",
    descriptionEn: "Step-by-step guide to creating an organization account, registering a kiosk device, and completing your first photo session.",
    categoryTitleEn: "Introduction & Quickstart",
    headingsEn: [
      { id: "langkah-1-registrasi", title: "Step 1: Register Account & Organization" },
      { id: "langkah-2-buat-template", title: "Step 2: Create a Frame Template" },
      { id: "langkah-3-tambah-device", title: "Step 3: Register Device (Booth)" },
      { id: "langkah-4-pairing-kiosk", title: "Step 4: Pair the Kiosk App" },
    ],
    contentEn: `
      <h2>Step 1: Register Account & Organization</h2>
      <p>Go to the POSKART homepage and register a new account. Once logged in, create your business Organization (e.g. <em>Studio Snap Malang</em>). This organization will contain all your devices, transactions, and photo gallery.</p>

      <h2>Step 2: Create a Frame Template</h2>
      <p>Go to the <strong>Templates</strong> menu in Web Admin and click <strong>Create New Template</strong>. Use the <em>Visual Frame Builder</em> to:</p>
      <ul>
        <li>Set the frame ratio (4:3, 3:2, or 2x6 Strip).</li>
        <li>Configure the number of photo slots (1 to 5 photos).</li>
        <li>Upload a transparent frame overlay image (PNG).</li>
      </ul>

      <h2>Step 3: Register Device (Booth)</h2>
      <p>Go to the <strong>Devices</strong> menu in Web Admin and click <strong>Add Device</strong>. Enter a device name (e.g. <em>Kiosk Main Mall X</em>). Once saved, you will receive a <strong>Device Pair Code / Token</strong>.</p>

      <h2>Step 4: Pair the Kiosk App</h2>
      <p>Open the POSKART Kiosk app on your Android/iOS tablet. On the pairing setup screen, enter the Pair Token from step 3. The tablet will connect instantly and be ready to accept guest transactions!</p>
    `,
    content: `
      <h2>Langkah 1: Registrasi Akun & Organisasi</h2>
      <p>Buka halaman utama POSKART dan daftarkan akun baru. Setelah masuk, buat Organisasi bisnis Anda (contoh: <em>Studio Snap Malang</em>). Organisasi ini akan menjadi wadah seluruh perangkat, transaksi, dan galeri foto Anda.</p>

      <h2>Langkah 2: Buat Template Frame</h2>
      <p>Masuk ke menu <strong>Templates</strong> di Web Admin, klik <strong>Buat Template Baru</strong>. Gunakan <em>Visual Frame Builder</em> untuk:</p>
      <ul>
        <li>Menentukan rasio bingkai (4:3, 3:2, atau Strip 2x6).</li>
        <li>Mengatur jumlah slot foto (1 hingga 5 foto).</li>
        <li>Mengunggah gambar overlay bingkai transparan (PNG).</li>
      </ul>

      <h2>Langkah 3: Registrasi Perangkat (Booth)</h2>
      <p>Buka menu <strong>Devices</strong> di Web Admin, klik <strong>Tambah Device</strong>. Masukkan nama perangkat (misal: <em>Kiosk Utama Mall X</em>). Setelah disimpan, Anda akan mendapatkan <strong>Device Pair Code / Token</strong>.</p>

      <h2>Langkah 4: Pairing Aplikasi Kiosk</h2>
      <p>Buka aplikasi POSKART Kiosk di tablet Android/iOS Anda. Pada layar awal pairing, masukkan Pair Token dari langkah 3. Tablet akan terhubung secara instan dan siap menerima transaksi pengunjung!</p>
    `,
  },

  "admin-organization": {
    id: "admin-organization",
    slug: "admin-organization",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Organisasi & Role Akses",
    description: "Mengelola struktur organisasi, undang tim, dan pembagian hak akses pengguna.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "struktur-organisasi", title: "1. Multi-Tenancy & Isolasi Organisasi" },
      { id: "tipe-role", title: "2. Tipe Role & Hak Akses" },
      { id: "undang-anggota", title: "3. Mengundang Anggota Baru" },
    ],
    titleEn: "Organization & Access Roles",
    descriptionEn: "Managing organization structure, inviting team members, and assigning user access rights.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "struktur-organisasi", title: "1. Multi-Tenancy & Organization Isolation" },
      { id: "tipe-role", title: "2. Role Types & Access Rights" },
      { id: "undang-anggota", title: "3. Inviting New Members" },
    ],
    contentEn: `
      <h2>1. Multi-Tenancy & Organization Isolation</h2>
      <p>POSKART implements an isolated multi-tenant system based on <code>organization_id</code>. All transaction data, photo gallery, templates, and financial wallet are securely stored within each organization's boundaries.</p>

      <h2>2. Role Types & Access Rights</h2>
      <table class="w-full border-collapse border border-zinc-200 text-left my-4 text-xs">
        <thead class="bg-zinc-100 font-semibold">
          <tr>
            <th class="p-2 border border-zinc-200">Role</th>
            <th class="p-2 border border-zinc-200">Primary Access</th>
            <th class="p-2 border border-zinc-200">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Owner</td>
            <td class="p-2 border border-zinc-200">Full Access + Billing + Withdrawal</td>
            <td class="p-2 border border-zinc-200">Organization owner. Can manage subscriptions, payout withdrawals, and delete the account.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Admin</td>
            <td class="p-2 border border-zinc-200">Full Access minus Withdrawal Payout</td>
            <td class="p-2 border border-zinc-200">Day-to-day operations manager; handles device registration, pricing packages, and gallery.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Designer</td>
            <td class="p-2 border border-zinc-200">Templates & Theme Builder</td>
            <td class="p-2 border border-zinc-200">Dedicated to designing photo frames and visual themes for the kiosk screen.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Staff</td>
            <td class="p-2 border border-zinc-200">POS Sales, Monitor Queue, Galeri View</td>
            <td class="p-2 border border-zinc-200">On-site operator at the photobooth location for serving guests.</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Inviting New Members</h2>
      <p>Go to the <strong>Organization &rarr; Members</strong> menu and click <strong>Invite Member</strong>. Enter the prospective member's email and select the desired role. The invitee will receive an automatic invitation link.</p>
    `,
    content: `
      <h2>1. Multi-Tenancy & Isolasi Organisasi</h2>
      <p>POSKART menerapkan sistem multi-tenant terisolasi berbasis <code>organization_id</code>. Setiap data transaksi, galeri foto, template, dan dompet keuangan tersimpan aman sesuai batasan organisasi masing-masing.</p>

      <h2>2. Tipe Role & Hak Akses</h2>
      <table class="w-full border-collapse border border-zinc-200 text-left my-4 text-xs">
        <thead class="bg-zinc-100 font-semibold">
          <tr>
            <th class="p-2 border border-zinc-200">Role</th>
            <th class="p-2 border border-zinc-200">Akses Utama</th>
            <th class="p-2 border border-zinc-200">Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Owner</td>
            <td class="p-2 border border-zinc-200">Full Access + Billing + Withdrawal</td>
            <td class="p-2 border border-zinc-200">Pemilik organisasi. Berhak mengelola subskripsi, pencairan dana, dan hapus akun.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Admin</td>
            <td class="p-2 border border-zinc-200">Full Access minus Withdrawal Payout</td>
            <td class="p-2 border border-zinc-200">Pengelola operasional harian, pendaftaran device, paket harga, dan galeri.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Designer</td>
            <td class="p-2 border border-zinc-200">Templates & Theme Builder</td>
            <td class="p-2 border border-zinc-200">Khusus mendesain bingkai foto dan tema visual layar kiosk.</td>
          </tr>
          <tr>
            <td class="p-2 border border-zinc-200 font-bold">Staff</td>
            <td class="p-2 border border-zinc-200">POS Sales, Monitor Queue, Galeri View</td>
            <td class="p-2 border border-zinc-200">Operator lapangan di lokasi photobooth untuk melayani pengunjung.</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Mengundang Anggota Baru</h2>
      <p>Masuk ke menu <strong>Organization &rarr; Members</strong>, klik <strong>Undang Anggota</strong>. Masukkan email calon anggota dan pilih role yang diinginkan. Calon anggota akan menerima link undangan otomatis.</p>
    `,
  },

  "admin-subscription": {
    id: "admin-subscription",
    slug: "admin-subscription",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Subskripsi SaaS & Invoice",
    description: "Panduan memilih paket berlangganan SaaS POSKART, batas jumlah perangkat, dan riwayat invoice.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "paket-saas", title: "1. Pilihan Paket Subskripsi" },
      { id: "addon-device", title: "2. Penambahan Limit Perangkat (Device Addon)" },
      { id: "pembayaran-invoice", title: "3. Pembayaran Invoice & Aktivasi" },
    ],
    titleEn: "SaaS Subscription & Invoice",
    descriptionEn: "Guide to choosing a POSKART SaaS subscription plan, device limits, and invoice history.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "paket-saas", title: "1. Subscription Plan Options" },
      { id: "addon-device", title: "2. Adding Device Limit (Device Addon)" },
      { id: "pembayaran-invoice", title: "3. Invoice Payment & Activation" },
    ],
    contentEn: `
      <h2>1. Subscription Plan Options</h2>
      <p>POSKART offers monthly and annual subscription plans with varying active device quotas:</p>
      <ul>
        <li><strong>Starter Plan:</strong> Suitable for 1 active photobooth location.</li>
        <li><strong>Pro Business Plan:</strong> Up to 5 active devices with Live Photo rendering and priority support.</li>
        <li><strong>Enterprise Plan:</strong> Custom device quota, dedicated storage, and business SLA.</li>
      </ul>

      <h2>2. Adding Device Limit (Device Addon)</h2>
      <p>If your current plan's device quota is full, you can add extra device slots (Device Addon) without upgrading to a higher plan via <strong>Subscriptions &rarr; Add Device Limit</strong>.</p>

      <h2>3. Invoice Payment & Activation</h2>
      <p>Subscription payments are supported via Payment Gateway (Duitku / Midtrans) using Virtual Account, QRIS, or Credit Card. Subscriptions activate instantly within seconds after payment is automatically verified by the webhook system.</p>
    `,
    content: `
      <h2>1. Pilihan Paket Subskripsi</h2>
      <p>POSKART menyediakan paket subskripsi bulanan dan tahunan dengan kuota perangkat aktif yang bervariasi:</p>
      <ul>
        <li><strong>Starter Plan:</strong> Cocok untuk 1 lokasi photobooth aktif.</li>
        <li><strong>Pro Business Plan:</strong> Hingga 5 perangkat aktif dengan fitur Live Photo rendering dan prioritas support.</li>
        <li><strong>Enterprise Plan:</strong> Kustom kuota perangkat, dedicated storage, dan SLA bisnis.</li>
      </ul>

      <h2>2. Penambahan Limit Perangkat (Device Addon)</h2>
      <p>Jika kuota perangkat pada paket aktif Anda sudah penuh, Anda dapat menambah slot perangkat tambahan (Device Addon) tanpa harus berpindah ke paket yang lebih tinggi melalui menu <strong>Subscriptions &rarr; Add Device Limit</strong>.</p>

      <h2>3. Pembayaran Invoice & Aktivasi</h2>
      <p>Pembayaran subskripsi didukung melalui Payment Gateway (Duitku / Midtrans) menggunakan Virtual Account, QRIS, atau Kartu Kredit. Subskripsi akan aktif secara instan dalam hitungan detik setelah pembayaran terverifikasi secara otomatis oleh sistem webhook.</p>
    `,
  },

  "admin-pricing": {
    id: "admin-pricing",
    slug: "admin-pricing",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Pengaturan Paket Harga & Akses",
    description: "Mengatur harga sesi photobooth, kuota cetak foto, metode pembayaran, dan complimentary event access.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "tambah-paket", title: "1. Membuat Paket Harga" },
      { id: "mode-pembayaran", title: "2. Mode Akses & Pembayaran (QRIS, Cash, Voucher, Event)" },
      { id: "event-complimentary", title: "3. Sesi Complimentary / Event Access" },
    ],
    titleEn: "Pricing Plans & Access Settings",
    descriptionEn: "Setting photobooth session pricing, photo print quotas, payment methods, and complimentary event access.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "tambah-paket", title: "1. Creating a Pricing Package" },
      { id: "mode-pembayaran", title: "2. Access & Payment Modes (QRIS, Cash, Voucher, Event)" },
      { id: "event-complimentary", title: "3. Complimentary Sessions / Event Access" },
    ],
    contentEn: `
      <h2>1. Creating a Pricing Package</h2>
      <p>In the <strong>Pricing</strong> menu in Web Admin, you can define the pricing packages that will appear on the kiosk screen. Click <strong>Add Package</strong> to create a new package. Each package has the following parameters:</p>
      <ul>
        <li><strong>Package Name:</strong> The label shown on the kiosk, e.g. <em>"Standard 2 Print Package"</em> or <em>"Premium 4 Print Package"</em>.</li>
        <li><strong>Price:</strong> The amount the guest must pay, e.g. Rp 35,000.</li>
        <li><strong>Print Count:</strong> The number of physical photo sheets printed automatically by the printer after the session ends.</li>
        <li><strong>Duration / Photo Limit:</strong> The maximum number of photos per session (e.g. 4 shots for 2x6 strip).</li>
        <li><strong>Active Status:</strong> Toggle to enable or disable the package. Disabled packages will not appear on the kiosk screen without needing to be deleted.</li>
      </ul>
      <p>Common package combinations used by operators:</p>
      <ul>
        <li><em>Mini Package (Rp 25,000)</em> — 2 prints, 3 shots, 2x6 strip frame.</li>
        <li><em>Standard Package (Rp 35,000)</em> — 2 prints, 4 shots, choice of 4R or strip frame.</li>
        <li><em>Premium Package (Rp 55,000)</em> — 4 prints, 6 shots, all frames available.</li>
      </ul>
      <p>To permanently delete a package, open the package detail and click <strong>Delete Package</strong>. Confirmation is required. Packages already used in historical transactions remain stored in the database for reporting purposes — only their visibility on the kiosk is removed.</p>

      <h2>2. Access & Payment Modes (QRIS, Cash, Voucher, Event)</h2>
      <p>Each pricing package can be configured to support one or more payment methods. POSKART supports 4 transaction modes that can be enabled independently per package:</p>
      <ul>
        <li><strong>QRIS:</strong> Automatic payment via Duitku QRIS on the kiosk screen. Guests scan the QR with any digital wallet app. Payment status is verified in real-time by the server before the session starts.</li>
        <li><strong>Cash/POS:</strong> Cash payment via cashier or operator. The kiosk displays a unique transaction code that is manually confirmed by the operator from Web Admin. Useful for booths with a physical cashier.</li>
        <li><strong>Voucher:</strong> Guest enters a unique promo voucher code generated from the <strong>Vouchers</strong> menu in Web Admin. The code is validated by the server before the session starts. Each code can only be used once.</li>
        <li><strong>Event Access:</strong> Direct access without payment, exclusively for event packages. Guests only need to select the package and go straight to the session without passing through a payment page.</li>
      </ul>

      <h2>3. Complimentary Sessions / Event Access</h2>
      <p>For photobooth use at special events (e.g. <em>Weddings, Corporate Events, or Exhibitions</em>) where guests don't need to pay per session, enable the <strong>Event Access Token</strong> mode on the target pricing package.</p>
      <p>How to enable Event Access:</p>
      <ol>
        <li>Open the pricing package you want to make an event package and click <strong>Edit</strong>.</li>
        <li>In the <em>Payment Method</em> section, check the <strong>Event Access</strong> option.</li>
        <li>Save the changes. Guests can now select this package without going through the payment page.</li>
        <li>Optional: disable all other payment methods (QRIS, Cash, Voucher) on this package so guests cannot pay normally.</li>
      </ol>
      <p>Transactions with <em>Event</em> status will not be counted as revenue in financial reports. These transactions are still recorded in the <code>sessions</code> table with <code>payment_type: "event"</code> for auditing guest attendance at events.</p>
    `,
    content: `
      <h2>1. Membuat Paket Harga</h2>
      <p>Di menu <strong>Pricing</strong> pada Web Admin, Anda dapat menentukan paket harga yang akan tampil pada layar kiosk. Klik <strong>Tambah Paket</strong> untuk membuat paket baru. Setiap paket memiliki parameter berikut:</p>
      <ul>
        <li><strong>Nama Paket:</strong> Label yang tampil di kiosk, misal <em>"Paket Standard 2 Print"</em> atau <em>"Paket Premium 4 Print"</em>.</li>
        <li><strong>Harga Nominal:</strong> Harga yang harus dibayar pengunjung, contoh: Rp 35.000.</li>
        <li><strong>Jumlah Cetak (Print Count):</strong> Jumlah lembar foto fisik yang dicetak otomatis oleh printer setelah sesi selesai.</li>
        <li><strong>Durasi / Foto Limit:</strong> Batas jumlah pengambilan foto per sesi (misal: 4 jepret untuk strip 2x6).</li>
        <li><strong>Status Aktif:</strong> Toggle untuk mengaktifkan atau menonaktifkan paket. Paket yang dinonaktifkan tidak akan muncul di layar kiosk tanpa perlu dihapus.</li>
      </ul>
      <p>Contoh kombinasi paket yang umum digunakan operator:</p>
      <ul>
        <li><em>Paket Mini (Rp 25.000)</em> — 2 cetak, 3 jepret, bingkai strip 2x6.</li>
        <li><em>Paket Standard (Rp 35.000)</em> — 2 cetak, 4 jepret, pilihan bingkai 4R atau strip.</li>
        <li><em>Paket Premium (Rp 55.000)</em> — 4 cetak, 6 jepret, semua bingkai tersedia.</li>
      </ul>
      <p>Untuk menghapus paket secara permanen, buka detail paket dan klik <strong>Hapus Paket</strong>. Konfirmasi diperlukan. Paket yang sudah digunakan dalam transaksi historis tetap tersimpan di database untuk keperluan laporan — hanya visibilitasnya di kiosk yang hilang.</p>

      <h2>2. Mode Akses & Pembayaran (QRIS, Cash, Voucher, Event)</h2>
      <p>Setiap paket harga dapat dikonfigurasi untuk mendukung satu atau beberapa metode pembayaran. POSKART mendukung 4 mode transaksi yang dapat diaktifkan secara independen per paket:</p>
      <ul>
        <li><strong>QRIS:</strong> Pembayaran otomatis via Duitku QRIS di layar kiosk. Pengunjung scan QR dengan aplikasi dompet digital apapun. Status pembayaran diverifikasi real-time oleh server sebelum sesi dimulai.</li>
        <li><strong>Cash/POS:</strong> Pembayaran tunai melalui kasir atau operator. Kiosk menampilkan kode transaksi unik yang dikonfirmasi secara manual oleh operator dari Web Admin. Berguna untuk booth dengan kasir fisik.</li>
        <li><strong>Voucher:</strong> Pengunjung memasukkan kode voucher promo unik yang digenerate dari menu <strong>Vouchers</strong> di Web Admin. Kode divalidasi server sebelum sesi dimulai. Satu kode hanya bisa digunakan satu kali.</li>
        <li><strong>Event Access:</strong> Pengaksesan langsung tanpa pembayaran, khusus untuk paket event. Pengunjung hanya perlu memilih paket dan langsung masuk sesi tanpa melewati halaman pembayaran.</li>
      </ul>

      <h2>3. Sesi Complimentary / Event Access</h2>
      <p>Untuk penggunaan photobooth pada acara khusus (misal <em>Wedding, Event Corporate, atau Pameran</em>) di mana pengunjung tidak perlu membayar per sesi, aktifkan mode <strong>Event Access Token</strong> pada paket harga yang dituju.</p>
      <p>Cara mengaktifkan Event Access:</p>
      <ol>
        <li>Buka paket harga yang ingin dijadikan paket event, klik <strong>Edit</strong>.</li>
        <li>Pada bagian <em>Metode Pembayaran</em>, centang opsi <strong>Event Access</strong>.</li>
        <li>Simpan perubahan. Paket ini sekarang dapat dipilih pengunjung tanpa melewati halaman pembayaran.</li>
        <li>Opsional: nonaktifkan semua metode pembayaran lain (QRIS, Cash, Voucher) pada paket ini agar pengunjung tidak bisa membayar secara normal.</li>
      </ol>
      <p>Transaksi berstatus <em>Event</em> tidak akan dihitung sebagai pendapatan dalam laporan keuangan. Transaksi ini tetap tercatat di tabel <code>sessions</code> dengan <code>payment_type: "event"</code> untuk keperluan audit jumlah pengunjung event.</p>
    `,
  },

  "admin-gallery": {
    id: "admin-gallery",
    slug: "admin-gallery",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Manajemen Galeri & Delivery Foto",
    description: "Melihat riwayat sesi foto, kirim foto via email, pengunduhan softfile, dan aturan retensi media.",
    updatedAt: "2026-07-31",
    headings: [
      { id: "view-session", title: "1. Navigasi Sesi & Foto" },
      { id: "aktifkan-email", title: "2. Mengaktifkan Fitur Email Delivery" },
      { id: "email-button-builder", title: "3. Menambahkan Tombol Email di Builder" },
      { id: "delivery-email", title: "4. Alur Pengiriman Softfile via Email" },
      { id: "shared-gallery", title: "5. Shared Public Gallery" },
      { id: "retensi-media", title: "6. Retensi Storage & Housekeeping Cron" },
    ],
    titleEn: "Gallery Management & Photo Delivery",
    descriptionEn: "Viewing photo session history, sending photos via email, downloading soft files, and media retention rules.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "view-session", title: "1. Session & Photo Navigation" },
      { id: "aktifkan-email", title: "2. Enabling Email Delivery" },
      { id: "email-button-builder", title: "3. Adding an Email Button in Builder" },
      { id: "delivery-email", title: "4. Soft File Delivery via Email" },
      { id: "shared-gallery", title: "5. Shared Public Gallery" },
      { id: "retensi-media", title: "6. Storage Retention & Housekeeping Cron" },
    ],
    contentEn: `
      <h2>1. Session & Photo Navigation</h2>
      <p>The <strong>Gallery</strong> menu displays all photo sessions completed across all booth devices. Admins can view original photos, framed photos, Live Photos (GIF/MP4), and perform re-prints if a print failure occurs on-site.</p>
      <p>Each session entry shows: session time, device name, selected package, payment method, print status, and email delivery status. Admins can filter the gallery by date range, device, or delivery status.</p>

      <h2>2. Enabling Email Delivery</h2>
      <p>The photo email delivery feature is <strong>not active by default</strong>. You must enable it in the kiosk settings before the email button can appear on the kiosk screen.</p>
      <p>How to enable:</p>
      <ol>
        <li>Go to the <strong>Devices</strong> menu in Web Admin, then click the kiosk device name you want to configure.</li>
        <li>Go to the <strong>Settings</strong> tab in the device detail.</li>
        <li>Find the <em>Delivery Options</em> section, then enable the <strong>Enable Email Delivery</strong> toggle.</li>
        <li>Save the settings. The kiosk will receive the new configuration on the next sync (or manual restart).</li>
      </ol>
      <p>Make sure the <strong>Resend API Key</strong> integration is configured in the <strong>Settings &rarr; Integrations</strong> menu at the organization level. Without a valid API key, emails will not be sent even if the toggle is active. You can test the Resend connection with the <strong>Send Test Email</strong> button on the Integrations page.</p>

      <h2>3. Adding an Email Button in Builder</h2>
      <p>After email delivery is enabled in the kiosk settings, you need to add an email button element to the result screen in <strong>Theme Builder</strong> so guests can trigger email delivery directly from the kiosk.</p>
      <p>Steps to add a button assignment:</p>
      <ol>
        <li>Go to the <strong>Templates &rarr; Theme Builder</strong> menu, select the theme used by that device.</li>
        <li>Navigate to the <em>Result Screen</em> (the screen that appears after the photo session ends and photos are processed).</li>
        <li>In the <strong>Elements</strong> panel on the left, click <strong>+ Add Button</strong>.</li>
        <li>In the button settings, open the <strong>Action / Assignment</strong> dropdown and select <code>send_email</code>.</li>
        <li>Set the button label (e.g. <em>"Send to Email"</em>), position, size, and color according to the theme design.</li>
        <li>Save and publish the theme. The kiosk will show that button on the result screen.</li>
      </ol>
      <p>When a guest taps this button, the kiosk will show a virtual keyboard for entering an email address. After confirmation, the delivery request is forwarded to the server and the email is sent via Resend within seconds.</p>

      <h2>4. Soft File Delivery via Email</h2>
      <p>Email delivery can be triggered from two places:</p>
      <ul>
        <li><strong>Directly from the kiosk</strong> — the guest taps the email button on the result screen (requires a button assignment in Builder, see above).</li>
        <li><strong>From the public gallery page</strong> — the guest opens the <code>/g/[token]</code> page and enters their email in the form provided.</li>
        <li><strong>From Web Admin</strong> — the admin opens the session detail in the Gallery menu and clicks <strong>Resend Email</strong> to resend to the same or a different address.</li>
      </ul>
      <p>The sent email contains: full-resolution framed photo (JPG), Live Photo in GIF/MP4 format (if Live Photo is active), and a link to the session's public gallery page. All files are attached directly to the email, not just download links.</p>

      <h2>5. Shared Public Gallery</h2>
      <p>Each session has a unique, secure public page token <code>/g/[token]</code>. Guests can share this page on social media to download full-resolution photos without needing to log in.</p>
      <p>Admins can disable public gallery access per session from the Gallery menu (e.g. if a guest requests deletion), or disable this feature globally in <strong>Settings &rarr; Privacy</strong>.</p>

      <h2>6. Storage Retention & Housekeeping Cron</h2>
      <p>To save cloud storage (Cloudinary / ImageKit / R2), POSKART runs an automatic cleanup system (Cron Cleanup) according to the retention policy set in the <strong>Settings &rarr; Storage</strong> menu.</p>
      <p>Available retention options:</p>
      <ul>
        <li><strong>7 days</strong> — suitable for temporary event booths.</li>
        <li><strong>30 days</strong> — default for regular commercial booths.</li>
        <li><strong>90 days</strong> — for businesses that need a longer session history.</li>
        <li><strong>Never deleted</strong> — available on the Enterprise plan, storage is limited by the plan quota.</li>
      </ul>
      <p>Files that have passed their retention period will be permanently deleted from cloud storage. Make sure guests have downloaded their photos before the deadline. Deletion notifications are not sent to guests automatically.</p>
    `,
    content: `
      <h2>1. Navigasi Sesi & Foto</h2>
      <p>Menu <strong>Gallery</strong> menampilkan seluruh sesi foto yang berhasil dilakukan di semua perangkat booth. Admin dapat melihat hasil foto asli, foto berbingkai (framed photo), Live Photo (GIF/MP4), serta melakukan cetak ulang (re-print) jika terjadi gangguan cetak pada lokasi.</p>
      <p>Setiap entri sesi menampilkan: waktu sesi, nama perangkat, paket yang dipilih, metode pembayaran, status cetak, dan status pengiriman email. Admin dapat memfilter galeri berdasarkan rentang tanggal, perangkat, atau status pengiriman.</p>

      <h2>2. Mengaktifkan Fitur Email Delivery</h2>
      <p>Fitur pengiriman foto via email <strong>tidak aktif secara default</strong>. Anda harus mengaktifkannya terlebih dahulu di pengaturan kiosk sebelum tombol email bisa muncul di layar kiosk.</p>
      <p>Cara mengaktifkan:</p>
      <ol>
        <li>Buka menu <strong>Devices</strong> di Web Admin, lalu klik nama perangkat kiosk yang ingin dikonfigurasi.</li>
        <li>Masuk ke tab <strong>Settings</strong> pada detail perangkat.</li>
        <li>Temukan bagian <em>Delivery Options</em>, lalu aktifkan toggle <strong>Enable Email Delivery</strong>.</li>
        <li>Simpan pengaturan. Kiosk akan menerima konfigurasi baru pada sinkronisasi berikutnya (atau restart manual).</li>
      </ol>
      <p>Pastikan integrasi <strong>Resend API Key</strong> sudah dikonfigurasi di menu <strong>Settings &rarr; Integrations</strong> pada level organisasi. Tanpa API key yang valid, email tidak akan terkirim meski toggle sudah aktif. Anda dapat menguji koneksi Resend dengan tombol <strong>Send Test Email</strong> di halaman Integrations.</p>

      <h2>3. Menambahkan Tombol Email di Builder</h2>
      <p>Setelah email delivery diaktifkan di pengaturan kiosk, Anda perlu menambahkan elemen tombol email pada layar hasil foto di <strong>Theme Builder</strong> agar pengunjung dapat memicu pengiriman email langsung dari kiosk.</p>
      <p>Langkah penambahan button assignment:</p>
      <ol>
        <li>Buka menu <strong>Templates &rarr; Theme Builder</strong>, pilih tema yang digunakan perangkat tersebut.</li>
        <li>Navigasi ke layar <em>Result Screen</em> (layar yang muncul setelah sesi foto selesai dan foto diproses).</li>
        <li>Pada panel <strong>Elements</strong> di sebelah kiri, klik <strong>+ Add Button</strong>.</li>
        <li>Pada pengaturan button, buka dropdown <strong>Action / Assignment</strong> dan pilih <code>send_email</code>.</li>
        <li>Atur label tombol (contoh: <em>"Kirim ke Email"</em>), posisi, ukuran, dan warna sesuai desain tema.</li>
        <li>Simpan dan publikasikan tema. Kiosk akan menampilkan tombol tersebut pada layar hasil foto.</li>
      </ol>
      <p>Saat pengunjung menekan tombol ini, kiosk akan menampilkan keyboard virtual untuk memasukkan alamat email. Setelah dikonfirmasi, permintaan pengiriman diteruskan ke server dan email dikirim via Resend dalam hitungan detik.</p>

      <h2>4. Alur Pengiriman Softfile via Email</h2>
      <p>Pengiriman email bisa dipicu dari dua tempat:</p>
      <ul>
        <li><strong>Dari kiosk langsung</strong> — pengunjung menekan tombol email di layar hasil foto (butuh button assignment di Builder, lihat bagian di atas).</li>
        <li><strong>Dari halaman public gallery</strong> — pengunjung membuka halaman <code>/g/[token]</code> dan memasukkan email di form yang tersedia.</li>
        <li><strong>Dari Web Admin</strong> — admin membuka detail sesi di menu Gallery dan mengklik <strong>Resend Email</strong> untuk mengirim ulang ke email yang sama atau ke alamat berbeda.</li>
      </ul>
      <p>Email yang dikirim berisi: foto berbingkai beresolusi penuh (JPG), Live Photo dalam format GIF/MP4 (jika fitur Live Photo aktif), dan tautan ke halaman public gallery sesi tersebut. Semua file dilampirkan langsung ke email, bukan hanya tautan unduhan.</p>

      <h2>5. Shared Public Gallery</h2>
      <p>Setiap sesi memiliki token unik halaman publik <code>/g/[token]</code> yang aman. Pengunjung dapat membagikan halaman ini ke sosial media untuk mengunduh foto beresolusi penuh tanpa perlu login.</p>
      <p>Admin dapat menonaktifkan akses public gallery per sesi dari menu Gallery (misalnya jika ada permintaan penghapusan dari pengunjung), atau menonaktifkan fitur ini secara global di <strong>Settings &rarr; Privacy</strong>.</p>

      <h2>6. Retensi Storage & Housekeeping Cron</h2>
      <p>Untuk menghemat penyimpanan cloud (Cloudinary / ImageKit / R2), POSKART menjalankan sistem pembersihan otomatis (Cron Cleanup) sesuai retention policy yang ditentukan di menu <strong>Settings &rarr; Storage</strong>.</p>
      <p>Opsi retention yang tersedia:</p>
      <ul>
        <li><strong>7 hari</strong> — cocok untuk booth event sementara.</li>
        <li><strong>30 hari</strong> — default untuk booth komersial rutin.</li>
        <li><strong>90 hari</strong> — untuk bisnis yang perlu riwayat sesi lebih panjang.</li>
        <li><strong>Tidak pernah dihapus</strong> — tersedia pada paket Enterprise, storage dibatasi oleh kuota paket.</li>
      </ul>
      <p>File yang sudah melewati masa retensi akan dihapus permanen dari storage cloud. Pastikan pengunjung sudah mengunduh foto sebelum batas waktu habis. Notifikasi penghapusan tidak dikirim ke pengunjung secara otomatis.</p>
    `,
  },

  "admin-money-payout": {
    id: "admin-money-payout",
    slug: "admin-money-payout",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Keuangan & Pencairan Payout",
    description: "Pengelolaan dompet transaksi, pencatatan kas keluar/masuk, dan pengajuan penarikan dana.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "money-manager", title: "1. Money Manager & Buku Kas" },
      { id: "payout-account", title: "2. Pengaturan Rekening Bank Payout" },
      { id: "proses-withdrawal", title: "3. Alur Pencairan Dana (Withdrawal)" },
    ],
    titleEn: "Finance & Payout Withdrawal",
    descriptionEn: "Managing the transaction wallet, recording cash inflows/outflows, and submitting withdrawal requests.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "money-manager", title: "1. Money Manager & Cash Ledger" },
      { id: "payout-account", title: "2. Payout Bank Account Settings" },
      { id: "proses-withdrawal", title: "3. Withdrawal Process" },
    ],
    contentEn: `
      <h2>1. Money Manager & Cash Ledger</h2>
      <p>The <strong>Money</strong> feature lets you monitor all incoming cash flows from QRIS kiosk payments and manual POS cashier transactions, as well as record operational expenses (such as photo paper purchases, ink, or venue rental) with category tags.</p>

      <h2>2. Payout Bank Account Settings</h2>
      <p>Before withdrawing QRIS transaction revenue, register your business bank account or e-wallet in the <strong>Withdraw &rarr; Payout Accounts</strong> menu. The account will be verified by the Super Admin system for security purposes.</p>

      <h2>3. Withdrawal Process</h2>
      <ol>
        <li>Open the <strong>Withdraw</strong> menu, click <strong>Withdraw Funds</strong>.</li>
        <li>Select the balance amount you wish to withdraw and choose the destination account.</li>
        <li>The system will create a <em>Payout Invoice</em>. Funds will be transferred to your account according to the daily payout schedule.</li>
      </ol>
    `,
    content: `
      <h2>1. Money Manager & Buku Kas</h2>
      <p>Fitur <strong>Money</strong> memungkinkan Anda memantau seluruh arus kas masuk dari QRIS kiosk, kasir POS manual, serta mencatat pengeluaran operasional (seperti pembelian kertas foto, tinta, atau sewa tempat) lengkap dengan tag kategori.</p>

      <h2>2. Pengaturan Rekening Bank Payout</h2>
      <p>Sebelum melakukan pencairan dana hasil transaksi QRIS, daftarkan rekening bank atau e-wallet usaha Anda di menu <strong>Withdraw &rarr; Payout Accounts</strong>. Rekening akan diverifikasi oleh sistem Super Admin demi keamanan.</p>

      <h2>3. Alur Pencairan Dana (Withdrawal)</h2>
      <ol>
        <li>Buka menu <strong>Withdraw</strong>, klik <strong>Tarik Dana</strong>.</li>
        <li>Pilih nominal saldo yang ingin ditarik dan pilih rekening tujuan.</li>
        <li>Sistem akan membuat <em>Payout Invoice</em>. Dana akan dikirimkan ke rekening Anda sesuai jadwal pencairan harian.</li>
      </ol>
    `,
  },

  "kiosk-installation": {
    id: "kiosk-installation",
    slug: "kiosk-installation",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "Instalasi Aplikasi Kiosk",
    description: "Spesifikasi perangkat keras yang direkomendasikan dan panduan memasang aplikasi Flutter Kiosk.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "spesifikasi-hardware", title: "1. Rekomendasi Spesifikasi Hardware" },
      { id: "instalasi-apk", title: "2. Instalasi Aplikasi Android (APK)" },
      { id: "kiosk-mode-setting", title: "3. Mengaktifkan Lock Task / Kiosk Mode" },
    ],
    titleEn: "Kiosk App Installation",
    descriptionEn: "Recommended hardware specifications and guide to installing the Flutter Kiosk app.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "spesifikasi-hardware", title: "1. Recommended Hardware Specifications" },
      { id: "instalasi-apk", title: "2. Android App Installation (APK)" },
      { id: "kiosk-mode-setting", title: "3. Enabling Lock Task / Kiosk Mode" },
    ],
    contentEn: `
      <h2>1. Recommended Hardware Specifications</h2>
      <p>The POSKART Kiosk app is optimized for high performance on touchscreen tablets:</p>
      <ul>
        <li><strong>OS:</strong> Android 10.0+ or iOS 14+</li>
        <li><strong>Screen:</strong> Minimum 10.1 inches, Resolution 1280x800 or 1920x1080 (Landscape orientation)</li>
        <li><strong>RAM / CPU:</strong> Minimum 4GB RAM, Octa-Core Processor (e.g. Redmi Pad, Samsung Galaxy Tab A8/A9)</li>
        <li><strong>Camera:</strong> HD front camera or USB Webcam / DSLR via OTG.</li>
      </ul>

      <h2>2. Android App Installation (APK)</h2>
      <p>Download the release file <code>POSKART-Kiosk-vX.X.X.apk</code> from the admin dashboard in the <strong>Devices &rarr; Download App</strong> menu. Copy the APK file to the tablet and run the installation.</p>

      <h2>3. Enabling Lock Task / Kiosk Mode</h2>
      <p>To prevent guests from exiting the photobooth app to the tablet's main menu, enable the <strong>App Pinning / Lock Task Mode</strong> feature in your Android tablet settings.</p>
    `,
    content: `
      <h2>1. Rekomendasi Spesifikasi Hardware</h2>
      <p>Aplikasi POSKART Kiosk dioptimalkan untuk performa tinggi pada tablet layar sentuh:</p>
      <ul>
        <li><strong>OS:</strong> Android 10.0+ atau iOS 14+</li>
        <li><strong>Layar:</strong> Minimal 10.1 inci, Resolusi 1280x800 atau 1920x1080 (Landscape orientation)</li>
        <li><strong>RAM / CPU:</strong> Minimal 4GB RAM, Octa-Core Processor (contoh: Redmi Pad, Samsung Galaxy Tab A8/A9)</li>
        <li><strong>Kamera:</strong> Kamera depan HD atau Kamera USB Webcam / DSLR via OTG.</li>
      </ul>

      <h2>2. Instalasi Aplikasi Android (APK)</h2>
      <p>Unduh file rilis <code>POSKART-Kiosk-vX.X.X.apk</code> dari dashboard admin pada menu <strong>Devices &rarr; Download App</strong>. Salin file APK ke tablet dan jalankan instalasi.</p>

      <h2>3. Mengaktifkan Lock Task / Kiosk Mode</h2>
      <p>Agar pengunjung tidak dapat keluar dari aplikasi photobooth ke menu utama tablet, aktifkan fitur <strong>App Pinning / Lock Task Mode</strong> di pengaturan Android tablet Anda.</p>
    `,
  },

  "kiosk-pairing": {
    id: "kiosk-pairing",
    slug: "kiosk-pairing",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "Pairing Perangkat & Bearer Token",
    description: "Menghubungkan aplikasi Flutter Kiosk ke server POSKART menggunakan Bearer Token API.",
    badge: "Wajib Dipahami",
    updatedAt: "2026-07-30",
    headings: [
      { id: "konsep-pairing", title: "1. Konsep Autentikasi Kiosk" },
      { id: "proses-pairing", title: "2. Langkah-Langkah Pairing" },
      { id: "penanganan-token", title: "3. Perpanjangan & Invalidate Token" },
    ],
    titleEn: "Device Pairing & Bearer Token",
    descriptionEn: "Connecting the Flutter Kiosk app to the POSKART server using a Bearer Token API.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "konsep-pairing", title: "1. Kiosk Authentication Concept" },
      { id: "proses-pairing", title: "2. Pairing Steps" },
      { id: "penanganan-token", title: "3. Token Renewal & Invalidation" },
    ],
    contentEn: `
      <h2>1. Kiosk Authentication Concept</h2>
      <p>Unlike Web Admin access which is based on Supabase cookie sessions, the Flutter Kiosk app communicates using a long-lived <strong>Bearer Access Token</strong> bound to a specific <code>device_id</code> and <code>organization_id</code>.</p>

      <h2>2. Pairing Steps</h2>
      <ol>
        <li>Open Web Admin on your computer, navigate to the <strong>Devices</strong> menu and select the target booth.</li>
        <li>Click the <strong>Generate Pair Token</strong> button. A 6-digit token code / pairing QR will appear on screen.</li>
        <li>In the Flutter Kiosk app on the initial splash screen, enter that pairing code.</li>
        <li>The Kiosk app will receive the <code>access_token</code> and store it encrypted in the tablet's local storage.</li>
      </ol>

      <h2>3. Token Renewal & Invalidation</h2>
      <p>If a kiosk tablet is moved to another branch or deactivated, the Admin can click <strong>Revoke Token</strong> in Web Admin to instantly cut off that tablet's access.</p>
    `,
    content: `
      <h2>1. Konsep Autentikasi Kiosk</h2>
      <p>Berbeda dengan akses Web Admin yang berbasis cookie session Supabase, aplikasi Flutter Kiosk berkomunikasi menggunakan <strong>Bearer Access Token</strong> berdurasi panjang yang terikat pada satu <code>device_id</code> dan <code>organization_id</code> spesifik.</p>

      <h2>2. Langkah-Langkah Pairing</h2>
      <ol>
        <li>Buka Web Admin di komputer, navigasi ke menu <strong>Devices</strong> dan pilih booth target.</li>
        <li>Klik tombol <strong>Generate Pair Token</strong>. Kode token 6 digit / QR pairing akan tampil di layar.</li>
        <li>Di aplikasi Flutter Kiosk pada layar splash awal, masukkan kode pairing tersebut.</li>
        <li>Aplikasi Kiosk akan menerima <code>access_token</code> dan menyimpan token secara tersandi di local storage tablet.</li>
      </ol>

      <h2>3. Perpanjangan & Invalidate Token</h2>
      <p>Jika tablet kiosk dipindahkan ke cabang lain atau dinonaktifkan, Admin dapat mengklik <strong>Revoke Token</strong> di Web Admin untuk memutus akses tablet tersebut secara instan.</p>
    `,
  },

  "kiosk-printer-tuning": {
    id: "kiosk-printer-tuning",
    slug: "kiosk-printer-tuning",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "Kalibrasi & Tuning Printer",
    description: "Mengatur parameter pencetakan thermal/photo printer, kontras, kegelapan, dan batas aman margin cetak.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "printer-support", title: "1. Dukungan Printer" },
      { id: "parameter-tuning", title: "2. Parameter Tuning Printer di Admin" },
      { id: "kalibrasi-potongan", title: "3. Kalibrasi Margin & Bottom Safe Zone" },
    ],
    titleEn: "Printer Calibration & Tuning",
    descriptionEn: "Configuring thermal/photo printer print parameters, contrast, darkness, and safe margin limits.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "printer-support", title: "1. Printer Support" },
      { id: "parameter-tuning", title: "2. Printer Tuning Parameters in Admin" },
      { id: "kalibrasi-potongan", title: "3. Margin & Bottom Safe Zone Calibration" },
    ],
    contentEn: `
      <h2>1. Printer Support</h2>
      <p>POSKART supports direct photo printing via Bluetooth, USB ESC/POS, and Photo Printers (DNP / Citizen / Epson / Canon SELPHY) connected to the kiosk tablet.</p>

      <h2>2. Printer Tuning Parameters in Admin</h2>
      <p>Print color and sharpness settings can be controlled remotely from the <strong>Devices &rarr; Printer Settings</strong> menu:</p>
      <ul>
        <li><strong>Brightness & Contrast:</strong> Brightness adjustment (+/- 20%) so print output on paper is not too dark.</li>
        <li><strong>Dot Density:</strong> Thermal printer print density level (Low, Medium, High).</li>
        <li><strong>Paper Cut Mode:</strong> Auto-cut or manual tear-off.</li>
      </ul>

      <h2>3. Margin & Bottom Safe Zone Calibration</h2>
      <p>Use the <strong>Bottom Safe Zone (px)</strong> option if the bottom portion of printed photos is cut off by the printer's cutter blade. Adding a 20-40px safe zone margin will shift the photo content precisely to the paper's print area.</p>
    `,
    content: `
      <h2>1. Dukungan Printer</h2>
      <p>POSKART mendukung pencetakan foto langsung via Bluetooth, USB ESC/POS, maupun Photo Printer (DNP / Citizen / Epson / Canon SELPHY) yang terhubung ke tablet kiosk.</p>

      <h2>2. Parameter Tuning Printer di Admin</h2>
      <p>Pengaturan warna dan ketajaman hasil cetak dapat dikontrol jarak jauh dari menu <strong>Devices &rarr; Printer Settings</strong>:</p>
      <ul>
        <li><strong>Brightness & Contrast:</strong> Penyesuaian kecerahan (+/- 20%) agar hasil cetak di kertas tidak terlalu gelap.</li>
        <li><strong>Dot Density:</strong> Tingkat kerapatan cetak thermal printer (Low, Medium, High).</li>
        <li><strong>Paper Cut Mode:</strong> Auto-cut atau manual tear-off.</li>
      </ul>

      <h2>3. Kalibrasi Margin & Bottom Safe Zone</h2>
      <p>Gunakan opsi <strong>Bottom Safe Zone (px)</strong> jika hasil cetak foto pada bagian bawah terpotong oleh pisau pemotong printer. Penambahan margin safe zone 20-40px akan menggeser konten foto tepat ke area cetak kertas.</p>
    `,
  },

  "kiosk-pos-qris": {
    id: "kiosk-pos-qris",
    slug: "kiosk-pos-qris",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "Mode Pembayaran QRIS & POS",
    description: "Konfigurasi alur pembayaran QRIS otomatis Duitku dan mode kasir manual POS di lokasi.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "qris-duitku", title: "1. Integrasi Dynamic QRIS Duitku" },
      { id: "alur-pembayaran-kiosk", title: "2. Alur Pembayaran di Layar Kiosk" },
      { id: "pos-kasir-manual", title: "3. Transaksi Manual via Web POS" },
    ],
    titleEn: "QRIS & POS Payment Mode",
    descriptionEn: "Configuring the Duitku automatic QRIS payment flow and manual POS cashier mode on-site.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "qris-duitku", title: "1. Duitku Dynamic QRIS Integration" },
      { id: "alur-pembayaran-kiosk", title: "2. Payment Flow on the Kiosk Screen" },
      { id: "pos-kasir-manual", title: "3. Manual Transactions via Web POS" },
    ],
    contentEn: `
      <h2>1. Duitku Dynamic QRIS Integration</h2>
      <p>The POSKART QRIS system uses a <em>Dynamic QRIS</em> model. Unlike Static QRIS which always displays the same code, Dynamic QRIS generates a new code for each transaction with the payment amount already embedded — guests just scan and pay without manually entering an amount.</p>
      <p>Each time a guest selects a package, the server calls the Duitku API to generate a unique QRIS code along with an expiry time (default 5 minutes). Duitku configuration (Merchant Code and API Key) is set in the <strong>Settings &rarr; Payment Gateway</strong> menu in Web Admin.</p>

      <h2>2. Payment Flow on the Kiosk Screen</h2>
      <p>Full flow from package selection to session start:</p>
      <ol>
        <li>Guest touches the <em>Landing Screen</em> and selects a pricing package.</li>
        <li>The kiosk calls <code>POST /api/kiosk/transactions/qris</code> — the server creates a transaction record with <code>pending</code> status and returns the Duitku QRIS URL/string.</li>
        <li>The payment dialog appears in the center of the screen, showing the QR code, amount, and expiry countdown timer.</li>
        <li>The Kiosk app polls payment status every 3 seconds at <code>GET /api/kiosk/transactions/status?id=[txId]</code>.</li>
        <li>The Duitku webhook hits the server when payment succeeds, changing the transaction status to <code>paid</code>.</li>
        <li>The kiosk polling detects <code>paid</code> status and the screen automatically switches to the frame template selection page.</li>
        <li>If the timer expires before payment, the transaction is marked <code>expired</code> and the guest can try again.</li>
      </ol>

      <h2>3. Manual Transactions via Web POS</h2>
      <p>For cash transactions or situations where QRIS is unavailable, the cashier operator can use <strong>Manual POS</strong> mode:</p>
      <ol>
        <li>The operator opens the <strong>POS</strong> menu in Web Admin from a laptop or cashier tablet.</li>
        <li>Select the target kiosk device and the pricing package the guest wants.</li>
        <li>Click <strong>Authorize Session</strong>. The server creates a transaction with <code>cash_authorized</code> status.</li>
        <li>The target kiosk tablet automatically receives a notification and opens the photo session immediately without the guest needing to do anything.</li>
        <li>The operator records the cash receipt manually in the cash ledger or Money Manager module.</li>
      </ol>
      <p>Manual POS mode does not require an active internet connection between the kiosk tablet and the internet at authorization time because the server pushes the session instruction to the kiosk.</p>
    `,
    content: `
      <h2>1. Integrasi Dynamic QRIS Duitku</h2>
      <p>Sistem QRIS POSKART menggunakan model <em>Dynamic QRIS</em>. Berbeda dengan Static QRIS yang selalu menampilkan kode yang sama, Dynamic QRIS menghasilkan kode baru untuk setiap transaksi dengan nominal yang sudah tertanam di dalamnya — pengunjung tinggal scan dan bayar tanpa perlu memasukkan nominal manual.</p>
      <p>Setiap kali pengunjung memilih paket, server akan memanggil Duitku API untuk menghasilkan kode QRIS unik beserta waktu kedaluwarsa (default 5 menit). Konfigurasi Duitku (Merchant Code dan API Key) diatur di menu <strong>Settings &rarr; Payment Gateway</strong> di Web Admin.</p>

      <h2>2. Alur Pembayaran di Layar Kiosk</h2>
      <p>Alur lengkap dari pemilihan paket hingga sesi dimulai:</p>
      <ol>
        <li>Pengunjung menyentuh layar <em>Landing Screen</em> dan memilih paket harga.</li>
        <li>Kiosk memanggil <code>POST /api/kiosk/transactions/qris</code> — server membuat record transaksi dengan status <code>pending</code> dan mengembalikan URL/string QRIS Duitku.</li>
        <li>Dialog pembayaran tampil di tengah layar, menampilkan QR code, nominal, dan countdown timer kedaluwarsa.</li>
        <li>Aplikasi Kiosk melakukan polling status pembayaran setiap 3 detik ke <code>GET /api/kiosk/transactions/status?id=[txId]</code>.</li>
        <li>Webhook Duitku menghantam server saat pembayaran berhasil, mengubah status transaksi menjadi <code>paid</code>.</li>
        <li>Polling kiosk mendeteksi status <code>paid</code> dan layar otomatis berpindah ke halaman pemilihan template bingkai.</li>
        <li>Jika timer habis sebelum pembayaran, transaksi dimarkir <code>expired</code> dan pengunjung dapat mencoba ulang.</li>
      </ol>

      <h2>3. Transaksi Manual via Web POS</h2>
      <p>Untuk transaksi tunai (Cash) atau situasi di mana QRIS tidak tersedia, operator kasir dapat menggunakan mode <strong>POS Manual</strong>:</p>
      <ol>
        <li>Operator membuka menu <strong>POS</strong> di Web Admin dari laptop atau tablet kasir.</li>
        <li>Pilih perangkat kiosk target dan paket harga yang diinginkan pengunjung.</li>
        <li>Klik <strong>Authorize Session</strong>. Server membuat transaksi berstatus <code>cash_authorized</code>.</li>
        <li>Tablet kiosk yang dituju otomatis menerima notifikasi dan langsung membuka sesi foto tanpa perlu pengunjung melakukan apapun.</li>
        <li>Operator mencatat penerimaan uang tunai secara manual di buku kas atau modul Money Manager.</li>
      </ol>
      <p>Mode POS manual tidak memerlukan koneksi antara tablet kiosk dan internet secara aktif pada saat otorisasi karena server yang mendorong (push) instruksi sesi ke kiosk.</p>
    `,
  },

  "builder-frame-builder": {
    id: "builder-frame-builder",
    slug: "builder-frame-builder",
    category: "builder",
    categoryTitle: "Visual Builder",
    title: "Frame Template Builder (1-5 Foto)",
    description: "Panduan membuat dan mengedit bingkai foto interaktif dengan jumlah slot foto bervariasi.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "tampilan-builder", title: "1. Antarmuka Frame Builder" },
      { id: "slot-foto", title: "2. Menata Slot Foto (Photo Slots 1-5)" },
      { id: "elemen-dekorasi", title: "3. Menambahkan Stiker & Overlay PNG" },
      { id: "skema-layout", title: "4. Struktur Schema Layout JSON" },
    ],
    titleEn: "Frame Template Builder (1-5 Photos)",
    descriptionEn: "Guide to creating and editing interactive photo frames with varying numbers of photo slots.",
    categoryTitleEn: "Visual Builder",
    headingsEn: [
      { id: "tampilan-builder", title: "1. Frame Builder Interface" },
      { id: "slot-foto", title: "2. Arranging Photo Slots (1-5 Photos)" },
      { id: "elemen-dekorasi", title: "3. Adding Stickers & PNG Overlays" },
      { id: "skema-layout", title: "4. Layout Schema JSON Structure" },
    ],
    contentEn: `
      <h2>1. Frame Builder Interface</h2>
      <p>Open the <strong>Templates &rarr; Launch Builder</strong> menu. The builder provides a drag-and-drop visual canvas with grid snapping, zoom, layer ordering, and live preview features.</p>

      <h2>2. Arranging Photo Slots (1-5 Photos)</h2>
      <p>You can set the number of photos in a single frame from 1 to 5. Each photo slot's X, Y, Width, Height, and Rotation Angle can be individually configured.</p>

      <h2>3. Adding Stickers & PNG Overlays</h2>
      <p>Upload a transparent image file (PNG 300 DPI) as a front frame overlay. The frame image will neatly cover the area around the photos.</p>

      <h2>4. Layout Schema JSON Structure</h2>
      <p>Every frame design is stored in the standard <code>LayoutSchema</code> JSON format understood by both the Web renderer and the Flutter Kiosk app. You can export or edit this JSON directly via the <strong>Edit Raw JSON</strong> button in the builder for advanced customization.</p>
      <p>Example frame schema with 2 photo slots (2x6 inch strip format):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"id": "tmpl_strip_2slot_v1",<br/>
&nbsp;&nbsp;"name": "Strip 2 Foto - Classic",<br/>
&nbsp;&nbsp;"canvas": { "width": 600, "height": 1800, "dpi": 300 },<br/>
&nbsp;&nbsp;"slots": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "slot_1",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 30, "y": 40,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 540, "height": 820,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rotation": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"border_radius": 8<br/>
&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "slot_2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 30, "y": 940,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 540, "height": 820,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rotation": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"border_radius": 8<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"overlays": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "frame_overlay",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "image",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"src": "https://cdn.poskart.id/frames/strip_classic_overlay.png",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 0, "y": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 600, "height": 1800,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"z_index": 10<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"background": { "color": "#ffffff" }<br/>
}
      </div>
      <p>The <code>canvas</code> field defines the final output size in pixels at the specified print DPI. The <code>slots</code> field is an array of positions where guest photos will be placed. The <code>overlays</code> field contains transparent image layers covering the slots — typically decorative frames. A higher <code>z_index</code> value means that layer is on top of others.</p>
    `,
    content: `
      <h2>1. Antarmuka Frame Builder</h2>
      <p>Buka menu <strong>Templates &rarr; Launch Builder</strong>. Builder menyediakan kanvas visual berbasis drag-and-drop dengan fitur grid snapping, zoom, layer ordering, dan live preview.</p>

      <h2>2. Menata Slot Foto (Photo Slots 1-5)</h2>
      <p>Anda dapat menentukan jumlah foto dalam satu bingkai mulai dari 1 hingga 5 foto. Setiap slot foto dapat diatur posisi X, Y, Lebar, Tinggi, dan Sudut Rotasinya.</p>

      <h2>3. Menambahkan Stiker & Overlay PNG</h2>
      <p>Unggah file gambar transparan (PNG 300 DPI) sebagai bingkai depan (frame overlay). Gambar bingkai akan menutupi area sekeliling foto secara rapi.</p>

      <h2>4. Struktur Schema Layout JSON</h2>
      <p>Setiap desain bingkai disimpan dalam format standar <code>LayoutSchema</code> JSON yang dipahami oleh renderer Web dan aplikasi Flutter Kiosk. Anda dapat mengekspor atau mengedit JSON ini secara langsung melalui tombol <strong>Edit Raw JSON</strong> di builder untuk kustomisasi tingkat lanjut.</p>
      <p>Contoh skema bingkai dengan 2 slot foto (format strip 2x6 inci):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"id": "tmpl_strip_2slot_v1",<br/>
&nbsp;&nbsp;"name": "Strip 2 Foto - Classic",<br/>
&nbsp;&nbsp;"canvas": { "width": 600, "height": 1800, "dpi": 300 },<br/>
&nbsp;&nbsp;"slots": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "slot_1",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 30, "y": 40,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 540, "height": 820,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rotation": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"border_radius": 8<br/>
&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "slot_2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 30, "y": 940,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 540, "height": 820,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rotation": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"border_radius": 8<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"overlays": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "frame_overlay",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "image",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"src": "https://cdn.poskart.id/frames/strip_classic_overlay.png",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"x": 0, "y": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"width": 600, "height": 1800,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"z_index": 10<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"background": { "color": "#ffffff" }<br/>
}
      </div>
      <p>Field <code>canvas</code> mendefinisikan ukuran output akhir dalam piksel pada DPI cetak yang ditentukan. Field <code>slots</code> adalah array posisi tempat foto pengunjung akan ditempatkan. Field <code>overlays</code> adalah layer gambar transparan yang menutupi slot — biasanya berisi bingkai dekoratif. Nilai <code>z_index</code> yang lebih tinggi berarti layer tersebut berada di atas layer lainnya.</p>
    `,
  },

  "builder-theme-builder": {
    id: "builder-theme-builder",
    slug: "builder-theme-builder",
    category: "builder",
    categoryTitle: "Visual Builder",
    title: "Theme Builder & Kustomisasi Layar",
    description: "Mengubah tata letak, background, warna tombol, dan teks instruksi pada layar aplikasi kiosk.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "halaman-theme", title: "1. Halaman-Halaman Layar Kiosk" },
      { id: "semantic-roles", title: "2. Semantic Roles & Binding Tombol" },
      { id: "preset-theme", title: "3. Menggunakan & Menyimpan Preset Theme" },
    ],
    titleEn: "Theme Builder & Screen Customization",
    descriptionEn: "Changing layouts, backgrounds, button colors, and instruction text on the kiosk app screens.",
    categoryTitleEn: "Visual Builder",
    headingsEn: [
      { id: "halaman-theme", title: "1. Kiosk Screen Pages" },
      { id: "semantic-roles", title: "2. Semantic Roles & Button Binding" },
      { id: "preset-theme", title: "3. Using & Saving Theme Presets" },
    ],
    contentEn: `
      <h2>1. Kiosk Screen Pages</h2>
      <p>Theme Builder lets you design 5 main screens of the Flutter Kiosk app:</p>
      <ul>
        <li><code>landing</code>: The initial touch screen to start.</li>
        <li><code>template</code>: Custom frame template selector screen.</li>
        <li><code>camera</code>: Live camera preview screen with shutter button.</li>
        <li><code>preview</code>: Photo result viewer screen for printing and QR download.</li>
        <li><code>thanks</code>: End-of-session thank you screen.</li>
      </ul>

      <h2>2. Semantic Roles & Button Binding</h2>
      <p>Every button inside Theme Builder must have a <strong>semantic_role</strong> so the Flutter app can recognize its function. Examples:</p>
      <ul>
        <li><code>landing.start_session</code> &rarr; Opens the payment dialog.</li>
        <li><code>camera.take_photo</code> &rarr; Triggers the camera countdown timer.</li>
        <li><code>preview.print</code> &rarr; Triggers a print job to the printer.</li>
      </ul>

      <h2>3. Using & Saving Theme Presets</h2>
      <p>After customizing a theme (e.g. a Halloween / Retro Paper theme), you can save it as a <strong>Theme Preset</strong> and apply it to specific booths with a single click.</p>
    `,
    content: `
      <h2>1. Halaman-Halaman Layar Kiosk</h2>
      <p>Theme Builder memungkinkan Anda merancang 5 layar utama aplikasi Flutter Kiosk:</p>
      <ul>
        <li><code>landing</code>: Layar awal sentuh untuk memulai.</li>
        <li><code>template</code>: Layar kustom pemilih template bingkai.</li>
        <li><code>camera</code>: Layar penampil live preview kamera dan tombol jepret.</li>
        <li><code>preview</code>: Layar penampil hasil foto, cetak, dan QR download.</li>
        <li><code>thanks</code>: Layar ucapan terima kasih akhir sesi.</li>
      </ul>

      <h2>2. Semantic Roles & Binding Tombol</h2>
      <p>Setiap tombol di dalam Theme Builder harus memiliki <strong>semantic_role</strong> agar aplikasi Flutter mengenali fungsinya. Contoh:</p>
      <ul>
        <li><code>landing.start_session</code> &rarr; Membuka dialog pembayaran.</li>
        <li><code>camera.take_photo</code> &rarr; Memicu timer hitung mundur kamera.</li>
        <li><code>preview.print</code> &rarr; Memicu tugas pencetakan ke printer.</li>
      </ul>

      <h2>3. Menggunakan & Menyimpan Preset Theme</h2>
      <p>Setelah mengkustomisasi tema (misal tema Halloween / Retro Paper), Anda dapat menyimpannya sebagai <strong>Theme Preset</strong> dan menerapkannya ke booth tertentu dengan satu kali klik.</p>
    `,
  },

  "api-kiosk-endpoints": {
    id: "api-kiosk-endpoints",
    slug: "api-kiosk-endpoints",
    category: "api",
    categoryTitle: "API & Integrasi Developer",
    title: "Kiosk API Reference (/api/kiosk/*)",
    description: "Spesifikasi REST API untuk komunikasi aplikasi Kiosk dengan Web Server POSKART.",
    badge: "API Specs",
    updatedAt: "2026-07-30",
    headings: [
      { id: "autentikasi-headers", title: "1. Autentikasi & Header Required" },
      { id: "endpoint-status", title: "2. GET /api/kiosk/device/status" },
      { id: "endpoint-config", title: "3. GET /api/kiosk/config" },
      { id: "endpoint-transaction", title: "4. POST /api/kiosk/transactions/qris" },
      { id: "endpoint-upload", title: "5. POST /api/kiosk/gallery/upload" },
    ],
    titleEn: "Kiosk API Reference (/api/kiosk/*)",
    descriptionEn: "REST API specification for Kiosk app communication with the POSKART web server.",
    categoryTitleEn: "API & Developer Integrations",
    headingsEn: [
      { id: "autentikasi-headers", title: "1. Authentication & Required Headers" },
      { id: "endpoint-status", title: "2. GET /api/kiosk/device/status" },
      { id: "endpoint-config", title: "3. GET /api/kiosk/config" },
      { id: "endpoint-transaction", title: "4. POST /api/kiosk/transactions/qris" },
      { id: "endpoint-upload", title: "5. POST /api/kiosk/gallery/upload" },
    ],
    contentEn: `
      <h2>1. Authentication & Required Headers</h2>
      <p>All Kiosk endpoints under <code>/api/kiosk/*</code> require an <code>Authorization</code> header containing the device Bearer Token:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2">
        Authorization: Bearer psk_live_dev_8f93a1...<br/>
        Content-Type: application/json
      </div>

      <h2>2. GET /api/kiosk/device/status</h2>
      <p>Checks device health status, battery level, printer status, and app version. This endpoint also acts as a heartbeat — each call updates the device's <code>last_seen_at</code> timestamp on the server.</p>
      <p>Example success response (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"device_id": "dev_abc123",<br/>
&nbsp;&nbsp;"status": "idle",<br/>
&nbsp;&nbsp;"app_version": "2.4.1",<br/>
&nbsp;&nbsp;"printer": { "connected": true, "model": "DNP DS620", "paper_remaining": 68 },<br/>
&nbsp;&nbsp;"storage_free_mb": 4210,<br/>
&nbsp;&nbsp;"pending_uploads": 0<br/>
}
      </div>

      <h2>3. GET /api/kiosk/config</h2>
      <p>Fetches the entire active configuration manifest: list of frame templates, enabled pricing packages, and the latest theme layout JSON. The kiosk calls this endpoint on startup and after recovering from offline.</p>
      <p>Example success response (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"config_version": "20260730_142300",<br/>
&nbsp;&nbsp;"packages": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{ "id": "pkg_01", "name": "Paket Standard", "price": 35000, "print_count": 2 }<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"templates": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{ "id": "tmpl_strip_2slot_v1", "name": "Strip 2 Foto", "thumbnail_url": "..." }<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"theme": { "landing": { ... }, "camera": { ... } }<br/>
}
      </div>

      <h2>4. POST /api/kiosk/transactions/qris</h2>
      <p>Creates a new transaction and triggers Duitku QRIS issuance. The server creates a transaction record with <code>pending</code> status and returns the QRIS string for display on the kiosk screen.</p>
      <p>Example request body:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"package_id": "pkg_01",<br/>
&nbsp;&nbsp;"payment_method": "qris"<br/>
}
      </div>
      <p>Example success response (<code>201 Created</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"transaction_id": "txn_xyz789",<br/>
&nbsp;&nbsp;"qris_string": "00020101021226...",<br/>
&nbsp;&nbsp;"qris_image_url": "https://cdn.poskart.id/qris/txn_xyz789.png",<br/>
&nbsp;&nbsp;"amount": 35000,<br/>
&nbsp;&nbsp;"expires_at": "2026-07-30T14:28:00Z"<br/>
}
      </div>

      <h2>5. POST /api/kiosk/gallery/upload</h2>
      <p>Uploads photo and video files from the session on the tablet to POSKART cloud storage. Request uses <code>multipart/form-data</code> format. Upload can be done per file or as a batch for one session at once.</p>
      <p>Example form-data fields:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
session_id: "sess_abc456"<br/>
transaction_id: "txn_xyz789"<br/>
files[]: [binary photo.jpg]<br/>
files[]: [binary framed_photo.jpg]<br/>
files[]: [binary live_clip.mp4]
      </div>
      <p>Example success response (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"session_id": "sess_abc456",<br/>
&nbsp;&nbsp;"gallery_token": "g_pub_k3j9x",<br/>
&nbsp;&nbsp;"public_url": "https://app.poskart.id/g/g_pub_k3j9x",<br/>
&nbsp;&nbsp;"uploaded_files": 3<br/>
}
      </div>
    `,
    content: `
      <h2>1. Autentikasi & Header Required</h2>
      <p>Seluruh endpoint Kiosk di bawah <code>/api/kiosk/*</code> mewajibkan header <code>Authorization</code> berisi Bearer Token perangkat:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2">
        Authorization: Bearer psk_live_dev_8f93a1...<br/>
        Content-Type: application/json
      </div>

      <h2>2. GET /api/kiosk/device/status</h2>
      <p>Mengecek status kesehatan perangkat, level baterai, status printer, dan versi aplikasi. Endpoint ini juga berfungsi sebagai heartbeat — setiap panggilan memperbarui timestamp <code>last_seen_at</code> perangkat di server.</p>
      <p>Contoh response sukses (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"device_id": "dev_abc123",<br/>
&nbsp;&nbsp;"status": "idle",<br/>
&nbsp;&nbsp;"app_version": "2.4.1",<br/>
&nbsp;&nbsp;"printer": { "connected": true, "model": "DNP DS620", "paper_remaining": 68 },<br/>
&nbsp;&nbsp;"storage_free_mb": 4210,<br/>
&nbsp;&nbsp;"pending_uploads": 0<br/>
}
      </div>

      <h2>3. GET /api/kiosk/config</h2>
      <p>Mengambil seluruh manifes konfigurasi aktif: daftar template bingkai, paket harga yang diaktifkan, dan theme layout JSON terbaru. Kiosk memanggil endpoint ini saat startup dan setelah koneksi pulih dari offline.</p>
      <p>Contoh response sukses (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"config_version": "20260730_142300",<br/>
&nbsp;&nbsp;"packages": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{ "id": "pkg_01", "name": "Paket Standard", "price": 35000, "print_count": 2 }<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"templates": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{ "id": "tmpl_strip_2slot_v1", "name": "Strip 2 Foto", "thumbnail_url": "..." }<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;"theme": { "landing": { ... }, "camera": { ... } }<br/>
}
      </div>

      <h2>4. POST /api/kiosk/transactions/qris</h2>
      <p>Membuat transaksi baru dan memicu penerbitan QRIS Duitku. Server membuat record transaksi berstatus <code>pending</code> dan mengembalikan string QRIS untuk ditampilkan di layar kiosk.</p>
      <p>Contoh request body:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"package_id": "pkg_01",<br/>
&nbsp;&nbsp;"payment_method": "qris"<br/>
}
      </div>
      <p>Contoh response sukses (<code>201 Created</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"transaction_id": "txn_xyz789",<br/>
&nbsp;&nbsp;"qris_string": "00020101021226...",<br/>
&nbsp;&nbsp;"qris_image_url": "https://cdn.poskart.id/qris/txn_xyz789.png",<br/>
&nbsp;&nbsp;"amount": 35000,<br/>
&nbsp;&nbsp;"expires_at": "2026-07-30T14:28:00Z"<br/>
}
      </div>

      <h2>5. POST /api/kiosk/gallery/upload</h2>
      <p>Mengunggah file foto dan video hasil sesi dari tablet ke cloud storage POSKART. Request menggunakan format <code>multipart/form-data</code>. Upload bisa dilakukan per file atau sebagai batch satu sesi sekaligus.</p>
      <p>Contoh field form-data:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
session_id: "sess_abc456"<br/>
transaction_id: "txn_xyz789"<br/>
files[]: [binary photo.jpg]<br/>
files[]: [binary framed_photo.jpg]<br/>
files[]: [binary live_clip.mp4]
      </div>
      <p>Contoh response sukses (<code>200 OK</code>):</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
{<br/>
&nbsp;&nbsp;"session_id": "sess_abc456",<br/>
&nbsp;&nbsp;"gallery_token": "g_pub_k3j9x",<br/>
&nbsp;&nbsp;"public_url": "https://app.poskart.id/g/g_pub_k3j9x",<br/>
&nbsp;&nbsp;"uploaded_files": 3<br/>
}
      </div>
    `,
  },

  "api-payment-webhooks": {
    id: "api-payment-webhooks",
    slug: "api-payment-webhooks",
    category: "api",
    categoryTitle: "API & Integrasi Developer",
    title: "Webhook Pembayaran Duitku/Midtrans",
    description: "Dokumentasi penanganan callback notifikasi pembayaran otomatis dari payment gateway.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "endpoint-webhook", title: "1. Endpoint URL Webhook" },
      { id: "verifikasi-signature", title: "2. Verifikasi Keamanan Signature" },
      { id: "idempotensi-ledger", title: "3. Idempotensi & Ledger Entry" },
    ],
    titleEn: "Duitku/Midtrans Payment Webhook",
    descriptionEn: "Documentation for handling automatic payment notification callbacks from payment gateways.",
    categoryTitleEn: "API & Developer Integrations",
    headingsEn: [
      { id: "endpoint-webhook", title: "1. Webhook Endpoint URL" },
      { id: "verifikasi-signature", title: "2. Signature Security Verification" },
      { id: "idempotensi-ledger", title: "3. Idempotency & Ledger Entry" },
    ],
    contentEn: `
      <h2>1. Webhook Endpoint URL</h2>
      <p>POSKART provides separate endpoints for handling payment gateway callbacks:</p>
      <ul>
        <li><strong>Duitku QRIS / Subscription Callback:</strong> <code>POST /api/payments/duitku/callback</code></li>
        <li><strong>Midtrans Notification Route:</strong> <code>POST /api/payments/midtrans/notification</code></li>
      </ul>

      <h2>2. Signature Security Verification</h2>
      <p>Every incoming webhook request must be verified before processing. Both Duitku and Midtrans use a signature scheme combining fields from the payload and the merchant secret key.</p>
      <p>Duitku signature verification:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode Duitku validation<br/>
const rawSignature = merchantCode + amount + merchantOrderId + apiKey;<br/>
const expectedSignature = md5(rawSignature).toLowerCase();<br/>
if (payload.signature !== expectedSignature) &#123;<br/>
&nbsp;&nbsp;return res.status(403).json(&#123; error: "Invalid signature" &#125;);<br/>
&#125;
      </div>
      <p>Midtrans signature verification:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode Midtrans validation<br/>
const rawSignature = orderId + statusCode + grossAmount + serverKey;<br/>
const expectedSignature = sha512(rawSignature);<br/>
if (payload.signature_key !== expectedSignature) &#123;<br/>
&nbsp;&nbsp;return res.status(403).json(&#123; error: "Invalid signature" &#125;);<br/>
&#125;
      </div>
      <p>If the signature is invalid, the endpoint immediately returns <code>403 Forbidden</code> and does not process the payload further. This event is recorded in the <code>webhook_security_logs</code> table for audit trail.</p>

      <h2>3. Idempotency & Ledger Entry</h2>
      <p>Payment gateways sometimes send repeated notifications for the same transaction (automatic retry when the server responds slowly). POSKART handles this with an <em>idempotent write</em> pattern.</p>
      <p>Before recording a new entry, the server checks whether <code>merchant_order_id</code> already exists in the <code>payment_ledger_entries</code> table:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode idempotency check<br/>
const existing = await db.ledger.findUnique(&#123;<br/>
&nbsp;&nbsp;where: &#123; merchant_order_id: payload.merchantOrderId &#125;<br/>
&#125;);<br/>
if (existing) &#123;<br/>
&nbsp;&nbsp;// Already processed — return 200 without re-inserting<br/>
&nbsp;&nbsp;return res.status(200).json(&#123; status: "already_processed" &#125;);<br/>
&#125;<br/>
// Continue to insert new entry<br/>
await db.ledger.create(&#123; data: &#123; ...entryData &#125; &#125;);
      </div>
      <p>The <code>payment_ledger_entries</code> table is <em>append-only immutable</em> — there are no UPDATE or DELETE operations on this table. Corrections are made by adding a reversal entry rather than modifying existing records, ensuring the financial audit trail is always complete and tamper-proof.</p>
    `,
    content: `
      <h2>1. Endpoint URL Webhook</h2>
      <p>POSKART menyediakan endpoint terpisah untuk penanganan callback payment gateway:</p>
      <ul>
        <li><strong>Duitku QRIS / Subscription Callback:</strong> <code>POST /api/payments/duitku/callback</code></li>
        <li><strong>Midtrans Notification Route:</strong> <code>POST /api/payments/midtrans/notification</code></li>
      </ul>

      <h2>2. Verifikasi Keamanan Signature</h2>
      <p>Setiap payload webhook wajib divalidasi sebelum diproses untuk mencegah request palsu dari pihak ketiga. POSKART memverifikasi signature menggunakan kombinasi field dari payload dan secret key merchant.</p>
      <p>Cara verifikasi signature Duitku:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode validasi Duitku<br/>
const rawSignature = merchantCode + amount + merchantOrderId + apiKey;<br/>
const expectedSignature = md5(rawSignature).toLowerCase();<br/>
if (payload.signature !== expectedSignature) &#123;<br/>
&nbsp;&nbsp;return res.status(403).json(&#123; error: "Invalid signature" &#125;);<br/>
&#125;
      </div>
      <p>Cara verifikasi signature Midtrans:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode validasi Midtrans<br/>
const rawSignature = orderId + statusCode + grossAmount + serverKey;<br/>
const expectedSignature = sha512(rawSignature);<br/>
if (payload.signature_key !== expectedSignature) &#123;<br/>
&nbsp;&nbsp;return res.status(403).json(&#123; error: "Invalid signature" &#125;);<br/>
&#125;
      </div>
      <p>Jika signature tidak valid, endpoint langsung mengembalikan <code>403 Forbidden</code> dan tidak memproses payload lebih lanjut. Event ini dicatat di tabel <code>webhook_security_logs</code> untuk audit trail.</p>

      <h2>3. Idempotensi & Ledger Entry</h2>
      <p>Payment gateway kadang mengirim notifikasi berulang untuk transaksi yang sama (retry otomatis saat server lambat merespons). POSKART menangani ini dengan pola <em>idempotent write</em>.</p>
      <p>Sebelum mencatat entry baru, server mengecek apakah <code>merchant_order_id</code> sudah ada di tabel <code>payment_ledger_entries</code>:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2 overflow-x-auto">
// Pseudocode idempotency check<br/>
const existing = await db.ledger.findUnique(&#123;<br/>
&nbsp;&nbsp;where: &#123; merchant_order_id: payload.merchantOrderId &#125;<br/>
&#125;);<br/>
if (existing) &#123;<br/>
&nbsp;&nbsp;// Sudah diproses sebelumnya — kembalikan 200 tanpa insert ulang<br/>
&nbsp;&nbsp;return res.status(200).json(&#123; status: "already_processed" &#125;);<br/>
&#125;<br/>
// Lanjut insert entry baru<br/>
await db.ledger.create(&#123; data: &#123; ...entryData &#125; &#125;);
      </div>
      <p>Tabel <code>payment_ledger_entries</code> bersifat <em>append-only immutable</em> — tidak ada operasi UPDATE atau DELETE pada tabel ini. Koreksi dilakukan dengan menambahkan entry pembanding (reversal entry) bukan memodifikasi record yang sudah ada, memastikan audit trail keuangan selalu lengkap dan tidak dapat dimanipulasi.</p>
    `,
  },

  "api-live-photo-worker": {
    id: "api-live-photo-worker",
    slug: "api-live-photo-worker",
    category: "api",
    categoryTitle: "API & Integrasi Developer",
    title: "Live Photo FFmpeg Worker Pipeline",
    description: "Arsitektur rendering video animasi Live Photo menggunakan Railway background worker dan FFmpeg.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "alur-live-photo", title: "1. Alur Kerja Live Photo" },
      { id: "worker-service", title: "2. Railway Worker Service" },
      { id: "output-storage", title: "3. Output & Public Gallery Refresh" },
    ],
    titleEn: "Live Photo FFmpeg Worker Pipeline",
    descriptionEn: "Architecture for rendering Live Photo video animations using a Railway background worker and FFmpeg.",
    categoryTitleEn: "API & Developer Integrations",
    headingsEn: [
      { id: "alur-live-photo", title: "1. Live Photo Workflow" },
      { id: "worker-service", title: "2. Railway Worker Service" },
      { id: "output-storage", title: "3. Output & Public Gallery Refresh" },
    ],
    contentEn: `
      <h2>1. Live Photo Workflow</h2>
      <p>The Flutter Kiosk app records a short video clip (3-5 seconds) when the shutter button is pressed. This clip is uploaded to the server and processed asynchronously into a framed GIF/MP4 animation.</p>

      <h2>2. Railway Worker Service</h2>
      <p>The background service written in <code>workers/live-photo-worker.mjs</code> runs on the Railway platform. The worker listens for new jobs via Supabase RPC <code>live_photo_render_jobs</code>, processes them with <strong>FFmpeg</strong>, and uploads the results to Cloudinary.</p>

      <h2>3. Output & Public Gallery Refresh</h2>
      <p>After the render job is complete, the worker updates the gallery record and triggers an automatic refresh notification for the public gallery page.</p>
    `,
    content: `
      <h2>1. Alur Kerja Live Photo</h2>
      <p>Aplikasi Flutter Kiosk merekam klip video pendek (3-5 detik) saat tombol shutter ditekan. Klip ini diunggah ke server dan diproses secara asynchronous menjadi animasi GIF/MP4 berbingkai.</p>

      <h2>2. Railway Worker Service</h2>
      <p>Service latar belakang yang ditulis pada <code>workers/live-photo-worker.mjs</code> berjalan di platform Railway. Worker mendengarkan pekerjaan baru via RPC Supabase <code>live_photo_render_jobs</code>, memprosesnya dengan <strong>FFmpeg</strong>, dan mengunggah hasilnya ke Cloudinary.</p>

      <h2>3. Output & Public Gallery Refresh</h2>
      <p>Setelah pekerjaan render selesai, worker memperbarui record galeri dan memicu notifikasi pembaharuan halaman public gallery secara otomatis.</p>
    `,
  },

  "faq-troubleshooting": {
    id: "faq-troubleshooting",
    slug: "faq-troubleshooting",
    category: "faq",
    categoryTitle: "Troubleshooting & FAQ",
    title: "Solusi Kendala Hardware & Transaksi",
    description: "Panduan penyelesaian masalah umum pada printer, konektivitas kiosk, dan pembayaran QRIS.",
    badge: "Solusi Masalah",
    updatedAt: "2026-07-30",
    headings: [
      { id: "masalah-printer", title: "1. Printer Tidak Mencetak / Kertas Macet" },
      { id: "masalah-qris", title: "2. Transaksi QRIS Sudah Dibayar tapi Layar Kiosk Tidak Berubah" },
      { id: "masalah-kamera", title: "3. Tampilan Preview Kamera Blackscreen" },
    ],
    titleEn: "Hardware & Transaction Troubleshooting",
    descriptionEn: "Solutions to common issues with printers, kiosk connectivity, and QRIS payments.",
    categoryTitleEn: "Troubleshooting & FAQ",
    headingsEn: [
      { id: "masalah-printer", title: "1. Printer Not Printing / Paper Jam" },
      { id: "masalah-qris", title: "2. QRIS Transaction Paid but Kiosk Screen Not Updating" },
      { id: "masalah-kamera", title: "3. Camera Preview Showing Blackscreen" },
    ],
    contentEn: `
      <h2>1. Printer Not Printing / Paper Jam</h2>
      <p><strong>Solution:</strong></p>
      <ol>
        <li>Check the OTG cable / Bluetooth connection from the printer to the tablet.</li>
        <li>Open Web Admin in the <strong>Devices</strong> menu and check the printer status log. If there is an <em>"Out of paper"</em> or <em>"Cover open"</em> error, reload the photo paper.</li>
        <li>Use the <strong>Manual Print Job</strong> button in the Web Admin gallery to reprint the session at no extra charge.</li>
      </ol>

      <h2>2. QRIS Transaction Paid but Kiosk Screen Not Updating</h2>
      <p><strong>Solution:</strong></p>
      <p>If the tablet's network was briefly disconnected, click the <strong>"Check Payment Status"</strong> button on the kiosk payment dialog, or open the <strong>Transactions</strong> menu in Web Admin to manually verify the Duitku status.</p>

      <h2>3. Camera Preview Showing Blackscreen</h2>
      <p><strong>Solution:</strong></p>
      <p>Ensure that camera access permission (Camera Permission) has been granted to the POSKART Kiosk app in your Android/iOS tablet settings.</p>
    `,
    content: `
      <h2>1. Printer Tidak Mencetak / Kertas Macet</h2>
      <p><strong>Solusi:</strong></p>
      <ol>
        <li>Cek koneksi kabel OTG / Bluetooth printer ke tablet.</li>
        <li>Buka Web Admin di menu <strong>Devices</strong>, periksa log status printer. Jika terdapat error <em>"Out of paper"</em> atau <em>"Cover open"</em>, isi ulang kertas foto.</li>
        <li>Gunakan tombol <strong>Manual Print Job</strong> di galeri Web Admin untuk mencetak ulang sesi tanpa biaya tambahan.</li>
      </ol>

      <h2>2. Transaksi QRIS Sudah Dibayar tapi Layar Kiosk Tidak Berubah</h2>
      <p><strong>Solusi:</strong></p>
      <p>Jika jaringan tablet sempat terputus, klik tombol <strong>"Cek Status Pembayaran"</strong> pada dialog pembayaran kiosk atau buka menu <strong>Transactions</strong> di Web Admin untuk melakukan verifikasi manual status Duitku.</p>

      <h2>3. Tampilan Preview Kamera Blackscreen</h2>
      <p><strong>Solusi:</strong></p>
      <p>Pastikan izin akses kamera (Camera Permission) sudah diberikan ke aplikasi POSKART Kiosk di pengaturan Android/iOS tablet Anda.</p>
    `,
  },

  "kiosk-user-flow": {
    id: "kiosk-user-flow",
    slug: "kiosk-user-flow",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "User Journey Lengkap di Kiosk",
    description: "Alur lengkap pengunjung dari layar idle hingga foto tercetak dan dikirim ke email.",
    badge: "Baru",
    updatedAt: "2026-07-30",
    headings: [
      { id: "layar-idle", title: "1. Layar Idle & Pemilihan Paket" },
      { id: "alur-pembayaran", title: "2. Alur Pembayaran & Konfirmasi" },
      { id: "sesi-foto", title: "3. Sesi Foto & Pemilihan Bingkai" },
      { id: "cetak-delivery", title: "4. Proses Cetak & Delivery Softfile" },
    ],
    titleEn: "Complete User Journey on Kiosk",
    descriptionEn: "Full guest journey from the idle screen through to printed photo and email delivery.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "layar-idle", title: "1. Idle Screen & Package Selection" },
      { id: "alur-pembayaran", title: "2. Payment Flow & Confirmation" },
      { id: "sesi-foto", title: "3. Photo Session & Frame Selection" },
      { id: "cetak-delivery", title: "4. Print Process & Soft File Delivery" },
    ],
    contentEn: `
      <h2>1. Idle Screen & Package Selection</h2>
      <p>When there is no active session, the kiosk displays the <strong>idle screen</strong> — an animation or promotional video that can be customized via Theme Builder in Web Admin. Guests start a session by touching the screen or pressing the physical "Start" button.</p>
      <p>After the idle screen is touched, the app displays the list of <strong>active pricing packages</strong> configured by the admin. Each package shows its name, price, print count, and available payment methods. The guest selects one package to continue.</p>
      <ul>
        <li><strong>Package display:</strong> Name, price, print count, and payment method icons (QRIS/Cash/Voucher/Event).</li>
        <li><strong>Disabled packages:</strong> Packages disabled by the admin will not appear on the selection screen.</li>
        <li><strong>Navigation:</strong> Guests can return to the idle screen by pressing the "Back" button or letting the screen idle automatically after timeout.</li>
      </ul>

      <h2>2. Payment Flow & Confirmation</h2>
      <p>After selecting a package, the kiosk directs the guest to the payment screen based on the available methods for that package.</p>
      <ul>
        <li><strong>QRIS:</strong> The system calls <code>POST /api/kiosk/transactions/qris</code> to create a new transaction and display the Duitku QR code on screen. Guests scan using any QRIS-compatible digital wallet app. The kiosk polls payment status automatically every few seconds.</li>
        <li><strong>Cash/POS:</strong> The kiosk displays a unique transaction code given to the cashier/operator. The operator inputs the code in Web Admin to manually confirm payment.</li>
        <li><strong>Voucher:</strong> The guest enters the voucher code using the on-screen keyboard. The system validates the code in real-time.</li>
        <li><strong>Event Access:</strong> No payment required. The guest is directed straight to the photo session after confirmation.</li>
      </ul>
      <p>After payment is confirmed, the kiosk shows a brief success animation and automatically starts the photo session within seconds.</p>

      <h2>3. Photo Session & Frame Selection</h2>
      <p>The photo session is the core of the kiosk user experience. The app activates the camera and displays a countdown before each photo capture.</p>
      <ol>
        <li><strong>Camera preview:</strong> The screen shows a full-resolution live camera preview with optional pose guides.</li>
        <li><strong>Countdown:</strong> A countdown timer (usually 3-5 seconds) gives the guest time to pose.</li>
        <li><strong>Photo capture:</strong> The camera captures the photo automatically when the countdown ends, or the guest can press the shutter button early.</li>
        <li><strong>Retake:</strong> After each capture, the guest can preview it and choose to retake if unsatisfied, within the limit configured by the admin.</li>
        <li><strong>Frame selection:</strong> Once all photo slots are filled, the guest selects from the available frame templates. The system applies the frame in real-time for an instant preview.</li>
      </ol>
      <p>During the photo session, the app also records a short video clip to generate an animated <em>Live Photo</em> that will be processed by the FFmpeg Worker.</p>

      <h2>4. Print Process & Soft File Delivery</h2>
      <p>After the guest confirms their frame choice, the system processes the final output in parallel:</p>
      <ul>
        <li><strong>Physical print:</strong> The framed photo file is sent to the DNP/Canon/Mitsubishi printer connected via USB or local network. Print count matches the selected package. The screen shows a print progress bar.</li>
        <li><strong>Cloud upload:</strong> Photos and session video are uploaded to POSKART cloud storage via <code>POST /api/kiosk/gallery/upload</code>. Upload runs in the background without blocking the print process.</li>
        <li><strong>Email delivery:</strong> If the guest entered an email address at the kiosk, the system sends an email notification containing a link to their personal public gallery page.</li>
        <li><strong>Gallery QR:</strong> The kiosk displays a QR code pointing to the <code>/g/[token]</code> page where guests can download full-resolution soft files at any time.</li>
      </ul>
    `,
    content: `
      <h2>1. Layar Idle & Pemilihan Paket</h2>
      <p>Saat tidak ada sesi aktif, kiosk menampilkan <strong>layar idle</strong> berupa animasi atau video promosi yang dapat dikustomisasi melalui Theme Builder di Web Admin. Pengunjung mengawali sesi dengan menyentuh layar atau menekan tombol fisik "Mulai".</p>
      <p>Setelah layar idle disentuh, aplikasi menampilkan daftar <strong>paket harga aktif</strong> yang dikonfigurasi admin. Setiap paket menampilkan nama, harga, jumlah cetak, dan metode pembayaran yang tersedia. Pengunjung memilih satu paket untuk melanjutkan.</p>
      <ul>
        <li><strong>Tampilan paket:</strong> Nama, harga, jumlah print, dan ikon metode bayar (QRIS/Cash/Voucher/Event).</li>
        <li><strong>Paket dinonaktifkan:</strong> Paket yang dimatikan admin tidak akan muncul di layar pemilihan.</li>
        <li><strong>Navigasi:</strong> Pengunjung dapat kembali ke layar idle dengan menekan tombol "Kembali" atau membiarkan layar idle otomatis setelah timeout.</li>
      </ul>

      <h2>2. Alur Pembayaran & Konfirmasi</h2>
      <p>Setelah paket dipilih, kiosk mengarahkan pengunjung ke layar pembayaran sesuai metode yang tersedia pada paket tersebut.</p>
      <ul>
        <li><strong>QRIS:</strong> Sistem memanggil <code>POST /api/kiosk/transactions/qris</code> untuk membuat transaksi baru dan menampilkan QR code Duitku di layar. Pengunjung melakukan scan menggunakan aplikasi dompet digital manapun yang mendukung QRIS. Kiosk melakukan polling status pembayaran secara otomatis setiap beberapa detik.</li>
        <li><strong>Cash/POS:</strong> Kiosk menampilkan kode transaksi unik yang diberikan ke kasir/operator. Operator menginput kode tersebut di Web Admin untuk mengkonfirmasi pembayaran secara manual.</li>
        <li><strong>Voucher:</strong> Pengunjung memasukkan kode voucher menggunakan keyboard di layar. Sistem memvalidasi kode secara real-time.</li>
        <li><strong>Event Access:</strong> Tidak memerlukan pembayaran. Pengunjung langsung diarahkan ke sesi foto setelah konfirmasi.</li>
      </ul>
      <p>Setelah pembayaran terkonfirmasi, kiosk menampilkan animasi sukses singkat dan secara otomatis memulai sesi foto dalam hitungan detik.</p>

      <h2>3. Sesi Foto & Pemilihan Bingkai</h2>
      <p>Sesi foto adalah inti dari pengalaman pengguna di kiosk. Aplikasi mengaktifkan kamera dan menampilkan countdown sebelum setiap pengambilan foto.</p>
      <ol>
        <li><strong>Preview kamera:</strong> Layar menampilkan live preview kamera beresolusi penuh dengan panduan pose opsional.</li>
        <li><strong>Countdown:</strong> Timer hitung mundur (biasanya 3-5 detik) memberikan waktu pengunjung untuk berpose.</li>
        <li><strong>Pengambilan foto:</strong> Kamera mengambil foto secara otomatis saat countdown habis, atau pengunjung dapat menekan tombol shutter lebih awal.</li>
        <li><strong>Ulang foto:</strong> Setelah setiap pengambilan, pengunjung dapat melihat preview dan memilih untuk mengulang (retake) jika tidak puas, sesuai batas yang dikonfigurasi admin.</li>
        <li><strong>Pemilihan bingkai:</strong> Setelah semua slot foto terisi, pengunjung memilih template bingkai (frame) yang tersedia. Sistem menerapkan bingkai secara real-time untuk preview instan.</li>
      </ol>
      <p>Selama sesi foto berlangsung, aplikasi juga merekam klip video pendek untuk menghasilkan <em>Live Photo</em> animasi yang akan diproses oleh FFmpeg Worker.</p>

      <h2>4. Proses Cetak & Delivery Softfile</h2>
      <p>Setelah pengunjung mengkonfirmasi pilihan bingkai, sistem memproses output akhir secara paralel:</p>
      <ul>
        <li><strong>Cetak fisik:</strong> File foto berbingkai dikirim ke printer DNP/Canon/Mitsubishi yang terhubung melalui USB atau jaringan lokal. Jumlah cetak sesuai paket yang dipilih. Layar menampilkan progress bar cetak.</li>
        <li><strong>Upload ke cloud:</strong> Foto dan video sesi diunggah ke cloud storage POSKART melalui <code>POST /api/kiosk/gallery/upload</code>. Upload berjalan di background tanpa memblokir proses cetak.</li>
        <li><strong>Delivery email:</strong> Jika pengunjung memasukkan alamat email di kiosk, sistem mengirimkan notifikasi email berisi link ke halaman public gallery pribadi mereka.</li>
        <li><strong>QR gallery:</strong> Kiosk menampilkan QR code yang mengarah ke halaman <code>/g/[token]</code> tempat pengunjung dapat mengunduh softfile beresolusi penuh kapanpun.</li>
      </ul>
      <p>Setelah cetak selesai dan QR ditampilkan, sesi dinyatakan selesai. Kiosk kembali ke layar idle secara otomatis setelah beberapa detik atau setelah pengunjung menekan tombol "Selesai".</p>
    `,
  },

  "kiosk-offline-mode": {
    id: "kiosk-offline-mode",
    slug: "kiosk-offline-mode",
    category: "kiosk",
    categoryTitle: "Panduan Flutter Kiosk",
    title: "Offline Mode & Data Sync",
    description: "Cara kerja kiosk saat koneksi internet terputus dan mekanisme sinkronisasi data saat kembali online.",
    badge: "Baru",
    updatedAt: "2026-07-30",
    headings: [
      { id: "kapabilitas-offline", title: "1. Kapabilitas Operasional Offline" },
      { id: "penyimpanan-lokal", title: "2. Penyimpanan Data Lokal (SQLite)" },
      { id: "sync-mekanisme", title: "3. Mekanisme Sinkronisasi Saat Online" },
      { id: "konfigurasi-offline", title: "4. Konfigurasi & Batas Operasi Offline" },
    ],
    titleEn: "Offline Mode & Data Sync",
    descriptionEn: "How the kiosk works when the internet connection is lost and the data sync mechanism when back online.",
    categoryTitleEn: "Flutter Kiosk Guide",
    headingsEn: [
      { id: "kapabilitas-offline", title: "1. Offline Operational Capabilities" },
      { id: "penyimpanan-lokal", title: "2. Local Data Storage (SQLite)" },
      { id: "sync-mekanisme", title: "3. Sync Mechanism When Back Online" },
      { id: "konfigurasi-offline", title: "4. Offline Configuration & Operation Limits" },
    ],
    contentEn: `
      <h2>1. Offline Operational Capabilities</h2>
      <p>POSKART Kiosk is designed to keep operating in a limited capacity even when the internet connection is lost. This is important to ensure the photobooth business does not stop entirely due to temporary network disruptions.</p>
      <p>Features that <strong>continue to work</strong> offline:</p>
      <ul>
        <li><strong>Photo session:</strong> Photo capture, preview, and frame selection continue to work normally using cached configuration.</li>
        <li><strong>Physical print:</strong> The local printer can still print because printer communication is local (USB/LAN).</li>
        <li><strong>Cash/Voucher payment:</strong> Cash and previously validated voucher transactions can be recorded locally.</li>
        <li><strong>Frame templates:</strong> All frame and theme assets already downloaded are stored in the device's local cache.</li>
      </ul>
      <p>Features <strong>not available</strong> offline:</p>
      <ul>
        <li><strong>QRIS payment:</strong> Requires a connection to call the Duitku API and verify payment status.</li>
        <li><strong>Cloud soft file upload:</strong> Files are stored locally and will be uploaded when the connection is restored.</li>
        <li><strong>Email delivery:</strong> Deferred until a connection is available.</li>
        <li><strong>Latest configuration sync:</strong> Changes to pricing packages or new templates from Web Admin will not be visible yet.</li>
      </ul>

      <h2>2. Local Data Storage (SQLite)</h2>
      <p>The Flutter Kiosk app uses a <strong>local SQLite database</strong> (via the <code>sqflite</code> package) to store session data that has not yet been synced to the server. Every transaction and photo session that occurs offline is recorded with <code>pending_sync</code> status.</p>
      <p>Main tables used for local storage:</p>
      <ul>
        <li><code>local_sessions</code> — stores photo session data (timestamp, package, payment status, local photo file path).</li>
        <li><code>local_transactions</code> — stores payment transaction data not yet confirmed to the server.</li>
        <li><code>upload_queue</code> — queue of photo and video files waiting to be uploaded to cloud storage.</li>
      </ul>
      <p>Photo and video files from sessions are stored in the app's private storage directory on the tablet. This data is safe from system deletion as long as the tablet storage is not full.</p>

      <h2>3. Sync Mechanism When Back Online</h2>
      <p>The kiosk app monitors network connectivity continuously. When an internet connection is detected again, the sync process runs automatically in the background without disrupting any active sessions.</p>
      <p>The sync process order:</p>
      <ol>
        <li><strong>Config sync:</strong> The app calls <code>GET /api/kiosk/config</code> to get the latest configuration, pricing packages, and frame templates.</li>
        <li><strong>Transaction confirmation:</strong> Pending cash/voucher transactions are confirmed to the server.</li>
        <li><strong>File upload:</strong> Files in the <code>upload_queue</code> are uploaded one by one to cloud storage via <code>POST /api/kiosk/gallery/upload</code>.</li>
        <li><strong>Email delivery:</strong> Deferred email delivery requests are sent once file upload is complete.</li>
      </ol>
      <p>The sync status is visible in real-time on the Web Admin dashboard under <strong>Devices &rarr; Sync Status</strong>. Admins can see how many sessions are waiting to sync and their estimated completion time.</p>

      <h2>4. Offline Configuration & Operation Limits</h2>
      <p>To prevent the kiosk from accumulating too much unsynced data, admins can configure operational limits via <strong>Devices &rarr; Offline Settings</strong>:</p>
      <ul>
        <li><strong>Max offline sessions:</strong> Maximum number of sessions allowed to run offline before the kiosk pauses until the connection is restored. Default: 10 sessions.</li>
        <li><strong>Config cache duration:</strong> How long (in hours) the cached configuration is considered valid. After this duration, the kiosk will warn about potentially outdated data. Default: 24 hours.</li>
        <li><strong>Local storage warning threshold:</strong> The percentage of local storage capacity that triggers a warning to admins via the dashboard. Default: 80%.</li>
      </ul>
      <p>If the offline session limit is reached and the kiosk cannot connect to the server, the screen will display a notification to guests that the system is undergoing maintenance, and to contact the operator for assistance.</p>
    `,
    content: `
      <h2>1. Kapabilitas Operasional Offline</h2>
      <p>POSKART Kiosk dirancang untuk tetap beroperasi secara terbatas meskipun koneksi internet terputus. Ini penting untuk memastikan bisnis photobooth tidak berhenti total karena gangguan jaringan sementara.</p>
      <p>Berikut fitur yang <strong>tetap berfungsi</strong> saat offline:</p>
      <ul>
        <li><strong>Sesi foto:</strong> Pengambilan foto, preview, dan pemilihan bingkai tetap berjalan normal menggunakan konfigurasi yang sudah di-cache.</li>
        <li><strong>Cetak fisik:</strong> Printer lokal tetap bisa mencetak karena komunikasi printer bersifat lokal (USB/LAN).</li>
        <li><strong>Pembayaran Cash/Voucher:</strong> Transaksi cash dan voucher yang sudah divalidasi sebelumnya dapat dicatat secara lokal.</li>
        <li><strong>Template bingkai:</strong> Semua aset bingkai dan theme yang sudah diunduh tersimpan di cache lokal perangkat.</li>
      </ul>
      <p>Fitur yang <strong>tidak tersedia</strong> saat offline:</p>
      <ul>
        <li><strong>Pembayaran QRIS:</strong> Membutuhkan koneksi untuk memanggil Duitku API dan memverifikasi status pembayaran.</li>
        <li><strong>Upload softfile ke cloud:</strong> File disimpan lokal dan akan diunggah saat koneksi pulih.</li>
        <li><strong>Pengiriman email:</strong> Ditunda hingga koneksi tersedia.</li>
        <li><strong>Sinkronisasi konfigurasi terbaru:</strong> Perubahan paket harga atau template baru dari Web Admin belum akan terlihat.</li>
      </ul>

      <h2>2. Penyimpanan Data Lokal (SQLite)</h2>
      <p>Aplikasi Flutter Kiosk menggunakan database <strong>SQLite lokal</strong> (melalui paket <code>sqflite</code>) untuk menyimpan data sesi yang belum tersinkronisasi ke server. Setiap transaksi dan sesi foto yang terjadi saat offline dicatat dengan status <code>pending_sync</code>.</p>
      <p>Tabel utama yang digunakan untuk penyimpanan lokal:</p>
      <ul>
        <li><code>local_sessions</code> — menyimpan data sesi foto (timestamp, paket, status pembayaran, path file foto lokal).</li>
        <li><code>local_transactions</code> — menyimpan data transaksi pembayaran yang belum dikonfirmasi ke server.</li>
        <li><code>upload_queue</code> — antrian file foto dan video yang menunggu upload ke cloud storage.</li>
      </ul>
      <p>File foto dan video hasil sesi disimpan di direktori private storage aplikasi di tablet. Data ini aman dari penghapusan oleh sistem selama storage tablet tidak penuh.</p>

      <h2>3. Mekanisme Sinkronisasi Saat Online</h2>
      <p>Saat koneksi internet pulih, aplikasi mendeteksi perubahan status jaringan secara otomatis dan memulai proses sinkronisasi di background tanpa mengganggu sesi aktif yang sedang berjalan.</p>
      <ol>
        <li><strong>Deteksi koneksi:</strong> Flutter menggunakan paket <code>connectivity_plus</code> untuk memonitor status jaringan secara real-time.</li>
        <li><strong>Upload antrian:</strong> File dalam <code>upload_queue</code> diunggah satu per satu ke cloud storage. Proses upload berjalan dengan mekanisme <em>retry exponential backoff</em> jika terjadi kegagalan parsial.</li>
        <li><strong>Sinkronisasi transaksi:</strong> Data transaksi lokal dikirim ke endpoint <code>POST /api/kiosk/sessions/sync</code> untuk direkonsiliasi dengan database server.</li>
        <li><strong>Update konfigurasi:</strong> Aplikasi mengunduh konfigurasi terbaru dari <code>GET /api/kiosk/config</code> untuk memastikan paket harga dan template bingkai yang aktif selalu terkini.</li>
        <li><strong>Konfirmasi selesai:</strong> Record lokal yang berhasil disinkronisasi diupdate statusnya menjadi <code>synced</code> dan dapat dibersihkan saat housekeeping berikutnya.</li>
      </ol>

      <h2>4. Konfigurasi & Batas Operasi Offline</h2>
      <p>Admin dapat mengatur batas maksimum operasi offline melalui menu <strong>Device Settings</strong> di Web Admin. Pengaturan ini berguna untuk mencegah kiosk beroperasi terlalu lama tanpa sinkronisasi yang dapat menyebabkan ketidaksesuaian data.</p>
      <ul>
        <li><strong>Max offline sessions:</strong> Jumlah sesi maksimum yang diizinkan sebelum kiosk memblokir transaksi baru dan meminta koneksi. Default: 50 sesi.</li>
        <li><strong>Config cache TTL:</strong> Durasi validitas cache konfigurasi lokal. Setelah waktu ini habis, kiosk akan menampilkan peringatan bahwa konfigurasi mungkin sudah usang. Default: 24 jam.</li>
        <li><strong>Local storage warning threshold:</strong> Persentase kapasitas storage lokal yang memicu peringatan ke admin via dashboard. Default: 80%.</li>
      </ul>
      <p>Jika batas offline sessions tercapai dan kiosk tidak dapat terhubung ke server, layar akan menampilkan notifikasi kepada pengunjung bahwa sistem sedang dalam pemeliharaan, dan menghubungi operator untuk bantuan.</p>
    `,
  },

  "admin-devices": {
    id: "admin-devices",
    slug: "admin-devices",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Device Management & Monitoring",
    description: "Pantau status semua perangkat kiosk, kelola koneksi, dan tangani perangkat bermasalah dari dashboard.",
    badge: "Baru",
    updatedAt: "2026-07-30",
    headings: [
      { id: "daftar-perangkat", title: "1. Daftar & Status Perangkat" },
      { id: "detail-perangkat", title: "2. Detail Monitoring Per Perangkat" },
      { id: "kelola-token", title: "3. Manajemen Token & Pairing Ulang" },
      { id: "notifikasi-alert", title: "4. Alert & Notifikasi Perangkat" },
    ],
    titleEn: "Device Management & Monitoring",
    descriptionEn: "Monitor all kiosk device statuses, manage connections, and handle problematic devices from the dashboard.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "daftar-perangkat", title: "1. Device List & Status" },
      { id: "detail-perangkat", title: "2. Per-Device Monitoring Detail" },
      { id: "kelola-token", title: "3. Token Management & Re-Pairing" },
      { id: "notifikasi-alert", title: "4. Device Alerts & Notifications" },
    ],
    contentEn: `
      <h2>1. Device List & Status</h2>
      <p>The <strong>Devices</strong> menu in Web Admin displays all kiosk devices registered under your organization. Each device is shown as a summary card giving a quick status overview.</p>
      <p>Available device status indicators:</p>
      <ul>
        <li><strong>Online</strong> (green) — Device is active and connected to the server within the last 5 minutes.</li>
        <li><strong>Idle</strong> (blue) — Device is online but no active session at the moment.</li>
        <li><strong>In Session</strong> (yellow) — Device is currently serving a guest in an active photo session.</li>
        <li><strong>Offline</strong> (gray) — No heartbeat from the device for more than 5 minutes.</li>
        <li><strong>Error</strong> (red) — Device is reporting an error condition, such as a jammed printer or full storage.</li>
      </ul>
      <p>The device list can be filtered by status, location, or name to make monitoring easier when managing many booths across multiple locations.</p>

      <h2>2. Per-Device Monitoring Detail</h2>
      <p>Click any device to open the detail page showing real-time metrics and operational history. This data is sent by the kiosk each time the app sends a heartbeat to the <code>GET /api/kiosk/device/status</code> endpoint.</p>
      <p>Information available on the detail page:</p>
      <ul>
        <li><strong>Basic info:</strong> Device name, unique ID, location, pairing date, and the installed Flutter app version.</li>
        <li><strong>Hardware status:</strong> Tablet battery level (if relevant), WiFi connection status (SSID and signal strength), and device temperature.</li>
        <li><strong>Printer status:</strong> Connected printer model, today's print count, estimated remaining paper/ribbon, and last printer error status.</li>
        <li><strong>Session statistics:</strong> Today's session count, total transactions, today's revenue from this device, and hourly activity graph.</li>
        <li><strong>Activity log:</strong> History of the last 50 events including session starts, successful/failed payments, printer errors, and sync processes.</li>
      </ul>

      <h2>3. Token Management & Re-Pairing</h2>
      <p>Each kiosk device is identified by a unique <strong>Bearer Token</strong> generated during the initial pairing process. This token is long-lived but can be regenerated if needed.</p>
      <p>Scenarios that require token regeneration:</p>
      <ul>
        <li>The old device is broken and replaced with a new tablet.</li>
        <li>The token is suspected to be leaked or compromised.</li>
        <li>A factory reset was performed on the kiosk tablet.</li>
      </ul>
      <p>To regenerate the token, open the device detail page and click <strong>Regenerate Token</strong>. The old token will be immediately deactivated. Then perform the re-pairing process on the kiosk app using the new token shown on screen. See the <a href="/docs/kiosk-pairing">Device Pairing & Bearer Token</a> article for full re-pairing steps.</p>
      <p>To permanently remove a device from the organization, click <strong>Remove Device</strong>. All historical session data for that device remains stored in the database for financial reporting purposes.</p>

      <h2>4. Device Alerts & Notifications</h2>
      <p>POSKART can send automatic notifications to admins when a device experiences a condition that needs attention. Alert configuration can be done in the <strong>Settings &rarr; Alert Rules</strong> menu.</p>
      <ul>
        <li><strong>Device offline for more than X minutes:</strong> Useful for detecting kiosks that have shut down or lost connection outside operating hours.</li>
        <li><strong>Repeated printer errors:</strong> Alert sent if the printer fails to print more than 3 times consecutively in a single session.</li>
        <li><strong>Local storage nearly full:</strong> Early warning when the tablet's storage capacity approaches the configured limit.</li>
        <li><strong>App version outdated:</strong> Notification if the installed Flutter Kiosk App version is more than 2 versions behind the latest available.</li>
      </ul>
      <p>Notifications are sent via email to all users with the <strong>Admin</strong> or <strong>Owner</strong> role in the organization. Notification channel settings (email/Slack webhook) can be customized per alert rule.</p>
    `,
    content: `
      <h2>1. Daftar & Status Perangkat</h2>
      <p>Menu <strong>Devices</strong> di Web Admin menampilkan seluruh perangkat kiosk yang terdaftar di bawah organisasi Anda. Setiap perangkat ditampilkan dalam kartu ringkas yang memberikan gambaran status secara sekilas.</p>
      <p>Indikator status perangkat yang tersedia:</p>
      <ul>
        <li><strong>Online</strong> (hijau) — Perangkat aktif dan terhubung ke server dalam 5 menit terakhir.</li>
        <li><strong>Idle</strong> (biru) — Perangkat online namun tidak ada sesi aktif saat ini.</li>
        <li><strong>In Session</strong> (kuning) — Perangkat sedang melayani pengunjung dalam sesi foto aktif.</li>
        <li><strong>Offline</strong> (abu-abu) — Tidak ada heartbeat dari perangkat dalam lebih dari 5 menit.</li>
        <li><strong>Error</strong> (merah) — Perangkat melaporkan kondisi error, seperti printer macet atau storage penuh.</li>
      </ul>
      <p>Daftar perangkat dapat difilter berdasarkan status, lokasi, atau nama untuk memudahkan monitoring saat memiliki banyak booth di berbagai lokasi.</p>

      <h2>2. Detail Monitoring Per Perangkat</h2>
      <p>Klik perangkat mana saja untuk membuka halaman detail yang menampilkan metrik real-time dan riwayat operasional. Data ini dikirim oleh kiosk setiap kali aplikasi melakukan heartbeat ke endpoint <code>GET /api/kiosk/device/status</code>.</p>
      <p>Informasi yang tersedia di halaman detail:</p>
      <ul>
        <li><strong>Informasi dasar:</strong> Nama perangkat, ID unik, lokasi, tanggal pairing, dan versi aplikasi Flutter yang terinstall.</li>
        <li><strong>Status hardware:</strong> Level baterai tablet (jika relevan), status koneksi WiFi (SSID dan kekuatan sinyal), dan suhu perangkat.</li>
        <li><strong>Status printer:</strong> Model printer yang terhubung, jumlah cetak hari ini, estimasi sisa kertas/ribbon, dan status error printer terakhir.</li>
        <li><strong>Statistik sesi:</strong> Jumlah sesi hari ini, total transaksi, pendapatan hari ini dari perangkat ini, dan grafik aktivitas per jam.</li>
        <li><strong>Log aktivitas:</strong> Riwayat 50 event terakhir termasuk sesi dimulai, pembayaran berhasil/gagal, error printer, dan proses sinkronisasi.</li>
      </ul>

      <h2>3. Manajemen Token & Pairing Ulang</h2>
      <p>Setiap perangkat kiosk diidentifikasi oleh <strong>Bearer Token</strong> unik yang di-generate saat proses pairing pertama kali. Token ini bersifat long-lived namun dapat diregenerasi jika diperlukan.</p>
      <p>Skenario yang memerlukan regenerasi token:</p>
      <ul>
        <li>Perangkat lama rusak dan diganti dengan tablet baru.</li>
        <li>Token dicurigai bocor atau dikompromikan.</li>
        <li>Reset pabrik dilakukan pada tablet kiosk.</li>
      </ul>
      <p>Untuk meregenerasi token, buka halaman detail perangkat dan klik <strong>Regenerate Token</strong>. Token lama akan langsung dinonaktifkan. Setelah itu, lakukan proses pairing ulang di aplikasi kiosk menggunakan token baru yang ditampilkan di layar. Lihat artikel <a href="/docs/kiosk-pairing">Pairing Perangkat & Bearer Token</a> untuk langkah lengkap pairing ulang.</p>
      <p>Untuk menghapus perangkat dari organisasi secara permanen, klik <strong>Remove Device</strong>. Seluruh data historis sesi perangkat tersebut tetap tersimpan di database untuk keperluan laporan keuangan.</p>

      <h2>4. Alert & Notifikasi Perangkat</h2>
      <p>POSKART dapat mengirimkan notifikasi otomatis ke admin ketika perangkat mengalami kondisi yang perlu perhatian. Konfigurasi alert dapat dilakukan di menu <strong>Settings &rarr; Alert Rules</strong>.</p>
      <ul>
        <li><strong>Perangkat offline lebih dari X menit:</strong> Berguna untuk mendeteksi kiosk yang mati atau kehilangan koneksi di luar jam operasional.</li>
        <li><strong>Error printer berulang:</strong> Alert dikirim jika printer gagal mencetak lebih dari 3 kali berturut-turut dalam satu sesi.</li>
        <li><strong>Storage lokal hampir penuh:</strong> Peringatan dini ketika kapasitas penyimpanan tablet mendekati batas yang dikonfigurasi.</li>
        <li><strong>Versi aplikasi kadaluarsa:</strong> Notifikasi jika versi Flutter Kiosk App yang terinstall sudah lebih dari 2 versi di belakang versi terbaru yang tersedia.</li>
      </ul>
      <p>Notifikasi dikirimkan melalui email ke semua pengguna dengan role <strong>Admin</strong> atau <strong>Owner</strong> di organisasi. Pengaturan channel notifikasi (email/Slack webhook) dapat dikustomisasi per alert rule.</p>
    `,
  },

  "admin-queue": {
    id: "admin-queue",
    slug: "admin-queue",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Sistem Antrean & Queue Display",
    description: "Kelola antrean pengunjung, tampilkan antrian di layar TV/monitor eksternal, dan pantau waktu tunggu.",
    badge: "Baru",
    updatedAt: "2026-07-30",
    headings: [
      { id: "konsep-antrean", title: "1. Konsep Sistem Antrean POSKART" },
      { id: "konfigurasi-antrean", title: "2. Konfigurasi Antrean di Web Admin" },
      { id: "queue-display", title: "3. Queue Display untuk Layar Eksternal" },
      { id: "manajemen-operasional", title: "4. Manajemen Antrean Operasional" },
    ],
    titleEn: "Queue System & Queue Display",
    descriptionEn: "Manage guest queues, display the queue on an external TV/monitor screen, and monitor wait times.",
    categoryTitleEn: "Admin Dashboard Guide",
    headingsEn: [
      { id: "konsep-antrean", title: "1. POSKART Queue System Concept" },
      { id: "konfigurasi-antrean", title: "2. Queue Configuration in Web Admin" },
      { id: "queue-display", title: "3. Queue Display for External Screens" },
      { id: "manajemen-operasional", title: "4. Operational Queue Management" },
    ],
    contentEn: `
      <h2>1. POSKART Queue System Concept</h2>
      <p>The POSKART queue system is designed for high-traffic photobooth locations such as malls, exhibitions, or weddings. It helps organize guest turns fairly and transparently, and reduces crowding around the booth.</p>
      <p>Overall queue workflow:</p>
      <ol>
        <li>Guests take a queue number via the kiosk or from the operator.</li>
        <li>The active queue number is displayed on the external <strong>Queue Display</strong> screen (TV/monitor).</li>
        <li>The operator calls the next queue number when the booth is ready via Web Admin.</li>
        <li>The kiosk is automatically directed to the session for the called queue number.</li>
      </ol>
      <p>The queue system is optional — it can be enabled or disabled per kiosk device according to event needs.</p>

      <h2>2. Queue Configuration in Web Admin</h2>
      <p>To enable the queue system, open the <strong>Queue</strong> menu in the Web Admin sidebar. Configuration is done per device or per device group (e.g. all booths at one event location).</p>
      <p>Available settings:</p>
      <ul>
        <li><strong>Queue mode:</strong> Choose between <em>Manual</em> (operator calls one by one) or <em>Auto</em> (system calls automatically when the kiosk finishes the previous session).</li>
        <li><strong>Queue number prefix:</strong> A letter prefix for ticket numbers, e.g. "A" to generate A001, A002, etc.</li>
        <li><strong>Daily reset:</strong> Queue numbers can be automatically reset every day at a specified time.</li>
        <li><strong>Wait time estimate:</strong> Enable wait time estimate display based on the average duration of previous sessions.</li>
        <li><strong>Queue screen message:</strong> Text or promotional media displayed on the Queue Display when there is no active call.</li>
      </ul>

      <h2>3. Queue Display for External Screens</h2>
      <p>Queue Display is a web page designed to be shown on a TV or external monitor near the booth area. It can be accessed from a browser on any internet-connected device.</p>
      <p>How to access Queue Display:</p>
      <ol>
        <li>Open the <strong>Queue &rarr; Display Settings</strong> menu in Web Admin.</li>
        <li>Copy the unique Queue Display URL for your location/event (e.g. <code>https://app.poskart.id/queue/[display-token]</code>).</li>
        <li>Open that URL in the external TV/monitor browser (Chrome/Chromium recommended).</li>
        <li>Enable fullscreen mode (F11) for optimal display.</li>
      </ol>
      <p>The Queue Display appearance can be customized:</p>
      <ul>
        <li><strong>Active queue number:</strong> Displayed in large font at the center of the screen for easy reading from a distance.</li>
        <li><strong>Next numbers:</strong> Show 2-3 upcoming queue numbers to be called next.</li>
        <li><strong>Branding:</strong> Logo, background color, and event name can be customized from Theme Builder.</li>
        <li><strong>Promotional media:</strong> Images or promotional videos are displayed in the empty area of the screen when there is no active call.</li>
      </ul>
      <p>Queue Display uses a <strong>WebSocket</strong> connection to receive queue number updates in real-time without needing to manually refresh the page.</p>

      <h2>4. Operational Queue Management</h2>
      <p>Operators can manage active queues directly from the <strong>Queue &rarr; Live Queue</strong> page in Web Admin, which can be accessed from a laptop or operator tablet.</p>
      <ul>
        <li><strong>Call next number:</strong> Click the <strong>"Call Next"</strong> button to call the next queue number. The called number will immediately appear on the Queue Display and the target kiosk will open for a new session.</li>
        <li><strong>Skip number:</strong> If the number holder is absent, the operator can skip that number. Skipped numbers enter <em>skipped</em> status and can be recalled later.</li>
        <li><strong>Add manual queue:</strong> Operators can manually add a new queue number (e.g. for VIP guests or repairs) without going through the kiosk.</li>
        <li><strong>Reset queue:</strong> The reset button will clear all active queues and start from the initial number. Confirmation is required before the reset runs.</li>
        <li><strong>Real-time statistics:</strong> The display shows the number of people in the queue, current average wait time, and session throughput per hour.</li>
      </ul>
    `,
    content: `
      <h2>1. Konsep Sistem Antrean POSKART</h2>
      <p>Sistem antrean POSKART dirancang untuk lokasi photobooth dengan volume pengunjung tinggi, seperti mal, pameran, atau acara pernikahan. Sistem ini membantu mengatur giliran pengunjung secara adil dan transparan, serta mengurangi kerumunan di sekitar booth.</p>
      <p>Alur kerja sistem antrean secara keseluruhan:</p>
      <ol>
        <li>Pengunjung mengambil nomor antrean melalui kiosk atau dari operator.</li>
        <li>Nomor antrean aktif ditampilkan di layar <strong>Queue Display</strong> eksternal (TV/monitor).</li>
        <li>Operator memanggil nomor antrean berikutnya saat booth siap via Web Admin.</li>
        <li>Kiosk secara otomatis diarahkan ke sesi untuk nomor antrean yang dipanggil.</li>
      </ol>
      <p>Sistem antrean bersifat opsional — dapat diaktifkan atau dinonaktifkan per perangkat kiosk sesuai kebutuhan event.</p>

      <h2>2. Konfigurasi Antrean di Web Admin</h2>
      <p>Untuk mengaktifkan sistem antrean, buka menu <strong>Queue</strong> di sidebar Web Admin. Konfigurasi dilakukan per perangkat atau per grup perangkat (misalnya semua booth di satu lokasi event).</p>
      <p>Pengaturan yang tersedia:</p>
      <ul>
        <li><strong>Mode antrean:</strong> Pilih antara <em>Manual</em> (operator memanggil satu per satu) atau <em>Auto</em> (sistem memanggil otomatis saat kiosk selesai dari sesi sebelumnya).</li>
        <li><strong>Prefix nomor antrean:</strong> Huruf awalan untuk nomor tiket, misal "A" untuk menghasilkan A001, A002, dst.</li>
        <li><strong>Reset harian:</strong> Nomor antrean dapat direset otomatis setiap hari pada jam yang ditentukan.</li>
        <li><strong>Estimasi waktu tunggu:</strong> Aktifkan tampilan estimasi waktu tunggu berdasarkan rata-rata durasi sesi sebelumnya.</li>
        <li><strong>Pesan layar antrean:</strong> Teks atau media promosi yang ditampilkan di Queue Display saat tidak ada pemanggilan aktif.</li>
      </ul>

      <h2>3. Queue Display untuk Layar Eksternal</h2>
      <p>Queue Display adalah halaman web yang dirancang untuk ditampilkan di layar TV atau monitor eksternal di dekat area booth. Halaman ini dapat diakses dari browser di perangkat apapun yang terhubung ke internet.</p>
      <p>Cara mengakses Queue Display:</p>
      <ol>
        <li>Buka menu <strong>Queue &rarr; Display Settings</strong> di Web Admin.</li>
        <li>Salin URL Queue Display unik untuk lokasi/event Anda (contoh: <code>https://app.poskart.id/queue/[token-display]</code>).</li>
        <li>Buka URL tersebut di browser TV/monitor eksternal (Chrome/Chromium direkomendasikan).</li>
        <li>Aktifkan mode fullscreen (F11) untuk tampilan optimal.</li>
      </ol>
      <p>Tampilan Queue Display dapat dikustomisasi:</p>
      <ul>
        <li><strong>Nomor antrean aktif:</strong> Ditampilkan dalam font besar di tengah layar agar mudah terbaca dari jarak jauh.</li>
        <li><strong>Nomor berikutnya:</strong> Tampilkan 2-3 nomor antrean yang akan dipanggil selanjutnya.</li>
        <li><strong>Branding:</strong> Logo, warna latar, dan nama event dapat disesuaikan dari Theme Builder.</li>
        <li><strong>Media promosi:</strong> Gambar atau video promosi ditampilkan di area kosong layar saat tidak ada pemanggilan.</li>
      </ul>
      <p>Queue Display menggunakan koneksi <strong>WebSocket</strong> untuk mendapatkan update nomor antrean secara real-time tanpa perlu refresh halaman manual.</p>

      <h2>4. Manajemen Antrean Operasional</h2>
      <p>Operator dapat mengelola antrean aktif secara langsung dari halaman <strong>Queue &rarr; Live Queue</strong> di Web Admin, yang dapat diakses dari laptop atau tablet operator.</p>
      <ul>
        <li><strong>Panggil nomor berikutnya:</strong> Klik tombol <strong>"Panggil Selanjutnya"</strong> untuk memanggil nomor antrian berikutnya. Nomor yang dipanggil akan langsung muncul di Queue Display dan kiosk yang dituju akan dibuka untuk sesi baru.</li>
        <li><strong>Lewati nomor:</strong> Jika pemilik nomor tidak hadir, operator dapat melewati nomor tersebut. Nomor yang dilewati masuk ke status <em>skipped</em> dan dapat dipanggil ulang nanti.</li>
        <li><strong>Tambah antrean manual:</strong> Operator dapat menambahkan nomor antrean baru secara manual (misalnya untuk tamu VIP atau perbaikan) tanpa melalui kiosk.</li>
        <li><strong>Reset antrean:</strong> Tombol reset akan menghapus seluruh antrean aktif dan memulai dari nomor awal. Konfirmasi diperlukan sebelum reset dijalankan.</li>
        <li><strong>Statistik real-time:</strong> Tampilan menunjukkan jumlah orang dalam antrean, rata-rata waktu tunggu saat ini, dan throughput sesi per jam.</li>
      </ul>
    `,
  },
};
