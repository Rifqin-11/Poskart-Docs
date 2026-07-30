import React, { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Footer } from "../components/footer";
import { SearchModal } from "../components/search-modal";
import { DOC_CATEGORIES } from "../data/docs-content";
import { IconSearch, IconChevronRight } from "../components/icons";
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
                Platform SaaS Photobooth terintegrasi. Panduan Web Admin, setup aplikasi Flutter Kiosk, tuning printer, serta Kiosk API Reference.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/docs/getting-started-quickstart"
                  className="px-4 py-2 rounded-lg bg-[#00357b] hover:bg-[#002557] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Get Started</span>
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
                Dokumentasi Berdasarkan Topik
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {DOC_CATEGORIES.map((category) => (
                  <div key={category.id} className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors space-y-3 shadow-2xs">
                    <h3 className="font-bold text-sm text-zinc-900 border-b border-zinc-100 pb-2">
                      {category.title}
                    </h3>
                    <div className="space-y-1.5">
                      {category.articles.map((article) => (
                        <Link
                          key={article.slug}
                          to={`/docs/${article.slug}`}
                          className="flex items-center justify-between py-1 px-1 rounded text-xs text-zinc-600 hover:text-[#00357b] transition-colors group"
                        >
                          <span className="truncate">{article.title}</span>
                          <IconChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#00357b] transition-colors shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
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
