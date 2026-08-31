"use client";

import Link from "next/link";
import { adminCustomers, adminSchedule, supportTickets, products } from "@/lib/data";

export default function AdminDashboard() {
  const todaySchedule = adminSchedule.filter((s) => s.status === "예정");
  const openTickets = supportTickets.filter((t) => t.status !== "완료");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">관리자 대시보드</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">고객, 상품, 접수·방문 일정을 관리하는 화면 골격입니다. (샘플 데이터)</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">등록 고객</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--ink)]">{adminCustomers.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">등록 상품</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--ink)]">{products.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">예정된 일정</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--ink)]">{todaySchedule.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">미처리 접수</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--ink)]">{openTickets.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[var(--ink)]">다가오는 일정</h2>
            <Link href="/admin/schedule" className="text-sm text-[var(--brand)] font-semibold">전체 보기 →</Link>
          </div>
          <div className="mt-3 space-y-2">
            {todaySchedule.slice(0, 4).map((s) => (
              <div key={s.id} className="flex items-center justify-between text-sm border-b border-[var(--line)] pb-2 last:border-none last:pb-0">
                <div>
                  <p className="font-semibold text-[var(--ink)]">{s.type} · {s.company}</p>
                  <p className="text-xs text-[var(--muted)]">{s.date} {s.time}</p>
                </div>
                <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-[var(--brand-light)] text-[var(--brand)]">
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[var(--ink)]">최근 고객</h2>
            <Link href="/admin/customers" className="text-sm text-[var(--brand)] font-semibold">전체 보기 →</Link>
          </div>
          <div className="mt-3 space-y-2">
            {adminCustomers.slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center justify-between text-sm border-b border-[var(--line)] pb-2 last:border-none last:pb-0">
                <div>
                  <p className="font-semibold text-[var(--ink)]">{c.company}</p>
                  <p className="text-xs text-[var(--muted)]">{c.area} · 보유기기 {c.deviceCount}대</p>
                </div>
                <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-emerald-50 text-emerald-600">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
