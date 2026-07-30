import React from "react";

export function Footer() {
  return (
    <footer className="pt-8 pb-12 mt-12 border-t border-zinc-200 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p>© {new Date().getFullYear()} POSKART SaaS Photobooth Platform. All rights reserved.</p>
      <div className="flex items-center gap-3 text-zinc-500 font-medium">
        <a
          href="https://poskart.my.id"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#00357b] transition-colors"
        >
          Poskart Web
        </a>
        <span className="text-zinc-300">•</span>
        <a
          href="https://poskart.my.id/privacy"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#00357b] transition-colors"
        >
          Privacy
        </a>
        <span className="text-zinc-300">•</span>
        <span className="text-zinc-400 font-normal">docs.poskart.my.id</span>
      </div>
    </footer>
  );
}
