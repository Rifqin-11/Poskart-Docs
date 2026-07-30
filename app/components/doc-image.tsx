import React from "react";

interface DocImageProps {
  src?: string;
  alt: string;
  caption?: string;
  fallbackDiagram?: "architecture" | "pairing" | "builder" | "printer" | "webhook";
}

export function DocImage({ src, alt, caption, fallbackDiagram }: DocImageProps) {
  return (
    <figure className="my-6 space-y-2 group">
      <div className="relative rounded-xl border border-zinc-200 bg-zinc-50/80 overflow-hidden shadow-2xs transition-all hover:border-zinc-300">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover max-h-[480px]"
            onError={(e) => {
              // Hide broken image link indicator and display fallback visual banner
              (e.target as HTMLElement).style.display = "none";
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) {
                const fallback = parent.querySelector(".fallback-banner");
                if (fallback) fallback.classList.remove("hidden");
              }
            }}
          />
        ) : null}

        {/* Fallback SVG Diagrams when image PNG file is pending import */}
        <div className={`fallback-banner ${src ? "hidden" : ""} p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-zinc-50 to-zinc-100/80 min-h-[220px]`}>
          {fallbackDiagram === "architecture" && (
            <div className="w-full max-w-lg space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00357b]">Diagram Arsitektur POSKART</div>
              <div className="grid grid-cols-3 gap-3 text-xs font-semibold">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-zinc-800 shadow-2xs">
                  <div className="text-[#00357b] font-bold">Web Admin</div>
                  <div className="text-[10px] font-normal text-zinc-500 mt-1">Next.js 15 + Supabase</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#00357b]/30 text-zinc-800 shadow-2xs flex flex-col justify-center">
                  <div className="text-emerald-600 font-bold">Kiosk REST API</div>
                  <div className="text-[10px] font-normal text-zinc-500 mt-1">Bearer Token Sync</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-zinc-800 shadow-2xs">
                  <div className="text-[#c9364a] font-bold">Flutter Kiosk</div>
                  <div className="text-[10px] font-normal text-zinc-500 mt-1">Tablet POS & Camera</div>
                </div>
              </div>
            </div>
          )}

          {fallbackDiagram === "pairing" && (
            <div className="w-full max-w-md space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00357b]">Alur Pairing Tablet Kiosk</div>
              <div className="flex items-center justify-around text-xs font-medium bg-white p-4 rounded-xl border border-zinc-200 shadow-2xs">
                <div className="text-center">
                  <span className="block font-bold text-zinc-800">1. Web Admin</span>
                  <span className="text-[10px] text-zinc-500">Generate Pair Code</span>
                </div>
                <span className="text-zinc-400">➔</span>
                <div className="text-center">
                  <span className="block font-bold text-zinc-800">2. Tablet</span>
                  <span className="text-[10px] text-zinc-500">Input Pair Token</span>
                </div>
                <span className="text-zinc-400">➔</span>
                <div className="text-center">
                  <span className="block font-bold text-emerald-600">3. Connected</span>
                  <span className="text-[10px] text-zinc-500">Bearer Auth Saved</span>
                </div>
              </div>
            </div>
          )}

          {fallbackDiagram === "builder" && (
            <div className="w-full max-w-md space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00357b]">Struktur Layer Frame Builder</div>
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-2xs space-y-2 text-xs">
                <div className="p-2 bg-blue-50 border border-blue-200 rounded text-blue-800 text-center font-semibold">
                  Layer 3: PNG Overlay (Frame Front)
                </div>
                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-center font-semibold">
                  Layer 2: Slot Foto 1 s/d 5 (Photo Placements)
                </div>
                <div className="p-2 bg-zinc-100 border border-zinc-200 rounded text-zinc-700 text-center font-semibold">
                  Layer 1: Solid Color / Background Canvas
                </div>
              </div>
            </div>
          )}

          {fallbackDiagram === "printer" && (
            <div className="w-full max-w-md space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00357b]">Skema Margins Cut Thermal Paper</div>
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-2xs text-xs space-y-1 text-center">
                <div className="font-bold text-zinc-800">DNP RX1HS / Citizen CY-02 Margins</div>
                <div className="text-[11px] text-zinc-500">Top/Bottom Cut Safe Zone: 2.5mm</div>
                <div className="text-[11px] text-zinc-500">DPI Resolution Target: 300 DPI (1800 x 1200 px)</div>
              </div>
            </div>
          )}

          {fallbackDiagram === "webhook" && (
            <div className="w-full max-w-md space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00357b]">Flowchart Webhook QRIS Callback</div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-2xs text-xs space-y-1 text-center">
                <div className="font-bold text-zinc-800">Duitku Payment Gateway ➔ Poskart Server</div>
                <div className="text-[11px] font-mono text-[#00357b]">POST /api/webhooks/duitku</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Status 00 (Success) ➔ Trigger Print Session</div>
              </div>
            </div>
          )}

          {!fallbackDiagram && (
            <div className="space-y-1 text-zinc-400">
              <svg className="w-8 h-8 mx-auto text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-xs font-semibold text-zinc-600">{alt}</div>
              <div className="text-[10px] text-zinc-400 font-mono">File rujukan screenshot: {src || "/images/docs/screenshot.png"}</div>
            </div>
          )}
        </div>
      </div>

      {caption && (
        <figcaption className="text-center text-xs text-zinc-500 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
