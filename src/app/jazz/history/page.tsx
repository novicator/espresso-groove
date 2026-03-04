"use client";

import { useRouter } from "next/navigation";

export default function JazzHistoryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#2d1f1a] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] font-bold mb-4">
        Coming Soon
      </h1>
      <p className="text-[#e8c88c]/60 font-[family-name:var(--font-inter)] text-center max-w-sm">
        Our Jazz History page is brewing. Check back soon.
      </p>
      <button
        onClick={() => router.back()}
        className="mt-8 px-6 py-2 rounded-full border border-[#e8c88c]/30 text-[#e8c88c] text-sm font-[family-name:var(--font-inter)]"
      >
        ← Go Back
      </button>
    </div>
  );
}
