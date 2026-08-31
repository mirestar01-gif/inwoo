"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { login, type Role } from "@/lib/mock-auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("customer");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    // 데모 로그인: 비밀번호 값은 저장/검증하지 않고 그대로 버립니다.
    login(email, password, role);
    router.push(role === "admin" ? "/admin" : "/portal");
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--background)]">
        <section className="container-px mx-auto max-w-md py-10 md:py-16">
          <h1 className="text-2xl font-extrabold text-[var(--ink)] text-center">고객 로그인</h1>
          <p className="mt-2 text-sm text-[var(--muted)] text-center">
            로그인하시면 계약 정보, 보유 기기, AS·토너 접수 내역을 확인할 수 있습니다.
          </p>

          <form onSubmit={handleSubmit} className="card p-6 mt-6 space-y-4">
            <div>
              <label className="field-label">이메일</label>
              <input
                type="email"
                className="input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="field-label">비밀번호</label>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="field-label">데모 모드로 둘러볼 화면</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setRole("customer")}
                  className={`btn btn-sm flex-1 ${role === "customer" ? "btn-primary" : "btn-ghost"}`}
                >
                  고객 포털
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`btn btn-sm flex-1 ${role === "admin" ? "btn-primary" : "btn-ghost"}`}
                >
                  관리자 화면
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" className="btn btn-primary w-full">
              로그인
            </button>

            <p className="text-xs text-[var(--muted)] text-center leading-relaxed">
              ⚠️ 현재는 시안 확인용 데모 로그인입니다. 입력하신 비밀번호는 어디에도 저장되지 않으며, 실제 서비스
              오픈 시 안전한 인증 시스템(Supabase Auth 등)으로 교체될 예정입니다.
            </p>
          </form>

          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            아직 계정이 없으신가요?{" "}
            <Link href="/quote" className="text-[var(--brand)] font-semibold underline underline-offset-2">
              무료 견적 신청
            </Link>{" "}
            후 상담을 통해 안내드립니다.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
