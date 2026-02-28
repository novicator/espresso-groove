import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url('/images/background.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-[#1a1310]/60 pointer-events-none" />
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl md:text-8xl font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-tight mb-4"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
        >
          {title}
        </h1>
        <p
          className="text-3xl md:text-5xl font-[family-name:var(--font-bebas-neue)] text-[#e8c88c]/70 tracking-[0.2em] uppercase mb-10"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          Coming Soon
        </p>
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-[#e05620] noisy text-[#e8c88c] font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide hover:scale-105 transition-transform inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
