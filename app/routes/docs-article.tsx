import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { TableOfContents } from "../components/table-of-contents";
import { Footer } from "../components/footer";
import { SearchModal } from "../components/search-modal";
import { CodeBlock } from "../components/code-block";
import { Callout } from "../components/callout";
import { DocImage } from "../components/doc-image";
import { DOC_ARTICLES } from "../data/docs-content";
import { IconChevronRight } from "../components/icons";
import { useLang } from "../context/language";

export function meta({ params }: { params: { slug?: string } }) {
  const article = params.slug ? DOC_ARTICLES[params.slug] : null;
  return [
    { title: article ? `${article.title} | POSKART Docs` : "Dokumentasi POSKART" },
    { name: "description", content: article?.description || "Pusat dokumentasi resmi POSKART Photobooth." },
  ];
}

export default function DocsArticlePage() {
  const { slug } = useParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { lang } = useLang();

  const article = slug ? DOC_ARTICLES[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />
        <div className="flex-1 flex items-center justify-center p-8 text-center">
          <div className="max-w-md space-y-4">
            <h1 className="text-2xl font-bold text-zinc-900">
              {lang === "en" ? "Article Not Found" : "Artikel Tidak Ditemukan"}
            </h1>
            <p className="text-xs text-zinc-500">
              {lang === "en"
                ? `Documentation page with slug "${slug}" was not found.`
                : `Halaman dokumentasi dengan slug "${slug}" tidak ditemukan.`}
            </p>
            <Link
              to="/"
              className="inline-block px-4 py-2 rounded-lg bg-[#00357b] text-white text-xs font-medium"
            >
              {lang === "en" ? "Back to Docs" : "Kembali ke Dokumentasi"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Bilingual field resolution
  const title = lang === "en" ? article.titleEn : article.title;
  const description = lang === "en" ? article.descriptionEn : article.description;
  const content = lang === "en" ? article.contentEn : article.content;
  const headings = lang === "en" ? article.headingsEn : article.headings;
  const categoryTitle = lang === "en" ? article.categoryTitleEn : article.categoryTitle;

  // Find previous and next articles
  const allArticlesList = Object.values(DOC_ARTICLES);
  const currentIndex = allArticlesList.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticlesList[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticlesList.length - 1 ? allArticlesList[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
      />

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <div className="flex-1 flex w-full">
        {/* Left Sidebar Nav */}
        <Sidebar
          currentSlug={article.slug}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Article Reading Area */}
        <main className="flex-1 min-w-0 px-6 sm:px-12 py-8 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
              <Link to="/" className="hover:text-zinc-700">Docs</Link>
              <IconChevronRight className="w-3 h-3 text-zinc-300" />
              <span className="text-zinc-600">{categoryTitle}</span>
            </nav>

            {/* Article Header */}
            <div className="pb-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Visual Diagrams for Key Guides */}
            {article.slug === "getting-started-overview" && (
              <DocImage
                alt="Diagram Arsitektur POSKART SaaS System"
                caption="Gambar 1: Arsitektur terintegrasi Web Admin, Flutter Kiosk, dan Live Photo Worker"
                fallbackDiagram="architecture"
                src="/images/docs/architecture-overview.png"
              />
            )}

            {article.slug === "kiosk-pairing" && (
              <>
                <DocImage
                  alt="Alur Pairing Device Tablet dengan Web Admin"
                  caption="Gambar 2: Alur autentikasi token saat pertama kali tablet Kiosk dipasangkan"
                  fallbackDiagram="pairing"
                  src="/images/docs/kiosk-pairing-flow.png"
                />
                <Callout type="important" title="REST API AUTHENTICATION">
                  Header <code>Authorization: Bearer &lt;access_token&gt;</code> wajib disertakan pada seluruh request Kiosk API. Token ini dihasilkan dari proses Pair Code di Web Admin.
                </Callout>
              </>
            )}

            {article.slug === "kiosk-printer" && (
              <DocImage
                alt="Diagram Kalibrasi Safe Zone Printer Thermal"
                caption="Gambar 3: Skema margin potong kertas thermal untuk mencegah potongan foto terputus"
                fallbackDiagram="printer"
                src="/images/docs/printer-calibration-guide.png"
              />
            )}

            {article.slug === "builder-frame-builder" && (
              <>
                <DocImage
                  alt="Struktur Canvas & Layering Frame Builder"
                  caption="Gambar 4: Urutan layering elemen pada bingkai interaktif (Background, Slots, PNG Overlay)"
                  fallbackDiagram="builder"
                  src="/images/docs/frame-builder-canvas.png"
                />
                <CodeBlock
                  language="json"
                  filename="layout-schema-contract.json"
                  code={`{
  "version": 1,
  "canvas": { "width": 1280, "height": 800, "orientation": "landscape" },
  "pages": {
    "landing": [],
    "template": [],
    "camera": [
      { "id": "shutter", "type": "button", "semanticRole": "camera.take_photo" }
    ],
    "preview": [],
    "thanks": []
  }
}`}
                />
              </>
            )}

            {article.slug === "api-webhooks" && (
              <DocImage
                alt="Flowchart Callback Webhook Pembayaran QRIS"
                caption="Gambar 5: Urutan sinyal callback dari Duitku Gateway ke Server POSKART"
                fallbackDiagram="webhook"
                src="/images/docs/webhook-flowchart.png"
              />
            )}

            {article.slug === "api-kiosk-endpoints" && (
              <div className="space-y-4">
                <CodeBlock
                  language="bash"
                  filename="curl-status-check.sh"
                  code={`curl -X GET https://poskart.my.id/api/kiosk/device/status \\
  -H "Authorization: Bearer psk_live_dev_8f93a1b2c3d4..." \\
  -H "Content-Type: application/json"`}
                />
                <Callout type="tip" title="BEARER AUTHENTICATION">
                  Gunakan Bearer Token yang digenerate per booth untuk autentikasi API Kiosk.
                </Callout>
              </div>
            )}

            {/* Article Content HTML */}
            <article
              className="vite-doc-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Article Footer Navigation (Full Width & Equal Height) */}
            <div className="pt-8 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs w-full">
              {prevArticle ? (
                <Link
                  to={`/docs/${prevArticle.slug}`}
                  className="w-full min-h-[72px] p-4 rounded-xl border border-zinc-200 hover:border-[#00357b] transition-all flex flex-col justify-center text-left group bg-white shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Previous Page</span>
                  <span className="font-semibold text-zinc-800 group-hover:text-[#00357b] mt-1 text-xs truncate">
                    ← {lang === "en" ? prevArticle.titleEn : prevArticle.title}
                  </span>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  to={`/docs/${nextArticle.slug}`}
                  className="w-full min-h-[72px] p-4 rounded-xl border border-zinc-200 hover:border-[#00357b] transition-all flex flex-col justify-center text-right group bg-white shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Next Page</span>
                  <span className="font-semibold text-zinc-800 group-hover:text-[#00357b] mt-1 text-xs truncate">
                    {lang === "en" ? nextArticle.titleEn : nextArticle.title} →
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Poskart Clean Footer Inside Article Area */}
          <Footer />
        </main>

        {/* Right Table of Contents */}
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}
