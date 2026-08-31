import { Suspense } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import QuoteForm from "./quote-form";

export const metadata = {
  title: "무료 견적 받기 | 인우테크",
};

export default function QuotePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--background)]">
        <section className="container-px mx-auto max-w-2xl py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)]">무료 견적 받기</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            사무실 인원수, 월 출력량, 컬러 사용 여부만 알려주시면 적합한 기종과 예상 렌탈료를 안내해드립니다.
          </p>

          <div className="mt-6">
            <Suspense fallback={<div className="card p-8 text-sm text-[var(--muted)]">불러오는 중...</div>}>
              <QuoteForm />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
