"use client";

import { useState } from "react";

const photoOptions = ["All", "Photo", "No Photo"] as const;

type PhotoOption = (typeof photoOptions)[number];

export default function TemplatePhotoFilter() {
  const [selected, setSelected] = useState<PhotoOption>("All");

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-slate-500">
        Photo
      </span>

      <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
        {photoOptions.map((option) => {
          const isActive = selected === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? "bg-purple-50 text-purple-700 shadow-sm"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}