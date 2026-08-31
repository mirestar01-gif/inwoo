"use client";

import DashboardShell from "@/components/dashboard-shell";

const navItems = [
  { href: "/admin", label: "대시보드", icon: "🏠" },
  { href: "/admin/customers", label: "고객 관리", icon: "🏢" },
  { href: "/admin/products", label: "상품 관리", icon: "🖨️" },
  { href: "/admin/schedule", label: "접수·방문 일정", icon: "📅" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="admin" title="관리자" navItems={navItems}>
      {children}
    </DashboardShell>
  );
}
