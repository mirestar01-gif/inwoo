"use client";

import { myContracts, formatWon } from "@/lib/data";

export default function ContractPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">계약 정보</h1>
        <span className="badge-sample">샘플 데이터</span>
      </div>

      <div className="space-y-4">
        {myContracts.map((c) => (
          <div key={c.id} className="card p-5">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="font-bold text-[var(--ink)]">{c.productName}</h3>
              <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-[var(--brand-light)] text-[var(--brand)]">
                {c.status}
              </span>
            </div>
            <dl className="mt-3 text-sm text-[var(--muted)] grid grid-cols-2 gap-y-1">
              <dt>월 렌탈료</dt>
              <dd className="text-[var(--ink)] text-right font-semibold">{formatWon(c.monthlyFee)}</dd>
              <dt>계약 시작일</dt>
              <dd className="text-[var(--ink)] text-right">{c.startDate}</dd>
              <dt>계약 종료일</dt>
              <dd className="text-[var(--ink)] text-right">{c.endDate}</dd>
            </dl>
          </div>
        ))}
      </div>

      <div className="card p-5 bg-[var(--brand-light)] border-none text-sm text-[var(--ink)]">
        계약서 원문 열람, 계약 연장/변경 신청 등은 추후 제공될 예정입니다. 지금은 화면 구성만 준비된 상태입니다.
      </div>
    </div>
  );
}
