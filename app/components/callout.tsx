import React from "react";

type CalloutType = "note" | "tip" | "important" | "warning" | "caution";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
  const styles = {
    note: {
      border: "border-l-4 border-blue-500 bg-blue-50/50 text-zinc-800",
      defaultTitle: "CATATAN",
    },
    tip: {
      border: "border-l-4 border-emerald-500 bg-emerald-50/50 text-zinc-800",
      defaultTitle: "TIPS",
    },
    important: {
      border: "border-l-4 border-[#00357b] bg-indigo-50/50 text-zinc-800",
      defaultTitle: "PENTING",
    },
    warning: {
      border: "border-l-4 border-amber-500 bg-amber-50/50 text-zinc-800",
      defaultTitle: "PERHATIAN",
    },
    caution: {
      border: "border-l-4 border-rose-500 bg-rose-50/50 text-zinc-800",
      defaultTitle: "PERINGATAN",
    },
  }[type];

  return (
    <div className={`my-4 p-4 rounded-r-lg ${styles.border} text-xs leading-relaxed`}>
      <div className="font-semibold text-zinc-900 mb-1 text-[11px] tracking-wide uppercase">
        {title || styles.defaultTitle}
      </div>
      <div className="text-zinc-700">{children}</div>
    </div>
  );
}
