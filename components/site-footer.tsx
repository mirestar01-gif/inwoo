import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-white">
      <div className="container-px mx-auto max-w-6xl py-10 text-sm text-[var(--muted)] space-y-4">
        <div className="flex flex-col gap-1">
          <span className="font-extrabold text-[var(--ink)] text-base">인우테크</span>
          <span>복합기·프린터 렌탈 / 설치 / AS · 구로 · 가산디지털단지 · 광명</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <p>대표자명 · 사업자등록번호 · 주소 등은 준비 중입니다. (사업자 정보 확정 후 표기 예정)</p>
          <p>대표 전화 · 이메일 등 연락처는 상담 신청 폼을 통해 안내드립니다.</p>
        </div>

        <p className="text-xs">
          본 사이트에 표시된 렌탈료, 설치사례, 고객 후기는 화면 구성을 보여주기 위한 샘플이며 실제 가격·사례가
          아닙니다. 정확한 견적은{" "}
          <Link href="/quote" className="text-[var(--brand)] underline underline-offset-2">
            무료 견적 신청
          </Link>
          을 통해 상담 후 안내드립니다.
        </p>

        <p className="text-xs">© {new Date().getFullYear()} 인우테크. (준비 중인 웹사이트 시안입니다)</p>
      </div>
    </footer>
  );
}
