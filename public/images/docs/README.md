# Panduan Asset Gambar & Screenshot POSKART Docs

Komponen `DocImage` di `poskart_docs` telah disiapkan untuk langsung menampilkan diagram visual bawaan. Jika Anda ingin mengimpor screenshot asli dari Web Admin atau Tablet Flutter Kiosk, cukup letakkan file gambar (PNG / JPEG) pada folder `public/images/docs/` sesuai dengan daftar path di bawah ini:

---

## 📸 Daftar Path File Gambar yang Direkomendasikan:

| Path File (`public/images/docs/...`) | Halaman / Artikel | Deskripsi Screenshot |
|---|---|---|
| `architecture-overview.png` | **Gambaran Umum POSKART** | Diagram alur / arsitektur ekosistem Web Admin, Flutter Kiosk & Live Photo Worker. |
| `quickstart-flow.png` | **Panduan Memulai Cepat** | Infografis langkah registrasi hingga printer terhubung. |
| `admin-pricing-settings.png` | **Pengaturan Paket Harga & Akses** | Tangkapan layar panel konfigurasi QRIS, Cash, & Voucher di Web Admin. |
| `kiosk-pairing-flow.png` | **Pairing Perangkat & Bearer Token** | Tangkapan layar dialog Pair Code di Web Admin & input token di tablet Kiosk. |
| `printer-calibration-guide.png` | **Kalibrasi & Tuning Printer** | Diagram batas potong kertas thermal (Top/Bottom Cut Margin). |
| `frame-builder-canvas.png` | **Frame Template Builder (1-5 Foto)** | Tangkapan layar antarmuka Visual Frame Builder & urutan layer slot foto. |
| `webhook-flowchart.png` | **Webhook Pembayaran Duitku/Midtrans** | Flowchart callback pembayaran QRIS gateway. |

---

> 💡 **Catatan:** Jika file PNG belum diimpor atau path gambar tidak ditemukan, sistem `DocImage` akan otomatis menampilkan **Interactive SVG Visual Diagram** yang sudah didesain rapi secara otomatis!
