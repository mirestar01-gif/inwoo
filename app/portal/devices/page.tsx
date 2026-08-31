"use client";

import Link from "next/link";
import { myDevices } from "@/lib/data";

const statusColor: Record<string, string> = {
  정상: "bg-emerald-50 text-emerald-600",
  점검예정: "bg-amber-50 text-amber-600",
  "토너부족(예시)": "bg-red-50 text-red-600",
};

export default function DevicesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">내 기기</h1>
        <span className="badge-sample">샘플 데이터</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {myDevices.map((d) => (
          <div key={d.id} className="card p-5">
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-[var(--ink)]">{d.productName}</h3>
              <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${statusColor[d.status]}`}>
                {d.status}
              </span>
            </div>
            <dl className="mt-3 text-sm text-[var(--muted)] space-y-1">
              <div className="flex justify-between"><dt>일련번호</dt><dd className="text-[var(--ink)]">{d.serial}</dd></div>
              <div className="flex justify-between"><dt>설치 위치</dt><dd className="text-[var(--ink)]">{d.location}</dd></div>
              <div className="flex justify-between"><dt>설치일</dt><dd className="text-[var(--ink)]">{d.installedAt}</dd></div>
            </dl>
            <Link
              href={`/portal/support?device=${encodeURIComponent(d.productName)}`}
              className="btn btn-secondary btn-sm mt-4 w-full"
            >
              이 기기로 AS·토너 접수
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
