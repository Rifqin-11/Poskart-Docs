import React from "react";
import { DocSectionHeading } from "../data/docs-content";

interface TableOfContentsProps {
  headings: DocSectionHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <aside className="hidden lg:block w-60 shrink-0 vite-toc sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-6 py-6 text-xs">
      <div className="font-bold text-[11px] tracking-wider uppercase text-zinc-400 mb-3">
        ON THIS PAGE
      </div>
      <nav className="space-y-1.5 leading-snug">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="block text-zinc-500 hover:text-[#00357b] transition-colors py-0.5 truncate"
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
