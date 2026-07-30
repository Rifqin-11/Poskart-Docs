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
}

export interface DocCategory {
  id: string;
  title: string;
  icon: string;
  articles: {
    slug: string;
    title: string;
    badge?: string;
  }[];
}

export const DOC_CATEGORIES: DocCategory[] = [
  {
    id: "getting-started",
    title: "Pengenalan & Quickstart",
    icon: "book",
    articles: [
      { slug: "getting-started-overview", title: "Gambaran Umum POSKART" },
      { slug: "getting-started-quickstart", title: "Panduan Memulai Cepat", badge: "Mulai" },
    ],
  },
  {
    id: "admin",
    title: "Panduan Admin Dashboard",
    icon: "monitor",
    articles: [
      { slug: "admin-organization", title: "Organisasi & Role Akses" },
      { slug: "admin-subscription", title: "Subskripsi SaaS & Invoice" },
      { slug: "admin-pricing", title: "Pengaturan Paket Harga & Akses" },
      { slug: "admin-gallery", title: "Manajemen Galeri & Delivery Foto" },
      { slug: "admin-money-payout", title: "Keuangan & Pencairan Payout" },
    ],
  },
  {
    id: "kiosk",
    title: "Panduan Flutter Kiosk",
    icon: "smartphone",
    articles: [
      { slug: "kiosk-installation", title: "Instalasi Aplikasi Kiosk" },
      { slug: "kiosk-pairing", title: "Pairing Perangkat & Bearer Token", badge: "Wajib" },
      { slug: "kiosk-printer-tuning", title: "Kalibrasi & Tuning Printer" },
      { slug: "kiosk-pos-qris", title: "Mode Pembayaran QRIS & POS" },
    ],
  },
  {
    id: "builder",
    title: "Visual Builder",
    icon: "layers",
    articles: [
      { slug: "builder-frame-builder", title: "Frame Template Builder (1-5 Foto)" },
      { slug: "builder-theme-builder", title: "Theme Builder & Kustomisasi Layar" },
    ],
  },
  {
    id: "api",
    title: "API & Integrasi Developer",
    icon: "terminal",
    articles: [
      { slug: "api-kiosk-endpoints", title: "Kiosk API Reference (/api/kiosk/*)" },
      { slug: "api-payment-webhooks", title: "Webhook Pembayaran Duitku/Midtrans" },
      { slug: "api-live-photo-worker", title: "Live Photo FFmpeg Worker Pipeline" },
    ],
  },
  {
    id: "faq",
    title: "Troubleshooting & FAQ",
    icon: "help",
    articles: [
      { slug: "faq-troubleshooting", title: "Solusi Kendala Hardware & Transaksi" },
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
    content: `
      <h2>1. Membuat Paket Harga</h2>
      <p>Di menu <strong>Pricing</strong> pada Web Admin, Anda dapat menentukan paket harga yang akan tampil pada layar kiosk. Setiap paket memiliki parameter berikut:</p>
      <ul>
        <li><strong>Nama Paket:</strong> Misal <em>"Paket Standard 2 Print"</em>.</li>
        <li><strong>Harga Nominal:</strong> Harga yang harus dibayar pengunjung (contoh: Rp 35.000).</li>
        <li><strong>Jumlah Cetak (Print Count):</strong> Jumlah lembar foto fisik yang dicetak otomatis oleh printer.</li>
        <li><strong>Durasi / Foto Limit:</strong> Ketentuan pengambilan foto.</li>
      </ul>

      <h2>2. Mode Akses & Pembayaran (QRIS, Cash, Voucher, Event)</h2>
      <p>POSKART mendukung 4 provider transaksi:</p>
      <ul>
        <li><strong>QRIS:</strong> Pembayaran otomatis via Duitku QRIS di layar kiosk.</li>
        <li><strong>Cash:</strong> Pembayaran tunai melalui kasir/operator yang diinput dari Web Admin / POS.</li>
        <li><strong>Voucher:</strong> Penggunaan kode voucher promo unik.</li>
        <li><strong>Event:</strong> Pengaksesan bebas tanpa pemotongan pendapatan (khusus event/wedding).</li>
      </ul>

      <h2>3. Sesi Complimentary / Event Access</h2>
      <p>Untuk penggunaan photobooth pada acara khusus (misal <em>Wedding / Event Corporate</em>) di mana pengunjung tidak perlu membayar per sesi, Anda dapat mengaktifkan mode <strong>Event Access Token</strong> pada paket harga. Transaksi berstatus Event tidak akan dihitung sebagai pendapatan biasa pada laporan keuangan.</p>
    `,
  },

  "admin-gallery": {
    id: "admin-gallery",
    slug: "admin-gallery",
    category: "admin",
    categoryTitle: "Panduan Admin Dashboard",
    title: "Manajemen Galeri & Delivery Foto",
    description: "Melihat riwayat sesi foto, kirim foto via email, pengunduhan softfile, dan aturan retensi media.",
    updatedAt: "2026-07-30",
    headings: [
      { id: "view-session", title: "1. Navigasi Sesi & Foto" },
      { id: "delivery-email", title: "2. Pengiriman Softfile via Email" },
      { id: "shared-gallery", title: "3. Shared Public Gallery" },
      { id: "retensi-media", title: "4. Retensi Storage & Housekeeping Cron" },
    ],
    content: `
      <h2>1. Navigasi Sesi & Foto</h2>
      <p>Menu <strong>Gallery</strong> menampilkan seluruh sesi foto yang berhasil dilakukan di semua perangkat booth. Admin dapat melihat hasil foto asli, foto berbingkai (framed photo), serta cetak ulang (re-print) jika terjadi gangguan cetak pada lokasi.</p>

      <h2>2. Pengiriman Softfile via Email</h2>
      <p>Pengunjung dapat memasukkan email di kiosk atau halaman public gallery. Sistem menggunakan service pengiriman email <strong>Resend</strong> untuk mengirimkan file foto dan video animasi ke inbox pengunjung.</p>

      <h2>3. Shared Public Gallery</h2>
      <p>Setiap sesi memiliki token unik halaman publik <code>/g/[token]</code> yang aman. Pengunjung dapat membagikan halaman ini ke sosial media untuk mengunduh foto beresolusi penuh tanpa perlu login.</p>

      <h2>4. Retensi Storage & Housekeeping Cron</h2>
      <p>Untuk menghemat penyimpanan cloud (Cloudinary / ImageKit / R2), POSKART menjalankan sistem pembersihan otomatis (Cron Cleanup) sesuai retention policy yang Anda tentukan di menu Settings (misal: simpan foto 30 hari).</p>
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
    content: `
      <h2>1. Integrasi Dynamic QRIS Duitku</h2>
      <p>Sistem QRIS POSKART menggunakan model <em>Dynamic QRIS</em>. Setiap kali pengunjung memilih paket, server akan menembakkan request ke Duitku untuk menghasilkan kode QRIS unik beserta waktu kedaluwarsa (misal 5 menit).</p>

      <h2>2. Alur Pembayaran di Layar Kiosk</h2>
      <ol>
        <li>Pengunjung menekan layar <em>Landing Screen</em>.</li>
        <li>Dialog pembayaran tampil di tengah layar menampilkan Kode QRIS dan nominal.</li>
        <li>Aplikasi Kiosk melakukan polling status pembayaran setiap 3 detik ke <code>/api/kiosk/transactions/status</code>.</li>
        <li>Begitu pengunjung menyelesaikan scan di aplikasi e-wallet / mobile banking, layar kiosk otomatis berpindah ke pemilihan template foto.</li>
      </ol>

      <h2>3. Transaksi Manual via Web POS</h2>
      <p>Untuk transaksi tunai (Cash), operator kasir dapat membuka menu <strong>POS</strong> di Web Admin / Tablet terpisah, memilih paket harga, lalu mengklik <strong>Authorize Session</strong> untuk mengizinkan tablet kiosk memulai sesi foto tanpa QRIS.</p>
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
    content: `
      <h2>1. Antarmuka Frame Builder</h2>
      <p>Buka menu <strong>Templates &rarr; Launch Builder</strong>. Builder menyediakan kanvas visual berbasis drag-and-drop dengan fitur grid snapping, zoom, layer ordering, dan live preview.</p>

      <h2>2. Menata Slot Foto (Photo Slots 1-5)</h2>
      <p>Anda dapat menentukan jumlah foto dalam satu bingkai mulai dari 1 hingga 5 foto. Setiap slot foto dapat diatur posisi X, Y, Lebar, Tinggi, dan Sudut Rotasinya.</p>

      <h2>3. Menambahkan Stiker & Overlay PNG</h2>
      <p>Unggah file gambar transparan (PNG 300 DPI) sebagai bingkai depan (frame overlay). Gambar bingkai akan menutupi area sekeliling foto secara rapi.</p>

      <h2>4. Struktur Schema Layout JSON</h2>
      <p>Setiap desain bingkai disimpan dalam format standar <code>LayoutSchema</code> JSON yang dipahami oleh renderer Web dan aplikasi Flutter Kiosk:</p>
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
    content: `
      <h2>1. Autentikasi & Header Required</h2>
      <p>Seluruh endpoint Kiosk di bawah <code>/api/kiosk/*</code> mewajibkan header <code>Authorization</code> berisi Bearer Token perangkat:</p>
      <div class="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono my-2">
        Authorization: Bearer psk_live_dev_8f93a1...<br/>
        Content-Type: application/json
      </div>

      <h2>2. GET /api/kiosk/device/status</h2>
      <p>Mengecek status kesehatan perangkat, level baterai, status printer, dan versi aplikasi.</p>

      <h2>3. GET /api/kiosk/config</h2>
      <p>Mengambil seluruh manifes konfigurasi aktif, daftar template bingkai, paket harga, dan theme layout JSON terbaru.</p>

      <h2>4. POST /api/kiosk/transactions/qris</h2>
      <p>Membuat transaksi baru dan memicu penerbitan QRIS Duitku.</p>

      <h2>5. POST /api/kiosk/gallery/upload</h2>
      <p>Mengunggah file foto/video hasil sesi dari tablet ke cloud storage POSKART.</p>
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
    content: `
      <h2>1. Endpoint URL Webhook</h2>
      <p>POSKART menyediakan endpoint terpisah untuk penanganan callback payment gateway:</p>
      <ul>
        <li><strong>Duitku QRIS / Subscription Callback:</strong> <code>POST /api/payments/duitku/callback</code></li>
        <li><strong>Midtrans Notification Route:</strong> <code>POST /api/payments/midtrans/notification</code></li>
      </ul>

      <h2>2. Verifikasi Keamanan Signature</h2>
      <p>Setiap payload webhook divalidasi tandatangan MD5/SHA256 signature-nya menggunakan <code>API_KEY</code> dan <code>MERCHANT_CODE</code> rahasia server untuk mencegah pencucian transaksi palsu.</p>

      <h2>3. Idempotensi & Ledger Entry</h2>
      <p>Sistem pencatatan pembayaran menggunakan tabel <code>payment_ledger_entries</code> dengan sifat <em>immutable</em>. Notifikasi berulang (duplicate webhook) ditangani secara aman tanpa menggandakan nilai saldo.</p>
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
};
