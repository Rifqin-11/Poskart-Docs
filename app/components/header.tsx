import React from "react";
import { Link, useLocation } from "react-router";
import { IconSearch, IconExternalLink, IconMenu } from "./icons";

const appLogo = "/app-logo.png";

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
}

export function Header({ onOpenSearch, onToggleMobileSidebar }: HeaderProps) {
  const location = useLocation();

  const navLinks = [
    { label: "Panduan", path: "/docs/getting-started-overview" },
    { label: "Admin", path: "/docs/admin-organization" },
    { label: "Kiosk", path: "/docs/kiosk-pairing" },
    { label: "Builder", path: "/docs/builder-frame-builder" },
    { label: "API", path: "/docs/api-kiosk-endpoints" },
  ];

  return (
    <header className="sticky top-0 z-40 vite-header h-14 px-4 sm:px-6 flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-6">
        {/* Mobile Hamburger */}
        <button
          onClick={onToggleMobileSidebar}
          className="md:hidden p-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          <IconMenu className="w-5 h-5" />
        </button>

        {/* Brand Logo with Official Poskart Cupid Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={appLogo}
            alt="POSKART Logo"
            className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-extrabold text-base tracking-tight text-zinc-900 group-hover:text-[#00357b] transition-colors">
            POSKART
          </span>
          <span className="text-[10px] font-bold text-[#00357b] bg-[#00357b]/10 border border-[#00357b]/20 px-1.5 py-0.2 rounded-full">
            DOCS
          </span>
        </Link>

        {/* Top Navbar Menu Items (Vite.dev style) */}
        <nav className="hidden lg:flex items-center gap-1 pl-4 border-l border-zinc-200 text-xs font-medium text-zinc-600">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path.slice(0, 11));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-[#00357b] font-semibold bg-zinc-100"
                    : "hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right Side Tools */}
      <div className="flex items-center gap-3">
        {/* Vite.dev Style Search Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100/80 hover:bg-zinc-100 border border-zinc-200 text-zinc-400 text-xs transition-all w-36 sm:w-56 justify-between group"
        >
          <div className="flex items-center gap-1.5">
            <IconSearch className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600" />
            <span className="text-zinc-500 font-normal">Search</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono text-zinc-400 bg-white px-1.5 py-0.2 rounded border border-zinc-200">
            ⌘K
          </kbd>
        </button>

        {/* External Web Link */}
        <a
          href="https://poskart.my.id"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 px-2 py-1"
        >
          <span>Poskart Web</span>
          <IconExternalLink className="w-3 h-3 text-zinc-400" />
        </a>

        {/* Login Button */}
        <a
          href="https://poskart.my.id/login"
          target="_blank"
          rel="noreferrer"
          className="px-3.5 py-1.5 rounded-md bg-[#00357b] hover:bg-[#002557] text-white text-xs font-semibold transition-colors"
        >
          Login
        </a>
      </div>
    </header>
  );
}
