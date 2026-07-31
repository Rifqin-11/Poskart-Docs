import React from "react";
import { Link } from "react-router";
import { DOC_CATEGORIES } from "../data/docs-content";
import { IconX } from "./icons";
import { useLang } from "../context/language";

interface SidebarProps {
  currentSlug?: string;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ currentSlug, isOpenMobile, onCloseMobile }: SidebarProps) {
  const { lang } = useLang();
  const sidebarContent = (
    <nav className="flex flex-col space-y-6 py-6 px-6 text-xs leading-relaxed">
      {DOC_CATEGORIES.map((category) => (
        <div key={category.id} className="space-y-1.5">
          <h3 className="font-bold text-zinc-900 uppercase tracking-wider text-[11px]">
            {lang === "en" ? category.titleEn : category.title}
          </h3>

          <div className="space-y-0.5">
            {category.articles.map((article) => {
              const isActive = currentSlug === article.slug;
              const label = lang === "en" ? article.titleEn : article.title;
              const badge = lang === "en" ? (article.badgeEn ?? article.badge) : article.badge;
              return (
                <Link
                  key={article.slug}
                  to={`/docs/${article.slug}`}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between gap-1.5 py-1 px-2 rounded-md transition-colors ${
                    isActive
                      ? "text-[#00357b] font-semibold bg-[#00357b]/5"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60"
                  }`}
                >
                  <span className="truncate">{label}</span>
                  {badge && (
                    <span className="shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#00357b]/10 text-[#00357b] leading-none">
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar (Vite.dev style) */}
      <aside className="hidden md:block w-64 shrink-0 vite-sidebar sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs" onClick={onCloseMobile} />
          <div className="relative w-72 bg-white h-full shadow-2xl z-10 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-zinc-200">
              <span className="font-bold text-sm text-zinc-900">{lang === "en" ? "Documentation" : "Dokumentasi"}</span>
              <button onClick={onCloseMobile} className="p-1 text-zinc-500 hover:bg-zinc-100 rounded">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{sidebarContent}</div>
          </div>
        </div>
      )}
    </>
  );
}
