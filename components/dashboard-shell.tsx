"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession, logout, type MockSession, type Role } from "@/lib/mock-auth";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

export default function DashboardShell({
  role,
  title,
  navItems,
  children,
}: {
  role: Role;
  title: string;
  navItems: NavItem[];
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const [session] = useState<MockSession | null>(() => getSession());

  useEffect(() => {
    if (!session || session.role !== role) {
      router.replace("/login");
      return;
    }
    // 로그인 상태는 클라이언트(localStorage)에서만 확인할 수 있어 마운트 이후 1회 갱신합니다.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecked(true);
  }, [role, router, session]);

  if (!checked || !session || session.role !== role) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-[var(--muted)]">
        확인 중...
      </div>
    );
  }
  if (!session) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <header className="sticky top-0 z-40 bg-white border-b border-[var(--line)]">
        <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="인우테크" className="h-7 w-auto" />
            <span className="text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2 py-0.5">
              {title}
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm text-[var(--muted)]">{session.email}</span>
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="btn btn-ghost btn-sm"
            >
              로그아웃
            </button>
          </div>
        </div>
        <nav className="container-px mx-auto max-w-6xl flex gap-1 overflow-x-auto pb-2 text-sm font-semibold">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${
                  active ? "bg-[var(--brand)] text-white" : "text-[var(--ink)] hover:bg-[var(--brand-light)]"
                }`}
              >
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1 container-px mx-auto max-w-6xl w-full py-6">{children}</main>
    </div>
  );
}
