"use client";

import Link from "next/link";
import { useState } from "react";

export default function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    type: "AS 요청",
    company: "",
    deviceModel: "",
    symptom: "",
    name: "",
    phone: "",
    agree: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.agree) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl">🛠️</div>
        <h2 className="mt-3 text-xl font-extrabold text-[var(--ink)]">접수가 완료되었습니다 (샘플 화면)</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          담당자가 확인 후 순차적으로 연락드리는 흐름을 계획하고 있습니다.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          접수 내역을 계속 확인하고 싶다면{" "}
          <Link href="/login" className="text-[var(--brand)] font-bold underline underline-offset-2">
            고객 로그인
          </Link>{" "}
          후 고객 포털에서 관리할 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-5 md:p-8 space-y-5">
      <div>
        <label className="field-label">접수 유형</label>
        <div className="flex gap-2">
          {["AS 요청", "토너 교체"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => update("type", opt)}
              className={`btn btn-sm ${form.type === opt ? "btn-primary" : "btn-ghost"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="field-label">회사/사무실명</label>
        <input
          className="input"
          placeholder="예) 인우테크 사무실"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div>
        <label className="field-label">기기 모델명 (아는 경우)</label>
        <input
          className="input"
          placeholder="예) A3 컬러 복합기 미드레인지"
          value={form.deviceModel}
          onChange={(e) => update("deviceModel", e.target.value)}
        />
      </div>

      <div>
        <label className="field-label">증상 / 요청 내용</label>
        <textarea
          className="input min-h-24"
          placeholder="예) 토너 부족 알림이 떠요 / 용지가 자꾸 걸려요"
          value={form.symptom}
          onChange={(e) => update("symptom", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="field-label">담당자명 *</label>
          <input
            required
            className="input"
            placeholder="홍길동"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label">연락처 *</label>
          <input
            required
            className="input"
            placeholder="010-0000-0000"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <label className="flex items-start gap-2 text-xs text-[var(--muted)]">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={form.agree}
          onChange={(e) => update("agree", e.target.checked)}
        />
        (필수) AS/토너 접수 처리를 위한 개인정보 수집·이용에 동의합니다. 이 시안에서는 실제로 저장·전송되지
        않습니다.
      </label>

      <button type="submit" className="btn btn-primary w-full" disabled={!form.name || !form.phone || !form.agree}>
        접수하기
      </button>
    </form>
  );
}
