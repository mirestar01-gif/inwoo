import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  serviceStrengths,
  officeRecommendations,
  products,
  testimonials,
  installCases,
  formatWon,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* 히어로 */}
        <section className="bg-gradient-to-b from-[var(--brand-light)] to-white">
          <div className="container-px mx-auto max-w-6xl py-14 md:py-20 text-center">
            <span className="badge-sample bg-white">준비 중인 웹사이트 시안 · 정식 오픈 전</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-[var(--ink)]">
              구로 · 가산디지털단지 · 광명
              <br />
              복합기·프린터 렌탈 / 설치 / AS
            </h1>
            <p className="mt-4 text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto">
              사무실 규모와 출력량에 맞는 복합기·프린터를 합리적인 월 렌탈료로 안내해드립니다.
              설치부터 AS·토너 접수까지 한 곳에서 확인하세요.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/quote" className="btn btn-primary w-full sm:w-auto">
                무료 견적 받기
              </Link>
              <Link href="/support" className="btn btn-secondary w-full sm:w-auto">
                AS·토너 접수
              </Link>
              <Link href="/login" className="btn btn-ghost w-full sm:w-auto">
                고객 로그인
              </Link>
            </div>
          </div>
        </section>

        {/* 서비스 강점 */}
        <section className="container-px mx-auto max-w-6xl py-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">인우테크가 준비하는 서비스</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            지역 밀착 렌탈·AS 서비스를 목표로 아래와 같은 강점을 준비하고 있습니다.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceStrengths.map((s) => (
              <div key={s.title} className="card p-5">
                <div className="text-2xl">{s.icon}</div>
                <h3 className="mt-3 font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 사무실 규모별 추천 */}
        <section className="bg-white border-y border-[var(--line)]">
          <div className="container-px mx-auto max-w-6xl py-14">
            <h2 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">사무실 규모별 추천 구성</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              인원수와 출력 환경에 맞춰 추천드리는 예시 구성이며, 정확한 추천은 상담을 통해 안내드립니다.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {officeRecommendations.map((rec) => (
                <div key={rec.size} className="card p-5 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[var(--ink)]">{rec.size}</h3>
                    <span className="text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2.5 py-1">
                      {rec.headcount}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--muted)] flex-1">{rec.description}</p>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--ink)]">
                    {rec.suggestedProductIds.map((pid) => {
                      const p = products.find((x) => x.id === pid);
                      if (!p) return null;
                      return (
                        <li key={pid} className="flex items-center justify-between gap-2">
                          <span>
                            {p.image} {p.name}
                          </span>
                          <span className="text-[var(--muted)] whitespace-nowrap">
                            월 {formatWon(p.monthlyFrom)}~
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href="/products" className="btn btn-secondary btn-sm mt-4">
                    상품 자세히 보기
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 설치사례 & 후기 */}
        <section className="container-px mx-auto max-w-6xl py-14">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl md:text-2xl font-extrabold text-[var(--ink)]">설치 사례 &amp; 고객 후기</h2>
            <span className="badge-sample">샘플 데이터 · 실제 사례 아님</span>
          </div>
          <p className="mt-1 text-sm text-[var(--muted)]">
            아래 사례와 후기는 화면 구성을 보여주기 위한 예시입니다. 실제 설치사례와 고객 후기는 추후 등록됩니다.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--ink)]">설치 사례 (예시)</h3>
              {installCases.map((c) => (
                <div key={c.id} className="card p-4">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <span className="font-semibold text-[var(--brand)]">{c.area}</span>
                    <span>·</span>
                    <span>{c.officeType}</span>
                  </div>
                  <h4 className="mt-1 font-semibold text-[var(--ink)]">{c.title}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{c.summary}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-[var(--ink)]">고객 후기 (예시)</h3>
              {testimonials.map((t) => (
                <div key={t.id} className="card p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[var(--ink)]">{t.company}</span>
                    <span className="text-amber-500 text-sm">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">“{t.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 연락 및 상담 */}
        <section className="bg-[var(--ink)]">
          <div className="container-px mx-auto max-w-6xl py-14 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold">지금 바로 상담을 신청해보세요</h2>
                <p className="mt-2 text-sm text-white/70 max-w-xl">
                  사무실 인원수와 출력량만 알려주시면 적합한 기종과 예상 월 렌탈료를 안내해드립니다. 대표 연락처는
                  준비 중이며, 아래 견적 신청을 통해 빠르게 상담받으실 수 있습니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn btn-primary">
                  무료 견적 받기
                </Link>
                <Link href="/support" className="btn btn-ghost !bg-transparent !text-white !border-white/40">
                  AS·토너 접수
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
