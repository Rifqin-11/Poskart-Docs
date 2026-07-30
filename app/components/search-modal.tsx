import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DOC_ARTICLES, DocArticle } from "../data/docs-content";
import { IconSearch, IconX, IconChevronRight, IconBook } from "./icons";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open search modal
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const articlesList = Object.values(DOC_ARTICLES);
  const filteredArticles = query.trim() === ""
    ? articlesList
    : articlesList.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase()) ||
          article.categoryTitle.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (slug: string) => {
    navigate(`/docs/${slug}`);
    onClose();
    setQuery("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-zinc-950/40 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-200 bg-zinc-50/50">
          <IconSearch className="w-5 h-5 text-[#00357b] mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari dokumentasi (contoh: QRIS, Flutter, API, Printer)..."
            className="flex-1 bg-transparent text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 mr-2 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-200/60"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredArticles.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 text-xs">
              Tidak ditemukan hasil untuk "{query}"
            </div>
          ) : (
            filteredArticles.map((article) => (
              <button
                key={article.slug}
                onClick={() => handleSelect(article.slug)}
                className="w-full text-left p-3 rounded-xl hover:bg-[#00357b]/5 transition-colors group flex items-start justify-between gap-3 border border-transparent hover:border-[#00357b]/10"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00357b] bg-[#00357b]/10 px-2 py-0.5 rounded-md">
                      {article.categoryTitle}
                    </span>
                    {article.badge && (
                      <span className="text-[9px] font-bold text-[#c9364a] bg-rose-50 px-1.5 py-0.5 rounded-md border border-[#c9364a]/20">
                        {article.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-zinc-900 group-hover:text-[#00357b] transition-colors truncate">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                    {article.description}
                  </p>
                </div>
                <IconChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#00357b] self-center transition-colors" />
              </button>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 bg-zinc-100/80 border-t border-zinc-200 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>Gunakan ↑↓ untuk navigasi, ESC untuk tutup</span>
          <span className="font-bold text-[#00357b]">POSKART Docs</span>
        </div>
      </div>
    </div>
  );
}
