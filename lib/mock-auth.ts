"use client";

// ------------------------------------------------------------------
// 데모용 로그인 상태 관리 (Mock Auth)
// ------------------------------------------------------------------
// 이 모듈은 실제 인증 시스템이 아닙니다.
// - 비밀번호는 어디에도 저장/전송/비교하지 않습니다. (입력값을 그대로 버립니다)
// - 세션은 브라우저 localStorage 에만 저장되는 화면 시연용 상태입니다.
// - 실제 서비스 적용 시 Supabase Auth(이메일/비밀번호, 매직링크 등)로
//   교체하는 것을 전제로 화면 흐름만 미리 구성해 둔 것입니다.
//   교체 지점: login()과 이 파일 전체를 Supabase Auth 클라이언트 호출로 대체하면 됩니다.
// ------------------------------------------------------------------

export type Role = "customer" | "admin";

export interface MockSession {
  email: string;
  role: Role;
  loggedInAt: string;
}

const KEY = "inwootech_demo_session";

export function getSession(): MockSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MockSession;
  } catch {
    return null;
  }
}

// email만 세션에 남기고, password 인자는 저장하지 않습니다(데모 목적).
export function login(email: string, _password: string, role: Role = "customer"): MockSession {
  const session: MockSession = {
    email,
    role,
    loggedInAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(session));
  }
  return session;
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(KEY);
  }
}
