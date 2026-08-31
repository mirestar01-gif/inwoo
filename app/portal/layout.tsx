"use client";

import DashboardShell from "@/components/dashboard-shell";

const navItems = [
  { href: "/portal", label: "대시보드", icon: "🏠" },
  { href: "/portal/devices", label: "내 기기", icon: "🖨️" },
  { href: "/portal/contract", label: "계약 정보", icon: "📄" },
  { href: "/portal/support", label: "AS·토너 접수", icon: "🛠️" },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="customer" title="고객 포털" navItems={navItems}>
      {children}
    </DashboardShell>
  );
}
