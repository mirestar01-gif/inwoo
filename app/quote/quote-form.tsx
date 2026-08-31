"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/data";

const headcountOptions = ["1~5인", "6~15인", "16~30인", "31인 이상"];
const volumeOptions = ["1,000매 이하", "1,000~3,000매", "3,000~10,000매", "10,000매 이상"];

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const preselected = products.find((p) => p.id === productId);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    headcount: headcountOptions[0],
    volume: volumeOptions[0],
    useColor: "예",
    name: "",
    phone: "",
    memo: preselected ? `관심 상품: ${preselected.name}` : "",
    agree: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.agree) return;
    // 실제 서비스에서는 이 값들을 서버(API 라우트/Supabase)로 전송합니다.
    // 현재 버전은 화면 흐름 확인용 목업이며, 값을 저장하거나 전송하지 않습니다.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl">✅</div>
        <h2 className="mt-3 text-xl font-extrabold text-[var(--ink)]">견적 요청이 접수되었습니다 (샘플 화면)</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          담당자가 입력하신 연락처로 확인 후 연락드리는 흐름을 계획하고 있습니다. 실제 상담원 연결/문자 발송 기능은
          추후 연동될 예정입니다.
        </p>
        <div className="mt-5 text-left text-sm bg-[var(--brand-light)] rounded-xl p-4 space-y-1">
          <p><b>회사/사무실명:</b> {form.company || "-"}</p>
          <p><b>인원수:</b> {form.headcount}</p>
          <p><b>월 출력량:</b> {form.volume}</p>
          <p><b>컬러 사용 여부:</b> {form.useColor}</p>
          <p><b>담당자명:</b> {form.name}</p>
          <p><b>연락처:</b> {form.phone}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-5 md:p-8 space-y-5">
      {preselected && (
        <div className="text-sm bg-[var(--brand-light)] rounded-lg px-3 py-2 text-[var(--ink)]">
          선택한 상품: <b>{preselected.name}</b>
        </div>
      )}

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
        <label className="field-label">사무실 인원수</label>
        <div className="grid grid-cols-2 gap-2">
          {headcountOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => update("headcount", opt)}
              className={`btn btn-sm ${form.headcount === opt ? "btn-primary" : "btn-ghost"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="field-label">월 출력량 (예상)</label>
        <div className="grid grid-cols-2 gap-2">
          {volumeOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => update("volume", opt)}
              className={`btn btn-sm ${form.volume === opt ? "btn-primary" : "btn-ghost"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="field-label">컬러 출력 사용 여부</label>
        <div className="flex gap-2">
          {["예", "아니오", "잘 모르겠음"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => update("useColor", opt)}
              className={`btn btn-sm ${form.useColor === opt ? "btn-primary" : "btn-ghost"}`}
            >
              {opt}
            </button>
          ))}
        </div>
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

      <div>
        <label className="field-label">문의 내용 (선택)</label>
        <textarea
          className="input min-h-24"
          placeholder="추가로 전달하고 싶은 내용을 남겨주세요."
          value={form.memo}
          onChange={(e) => update("memo", e.target.value)}
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-[var(--muted)]">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={form.agree}
          onChange={(e) => update("agree", e.target.checked)}
        />
        (필수) 상담을 위한 개인정보 수집·이용에 동의합니다. 입력하신 정보는 견적 상담 목적으로만 사용되며, 이
        시안에서는 실제로 저장·전송되지 않습니다.
      </label>

      <button type="submit" className="btn btn-primary w-full" disabled={!form.name || !form.phone || !form.agree}>
        무료 견적 요청하기
      </button>
    </form>
  );
}
