"use client";

import { adminCustomers } from "@/lib/data";

export default function AdminCustomersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">고객 관리</h1>
        <span className="badge-sample">샘플 데이터</span>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-light)] text-[var(--ink)]">
              <tr>
                <th className="text-left font-semibold px-4 py-3">회사명</th>
                <th className="text-left font-semibold px-4 py-3">연락처</th>
                <th className="text-left font-semibold px-4 py-3">지역</th>
                <th className="text-left font-semibold px-4 py-3">보유기기</th>
                <th className="text-left font-semibold px-4 py-3">상태</th>
              </tr>
            </thead>
            <tbody>
              {adminCustomers.map((c) => (
                <tr key={c.id} className="border-t border-[var(--line)]">
                  <td className="px-4 py-3 font-medium text-[var(--ink)] whitespace-nowrap">{c.company}</td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{c.contact}</td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{c.area}</td>
                  <td className="px-4 py-3 text-[var(--muted)] whitespace-nowrap">{c.deviceCount}대</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`text-xs font-semibold rounded-full px-2.5 py-1 ${
                        c.status === "활성" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-[var(--muted)]">
        고객 등록/수정, 상세 계약 이력 등은 추후 Supabase 연동과 함께 제공될 예정입니다.
      </p>
    </div>
  );
}
