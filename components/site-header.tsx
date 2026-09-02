"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/products", label: "렌탈 상품" },
  { href: "/quote", label: "무료 견적" },
  { href: "/support", label: "AS·토너 접수" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[var(--line)]">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="인우테크" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[var(--ink)]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--brand)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="btn btn-ghost btn-sm">
            고객 로그인
          </Link>
          <Link href="/quote" className="btn btn-primary btn-sm">
            무료 견적 받기
          </Link>
        </div>

        <button
          aria-label="메뉴 열기"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)]"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-white">
          <nav className="container-px mx-auto max-w-6xl py-3 flex flex-col gap-1 text-sm font-semibold text-[var(--ink)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 px-2 rounded-lg hover:bg-[var(--brand-light)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="btn btn-ghost btn-sm flex-1" onClick={() => setOpen(false)}>
                고객 로그인
              </Link>
              <Link href="/quote" className="btn btn-primary btn-sm flex-1" onClick={() => setOpen(false)}>
                무료 견적
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
