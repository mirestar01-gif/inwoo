"use client";

import { products, formatWon } from "@/lib/data";

export default function AdminProductsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">상품 관리</h1>
        <span className="badge-sample">샘플 데이터</span>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-light)] text-[var(--ink)]">
              <tr>
                <th className="text-left font-semibold px-4 py-3">상품명</th>
                <th className="text-left font-semibold px-4 py-3">구분</th>
                <th className="text-left font-semibold px-4 py-3">월 렌탈료(샘플)</th>
                <th className="text-left font-semibold px-4 py-3">속도</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-[var(--line)]">
                  <td className="px-4 py-3 font-medium text-[var(--ink)] whitespace-nowrap">
                    {p.image} {p.name}
                  </td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{p.type}</td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{formatWon(p.monthlyFrom)}~</td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{p.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="btn btn-primary btn-sm" disabled>
        + 새 상품 등록 (준비 중)
      </button>
      <p className="text-xs text-[var(--muted)]">
        상품 등록/수정/가격 관리 기능은 추후 관리자 인증과 함께 연동될 예정입니다.
      </p>
    </div>
  );
}
