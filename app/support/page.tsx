import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SupportForm from "./support-form";

export const metadata = {
  title: "AS·토너 접수 | 인우테크",
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--background)]">
        <section className="container-px mx-auto max-w-2xl py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)]">AS·토너 접수</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            사용 중인 기기에 문제가 있거나 토너 교체가 필요하면 아래 정보를 남겨주세요. 로그인하시면 접수 내역을
            계속 확인할 수 있습니다.
          </p>

          <div className="mt-6">
            <SupportForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
