"use client";

import { useState, useRef, useEffect } from "react";
import { CONTACT_CATEGORIES } from "../lib/contact";

type Size = "mobile" | "mobileLocked" | "tabletLocked" | "desktop" | "desktopLocked" | "xl" | "xlLocked";

const sizes: Record<Size, {
  padding: string;
  paddingRight: string;
  fontSize: string;
  chevronSize: string;
  chevronRight: string;
  panelGap: string;
  optionPadding: string;
  optionFontSize: string;
}> = {
  mobile: {
    padding: '3vw',
    paddingRight: '10vw',
    fontSize: '4vw',
    chevronSize: '3vw',
    chevronRight: '3vw',
    panelGap: '1vw',
    optionPadding: '1.8vw 3vw',
    optionFontSize: '3.5vw',
  },
  mobileLocked: {
    padding: '11px',
    paddingRight: '36.7px',
    fontSize: '14.7px',
    chevronSize: '11px',
    chevronRight: '11px',
    panelGap: '3.7px',
    optionPadding: '6.6px 11px',
    optionFontSize: '12.8px',
  },
  tabletLocked: {
    padding: '12px',
    paddingRight: '34px',
    fontSize: '15px',
    chevronSize: '12px',
    chevronRight: '12px',
    panelGap: '4px',
    optionPadding: '8px 12px',
    optionFontSize: '14px',
  },
  desktop: {
    padding: '1vw',
    paddingRight: '3vw',
    fontSize: '1.3vw',
    chevronSize: '1vw',
    chevronRight: '1vw',
    panelGap: '0.3vw',
    optionPadding: '0.55vw 1vw',
    optionFontSize: '1.15vw',
  },
  desktopLocked: {
    padding: '11.8px',
    paddingRight: '35.3px',
    fontSize: '15.3px',
    chevronSize: '11.8px',
    chevronRight: '11.8px',
    panelGap: '3.6px',
    optionPadding: '6.4px 11.8px',
    optionFontSize: '13.6px',
  },
  xl: {
    padding: '14px',
    paddingRight: '40px',
    fontSize: '18px',
    chevronSize: '14px',
    chevronRight: '14px',
    panelGap: '4px',
    optionPadding: '8px 14px',
    optionFontSize: '15px',
  },
  xlLocked: {
    padding: '11px',
    paddingRight: '32px',
    fontSize: '15px',
    chevronSize: '11px',
    chevronRight: '11px',
    panelGap: '3px',
    optionPadding: '7px 11px',
    optionFontSize: '13px',
  },
};

export default function ContactDropdown({ size = "mobile", name = "category", defaultValue = "general" }: { size?: Size; name?: string; defaultValue?: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const selected = CONTACT_CATEGORIES.find((c) => c.value === value) ?? CONTACT_CATEGORIES[0];
  const s = sizes[size];

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Inquiry type"
        className="contact-input w-full text-left text-white rounded-lg font-[family-name:var(--font-inter)] cursor-pointer"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 5 4-5z' fill='white'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `right ${s.chevronRight} center`,
          backgroundSize: s.chevronSize,
          border: '1px solid rgba(255,255,255,0.25)',
          padding: s.padding,
          paddingRight: s.paddingRight,
          fontSize: s.fontSize,
        }}
      >
        {selected.label}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 z-20 rounded-lg"
          style={{
            top: `calc(100% + ${s.panelGap})`,
            backgroundColor: '#2d1f1a',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.45)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {CONTACT_CATEGORIES.map((c) => {
            const isSelected = c.value === value;
            return (
              <li key={c.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => { setValue(c.value); setOpen(false); }}
                  className="w-full text-left text-white font-[family-name:var(--font-inter)] cursor-pointer"
                  style={{
                    padding: s.optionPadding,
                    fontSize: s.optionFontSize,
                    background: isSelected ? 'rgba(255,255,255,0.12)' : 'transparent',
                    border: 0,
                  }}
                  onMouseEnter={(e) => { if (!isSelected) (e.currentTarget.style.background = 'rgba(255,255,255,0.06)'); }}
                  onMouseLeave={(e) => { if (!isSelected) (e.currentTarget.style.background = 'transparent'); }}
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
