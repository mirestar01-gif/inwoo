"use client";

import Link from "next/link";
import { myDevices, myContracts, supportTickets, formatWon } from "@/lib/data";

export default function PortalDashboard() {
  const activeTickets = supportTickets.filter((t) => t.status !== "완료");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">내 대시보드</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          보유 기기, 계약 정보, AS·토너 접수 현황을 한눈에 확인하세요. (샘플 데이터)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">보유 기기</p>
          <p className="mt-1 text-3xl font-extrabold text-[var(--ink)]">{myDevices.length}대</p>
          <Link href="/portal/devices" className="text-sm text-[var(--brand)] font-semibold mt-2 inline-block">
            기기 목록 보기 →
          </Link>
        </div>
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">이용중인 계약</p>
          <p className="mt-1 text-3xl font-extrabold text-[var(--ink)]">{myContracts.length}건</p>
          <Link href="/portal/contract" className="text-sm text-[var(--brand)] font-semibold mt-2 inline-block">
            계약 정보 보기 →
          </Link>
        </div>
        <div className="card p-5">
          <p className="text-sm text-[var(--muted)]">진행중 AS·토너 접수</p>
          <p className="mt-1 text-3xl font-extrabold text-[var(--ink)]">{activeTickets.length}건</p>
          <Link href="/portal/support" className="text-sm text-[var(--brand)] font-semibold mt-2 inline-block">
            접수 내역 보기 →
          </Link>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[var(--ink)]">이번 달 예상 렌탈료</h2>
          <span className="badge-sample">샘플 데이터</span>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-[var(--ink)]">
          {formatWon(myContracts.reduce((sum, c) => sum + c.monthlyFee, 0))}
        </p>
        <p className="text-xs text-[var(--muted)] mt-1">부가세 별도 · 실제 청구 금액은 계약서 기준으로 안내됩니다.</p>
      </div>

      <div className="card p-5">
        <h2 className="font-bold text-[var(--ink)]">최근 접수 내역</h2>
        <div className="mt-3 space-y-2">
          {supportTickets.map((t) => (
            <div key={t.id} className="flex items-center justify-between text-sm border-b border-[var(--line)] pb-2 last:border-none last:pb-0">
              <div>
                <p className="font-semibold text-[var(--ink)]">{t.type} · {t.deviceName}</p>
                <p className="text-[var(--muted)] text-xs">{t.requestedAt}</p>
              </div>
              <span
                className={`text-xs font-semibold rounded-full px-2.5 py-1 ${
                  t.status === "완료"
                    ? "bg-emerald-50 text-emerald-600"
                    : t.status === "처리중"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
