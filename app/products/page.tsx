import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { products, formatWon, type ProductType } from "@/lib/data";

const types: ProductType[] = ["복합기(흑백)", "복합기(컬러)", "프린터(흑백)", "프린터(레이저 컬러)"];

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-6xl py-10">
          <span className="badge-sample">임시 데이터 · 실제 가격 아님</span>
          <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-[var(--ink)]">렌탈 상품 안내</h1>
          <p className="mt-2 text-sm md:text-base text-[var(--muted)] max-w-2xl">
            흑백/컬러 복합기와 프린터 라인업입니다. 아래 월 렌탈료는 화면 구성을 위한 <b>샘플 가격</b>이며,
            실제 렌탈료는 사무실 환경(출력량, 계약기간, 옵션 등)에 따라 상담 후 확정됩니다.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {types.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[var(--ink)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.id} className="card p-5 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{p.image}</div>
                  <span className="badge-sample">샘플가</span>
                </div>
                <span className="mt-3 text-xs font-semibold text-[var(--brand)]">{p.type}</span>
                <h3 className="mt-1 font-bold text-[var(--ink)] text-lg">{p.name}</h3>
                <p className="text-xs text-[var(--muted)]">{p.brand} · {p.speed}</p>

                <div className="mt-3 text-2xl font-extrabold text-[var(--ink)]">
                  월 {formatWon(p.monthlyFrom)}~
                </div>
                <p className="text-xs text-[var(--muted)]">부가세 별도 · 계약조건에 따라 변동 (샘플)</p>

                <ul className="mt-3 space-y-1 text-sm text-[var(--ink)]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="text-[var(--accent)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs text-[var(--muted)]">추천: {p.recommendedFor}</p>

                <Link href={`/quote?product=${p.id}`} className="btn btn-primary btn-sm mt-4">
                  이 상품으로 견적 요청
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 card p-5 bg-[var(--brand-light)] border-none">
            <p className="text-sm text-[var(--ink)]">
              원하는 기종이 목록에 없거나 사무실 환경에 맞는 추천이 필요하신가요?{" "}
              <Link href="/quote" className="text-[var(--brand)] font-bold underline underline-offset-2">
                무료 견적 신청
              </Link>{" "}
              시 인원수와 출력 환경을 알려주시면 맞춤 상담을 도와드립니다.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
