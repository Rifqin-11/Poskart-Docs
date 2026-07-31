import React, { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Footer } from "../components/footer";
import { SearchModal } from "../components/search-modal";
import { DOC_CATEGORIES } from "../data/docs-content";
import { IconSearch, IconChevronRight } from "../components/icons";
import { useLang } from "../context/language";
import "../utils/sync-assets.server";

export function meta() {
  return [
    { title: "POSKART Docs — Dokumentasi Resmi Operasional Photobooth" },
    { name: "description", content: "Dokumentasi resmi platform SaaS POSKART, panduan Web Admin, aplikasi Kiosk Flutter, printer tuning, dan Kiosk API Reference." },
  ];
}

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
      />

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <div className="flex-1 flex w-full">
        <Sidebar
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 px-6 sm:px-12 py-10 space-y-12 flex flex-col justify-between">
          <div className="space-y-12">
            {/* Vite.dev Style Clean Hero Section */}
            <div className="space-y-4 pb-8 border-b border-zinc-200">
              <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">
                POSKART Documentation
              </h1>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                {lang === "en"
                  ? "Integrated SaaS Photobooth platform. Web Admin guide, Flutter Kiosk setup, printer tuning, and Kiosk API Reference."
                  : "Platform SaaS Photobooth terintegrasi. Panduan Web Admin, setup aplikasi Flutter Kiosk, tuning printer, serta Kiosk API Reference."}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/docs/getting-started-quickstart"
                  className="px-4 py-2 rounded-lg bg-[#00357b] hover:bg-[#002557] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{lang === "en" ? "Get Started" : "Mulai"}</span>
                  <IconChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/70 border border-zinc-200 text-zinc-700 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <IconSearch className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Search Docs (⌘K)</span>
                </button>
              </div>
            </div>

            {/* Clean Bento Grid for Categories */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                {lang === "en" ? "Documentation by Topic" : "Dokumentasi Berdasarkan Topik"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {DOC_CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    to={`/docs/${category.articles[0]?.slug ?? ""}`}
                    className="group p-5 rounded-xl border border-zinc-200 bg-white hover:border-[#00357b]/40 hover:shadow-md transition-all space-y-3 shadow-2xs flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-zinc-900 group-hover:text-[#00357b] transition-colors leading-snug">
                        {lang === "en" ? category.titleEn : category.title}
                      </h3>
                      <IconChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#00357b] transition-colors shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                      {lang === "en" ? category.descriptionEn : category.description}
                    </p>
                    <div className="pt-1 border-t border-zinc-100">
                      <span className="text-xs font-medium text-zinc-400 group-hover:text-[#00357b]/70 transition-colors">
                        {category.articles.length} {lang === "en" ? "articles" : "artikel"} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Poskart Clean Footer Inside Main Area */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
