"use client";

import { adminSchedule } from "@/lib/data";

const typeColor: Record<string, string> = {
  설치: "bg-blue-50 text-blue-600",
  "AS 방문": "bg-amber-50 text-amber-600",
  "토너 배송": "bg-emerald-50 text-emerald-600",
};

export default function AdminSchedulePage() {
  const grouped = adminSchedule.reduce<Record<string, typeof adminSchedule>>((acc, item) => {
    (acc[item.date] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">접수·방문 일정 관리</h1>
        <span className="badge-sample">샘플 데이터</span>
      </div>

      <div className="space-y-4">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date} className="card p-5">
            <h2 className="font-bold text-[var(--ink)]">{date}</h2>
            <div className="mt-3 space-y-2">
              {items.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between gap-3 text-sm border-b border-[var(--line)] pb-2 last:border-none last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${typeColor[s.type]}`}>
                      {s.type}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--ink)]">{s.company}</p>
                      <p className="text-xs text-[var(--muted)]">{s.time} · {s.address}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${
                      s.status === "완료" ? "bg-gray-100 text-gray-500" : "bg-[var(--brand-light)] text-[var(--brand)]"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--muted)]">
        일정 등록/배정, 기사 배정 등의 기능은 추후 데이터베이스 연동과 함께 제공될 예정입니다.
      </p>
    </div>
  );
}
