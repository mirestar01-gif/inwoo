import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "인우테크 | 구로·가산·광명 복합기·프린터 렌탈",
  description:
    "구로, 가산디지털단지, 광명 지역 복합기·프린터 렌탈/설치/AS. 무료 견적과 빠른 상담을 받아보세요. (준비 중인 사이트 시안)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
