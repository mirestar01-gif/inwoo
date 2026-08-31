"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { supportTickets as initialTickets } from "@/lib/data";

const statusColor: Record<string, string> = {
  접수완료: "bg-blue-50 text-blue-600",
  처리중: "bg-amber-50 text-amber-600",
  완료: "bg-emerald-50 text-emerald-600",
};

export default function PortalSupportContent() {
  const searchParams = useSearchParams();
  const presetDevice = searchParams.get("device") ?? "";

  const [tickets, setTickets] = useState(initialTickets);
  const [form, setForm] = useState({
    type: "AS 요청" as "AS 요청" | "토너 교체",
    deviceName: presetDevice,
    memo: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.deviceName) return;
    setTickets((prev) => [
      {
        id: `local-${Date.now()}`,
        type: form.type,
        deviceName: form.deviceName,
        status: "접수완료",
        requestedAt: new Date().toISOString().slice(0, 10),
        memo: form.memo,
      },
      ...prev,
    ]);
    setForm({ type: "AS 요청", deviceName: "", memo: "" });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">AS·토너 접수</h1>
        <span className="badge-sample">샘플 화면 · 새로고침 시 초기화</span>
      </div>

      <form onSubmit={submit} className="card p-5 space-y-4">
        <h2 className="font-bold text-[var(--ink)]">새 접수</h2>
        <div className="flex gap-2">
          {(["AS 요청", "토너 교체"] as const).map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm((f) => ({ ...f, type: opt }))}
              className={`btn btn-sm ${form.type === opt ? "btn-primary" : "btn-ghost"}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <div>
          <label className="field-label">기기명 *</label>
          <input
            className="input"
            placeholder="예) A3 컬러 복합기 미드레인지"
            value={form.deviceName}
            onChange={(e) => setForm((f) => ({ ...f, deviceName: e.target.value }))}
          />
        </div>
        <div>
          <label className="field-label">증상 / 요청 내용</label>
          <textarea
            className="input min-h-20"
            value={form.memo}
            onChange={(e) => setForm((f) => ({ ...f, memo: e.target.value }))}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!form.deviceName}>
          접수하기
        </button>
      </form>

      <div className="space-y-3">
        <h2 className="font-bold text-[var(--ink)]">접수 내역</h2>
        {tickets.map((t) => (
          <div key={t.id} className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-[var(--ink)]">{t.type} · {t.deviceName}</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">{t.requestedAt}</p>
              </div>
              <span className={`text-xs font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${statusColor[t.status]}`}>
                {t.status}
              </span>
            </div>
            {t.memo && <p className="mt-2 text-sm text-[var(--muted)]">{t.memo}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
