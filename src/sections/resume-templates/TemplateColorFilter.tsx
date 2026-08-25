"use client";

export default function TemplateColorFilter() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-slate-500">
        Color
      </span>

      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-sm">
        {/* All */}
        <button
          type="button"
          aria-label="All colors"
          className="flex size-8 items-center justify-center rounded-full ring-2 ring-purple-300 ring-offset-2 ring-offset-white"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 text-[10px] font-semibold text-white">
            All
          </span>
        </button>

        {/* Cyan / Blue */}
        <button
          type="button"
          aria-label="Blue templates"
          className="size-7 rounded-full bg-cyan-400 transition-transform hover:scale-110"
        />

        {/* Slate */}
        <button
          type="button"
          aria-label="Slate templates"
          className="size-7 rounded-full bg-slate-500 transition-transform hover:scale-110"
        />

        {/* Emerald */}
        <button
          type="button"
          aria-label="Emerald templates"
          className="size-7 rounded-full bg-emerald-500 transition-transform hover:scale-110"
        />

        {/* Coral */}
        <button
          type="button"
          aria-label="Coral templates"
          className="size-7 rounded-full bg-red-400 transition-transform hover:scale-110"
        />

        {/* Navy */}
        <button
          type="button"
          aria-label="Navy templates"
          className="size-7 rounded-full bg-slate-900 transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
}