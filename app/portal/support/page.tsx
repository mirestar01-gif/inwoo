"use client";

import { Suspense } from "react";
import PortalSupportContent from "./support-content";

export default function PortalSupportPage() {
  return (
    <Suspense fallback={<div className="text-sm text-[var(--muted)]">불러오는 중...</div>}>
      <PortalSupportContent />
    </Suspense>
  );
}
