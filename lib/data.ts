// 인우테크 목업(샘플) 데이터 모음
// ------------------------------------------------------------------
// 이 파일의 모든 값은 실제 인우테크의 가격/후기/설치사례가 아닌
// 화면 구성을 보여주기 위한 "샘플 데이터"입니다.
// 실제 서비스 전 반드시 실제 값으로 교체해야 합니다.
// ------------------------------------------------------------------

export type ProductType = "복합기(흑백)" | "복합기(컬러)" | "프린터(흑백)" | "프린터(레이저 컬러)";

export interface RentalProduct {
  id: string;
  name: string;
  brand: string;
  type: ProductType;
  monthlyFrom: number; // 원, 샘플 최저가
  speed: string; // 분당 출력매수
  recommendedFor: string;
  features: string[];
  image: string; // emoji placeholder
}

export const products: RentalProduct[] = [
  {
    id: "bw-a4-basic",
    name: "A4 흑백 복합기 스탠다드",
    brand: "샘플브랜드 A",
    type: "복합기(흑백)",
    monthlyFrom: 29000,
    speed: "분당 25매",
    recommendedFor: "1~5인 소규모 사무실",
    features: ["복사/인쇄/스캔", "자동급지(ADF)", "네트워크 프린트"],
    image: "🖨️",
  },
  {
    id: "bw-a4-pro",
    name: "A4 흑백 복합기 프로",
    brand: "샘플브랜드 B",
    type: "복합기(흑백)",
    monthlyFrom: 39000,
    speed: "분당 35매",
    recommendedFor: "6~15인 사무실",
    features: ["양면 자동인쇄", "대용량 급지함", "팩스 옵션"],
    image: "🖨️",
  },
  {
    id: "color-a3-mid",
    name: "A3 컬러 복합기 미드레인지",
    brand: "샘플브랜드 A",
    type: "복합기(컬러)",
    monthlyFrom: 79000,
    speed: "분당 컬러 25매 / 흑백 30매",
    recommendedFor: "10~30인, 디자인·마케팅 문서 多",
    features: ["A3 컬러 출력", "고해상 스캔", "클라우드 연동"],
    image: "🖨️",
  },
  {
    id: "color-a3-high",
    name: "A3 컬러 복합기 하이엔드",
    brand: "샘플브랜드 C",
    type: "복합기(컬러)",
    monthlyFrom: 129000,
    speed: "분당 컬러 35매 / 흑백 40매",
    recommendedFor: "30인 이상, 대량 출력 환경",
    features: ["대용량 토너", "보안 인증 출력", "다중 트레이"],
    image: "🖨️",
  },
  {
    id: "printer-bw",
    name: "A4 흑백 레이저 프린터",
    brand: "샘플브랜드 B",
    type: "프린터(흑백)",
    monthlyFrom: 15000,
    speed: "분당 30매",
    recommendedFor: "개인/팀별 서브 프린터",
    features: ["소형/저소음", "Wi-Fi 지원"],
    image: "📠",
  },
  {
    id: "printer-color",
    name: "A4 레이저 컬러 프린터",
    brand: "샘플브랜드 C",
    type: "프린터(레이저 컬러)",
    monthlyFrom: 25000,
    speed: "분당 컬러 22매",
    recommendedFor: "제안서·인쇄물 소량 컬러 출력",
    features: ["컬러 정밀 출력", "모바일 프린트"],
    image: "📠",
  },
];

export interface OfficeRecommendation {
  size: string;
  headcount: string;
  description: string;
  suggestedProductIds: string[];
}

export const officeRecommendations: OfficeRecommendation[] = [
  {
    size: "소규모 사무실",
    headcount: "1~5인",
    description: "월 출력량이 많지 않은 스타트업, 소규모 사무실에 적합한 구성입니다.",
    suggestedProductIds: ["bw-a4-basic", "printer-bw"],
  },
  {
    size: "중소규모 사무실",
    headcount: "6~15인",
    description: "부서별 출력이 잦은 사무실에 안정적인 흑백/컬러 조합을 추천합니다.",
    suggestedProductIds: ["bw-a4-pro", "printer-color"],
  },
  {
    size: "중대형 사무실",
    headcount: "16인 이상",
    description: "대량 출력과 다양한 문서 형태(제안서, 도면 등)에 대응하는 구성입니다.",
    suggestedProductIds: ["color-a3-mid", "color-a3-high"],
  },
];

export interface Testimonial {
  id: string;
  company: string; // 샘플 상호(가명)
  area: string;
  quote: string;
  rating: number;
}

// ⚠️ 샘플 후기입니다. 실제 고객 후기가 준비되면 교체해 주세요.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    company: "가산 소재 IT스타트업 (예시)",
    area: "가산디지털단지",
    quote: "출력 문제로 연락하면 당일 방문해주셔서 업무 공백이 거의 없었어요. (샘플 문구)",
    rating: 5,
  },
  {
    id: "t2",
    company: "구로 물류 사무소 (예시)",
    area: "구로",
    quote: "렌탈료가 명확하고 토너 교체도 빨라서 만족하고 있습니다. (샘플 문구)",
    rating: 5,
  },
  {
    id: "t3",
    company: "광명 제조업 사무실 (예시)",
    area: "광명",
    quote: "설치 전 상담이 꼼꼼해서 사무실 환경에 맞는 기종을 고를 수 있었어요. (샘플 문구)",
    rating: 4,
  },
];

export interface InstallCase {
  id: string;
  title: string;
  area: string;
  officeType: string;
  summary: string;
}

// ⚠️ 샘플 설치사례입니다. 실제 사례로 교체 전까지 노출 문구에 유의하세요.
export const installCases: InstallCase[] = [
  {
    id: "c1",
    title: "가산디지털단지 IT기업 A3 컬러 복합기 설치 (예시)",
    area: "가산디지털단지",
    officeType: "20인 규모 사무실",
    summary: "제안서/포트폴리오 출력이 많은 사무실에 A3 컬러 복합기 2대를 설치한 예시 사례입니다.",
  },
  {
    id: "c2",
    title: "구로디지털단지 스타트업 흑백 복합기 설치 (예시)",
    area: "구로디지털단지",
    officeType: "8인 규모 사무실",
    summary: "월 출력량이 적은 소규모 팀에 A4 흑백 복합기를 설치한 예시 사례입니다.",
  },
  {
    id: "c3",
    title: "광명 제조 사무실 프린터 다대수 설치 (예시)",
    area: "광명",
    officeType: "부서별 분산 배치",
    summary: "부서마다 개별 프린터가 필요했던 사무실에 흑백/컬러 프린터를 나누어 설치한 예시입니다.",
  },
];

export const serviceStrengths = [
  {
    title: "구로·가산·광명 인근 신속 출동",
    desc: "지역 밀착 서비스로 AS 요청 시 빠르게 방문할 수 있는 구조를 목표로 합니다.",
    icon: "⚡",
  },
  {
    title: "투명한 렌탈료 안내",
    desc: "기종별 예상 월 렌탈료를 미리 확인하고, 상담을 통해 정확한 견적을 받을 수 있습니다.",
    icon: "🧾",
  },
  {
    title: "설치부터 AS·토너까지 원스톱",
    desc: "설치, 유지보수, 토너 교체까지 한 곳에서 관리할 수 있도록 준비하고 있습니다.",
    icon: "🛠️",
  },
  {
    title: "온라인 접수 & 이력 관리",
    desc: "고객 포털을 통해 AS·토너 접수 내역과 계약 정보를 확인할 수 있는 구조를 제공합니다.",
    icon: "💻",
  },
];

// ------- 고객 포털용 목업 데이터 -------
export interface MyDevice {
  id: string;
  productName: string;
  serial: string;
  location: string;
  status: "정상" | "점검예정" | "토너부족(예시)";
  installedAt: string;
}

export const myDevices: MyDevice[] = [
  {
    id: "d1",
    productName: "A3 컬러 복합기 미드레인지",
    serial: "SAMPLE-SN-00123",
    location: "본사 3층 사무실",
    status: "정상",
    installedAt: "2025-03-12",
  },
  {
    id: "d2",
    productName: "A4 흑백 레이저 프린터",
    serial: "SAMPLE-SN-00987",
    location: "본사 3층 회의실",
    status: "토너부족(예시)",
    installedAt: "2024-11-02",
  },
];

export interface MyContract {
  id: string;
  productName: string;
  monthlyFee: number;
  startDate: string;
  endDate: string;
  status: "이용중" | "만료예정";
}

export const myContracts: MyContract[] = [
  {
    id: "ct1",
    productName: "A3 컬러 복합기 미드레인지",
    monthlyFee: 79000,
    startDate: "2025-03-12",
    endDate: "2027-03-11",
    status: "이용중",
  },
  {
    id: "ct2",
    productName: "A4 흑백 레이저 프린터",
    monthlyFee: 15000,
    startDate: "2024-11-02",
    endDate: "2026-11-01",
    status: "이용중",
  },
];

export interface SupportTicket {
  id: string;
  type: "AS 요청" | "토너 교체";
  deviceName: string;
  status: "접수완료" | "처리중" | "완료";
  requestedAt: string;
  memo: string;
}

export const supportTickets: SupportTicket[] = [
  {
    id: "s1",
    type: "토너 교체",
    deviceName: "A4 흑백 레이저 프린터",
    status: "처리중",
    requestedAt: "2026-08-27",
    memo: "토너 부족 알림이 떠서 교체 요청드립니다. (샘플)",
  },
  {
    id: "s2",
    type: "AS 요청",
    deviceName: "A3 컬러 복합기 미드레인지",
    status: "완료",
    requestedAt: "2026-07-14",
    memo: "용지 걸림 현상으로 방문 점검 완료. (샘플)",
  },
];

// ------- 관리자용 목업 데이터 -------
export interface AdminCustomer {
  id: string;
  company: string;
  contact: string;
  area: string;
  deviceCount: number;
  status: "활성" | "휴면(예시)";
}

export const adminCustomers: AdminCustomer[] = [
  { id: "cu1", company: "㈜샘플테크 (예시)", contact: "010-0000-0001", area: "가산디지털단지", deviceCount: 3, status: "활성" },
  { id: "cu2", company: "샘플물류 (예시)", contact: "010-0000-0002", area: "구로", deviceCount: 1, status: "활성" },
  { id: "cu3", company: "샘플제조 (예시)", contact: "010-0000-0003", area: "광명", deviceCount: 5, status: "활성" },
  { id: "cu4", company: "샘플디자인스튜디오 (예시)", contact: "010-0000-0004", area: "가산디지털단지", deviceCount: 2, status: "휴면(예시)" },
];

export interface AdminScheduleItem {
  id: string;
  date: string;
  time: string;
  type: "설치" | "AS 방문" | "토너 배송";
  company: string;
  address: string;
  status: "예정" | "완료";
}

export const adminSchedule: AdminScheduleItem[] = [
  { id: "sc1", date: "2026-09-02", time: "10:00", type: "AS 방문", company: "㈜샘플테크 (예시)", address: "가산디지털단지 (예시 주소)", status: "예정" },
  { id: "sc2", date: "2026-09-02", time: "14:00", type: "토너 배송", company: "샘플물류 (예시)", address: "구로 (예시 주소)", status: "예정" },
  { id: "sc3", date: "2026-09-03", time: "11:00", type: "설치", company: "샘플제조 (예시)", address: "광명 (예시 주소)", status: "예정" },
  { id: "sc4", date: "2026-08-28", time: "13:00", type: "AS 방문", company: "샘플디자인스튜디오 (예시)", address: "가산디지털단지 (예시 주소)", status: "완료" },
];

export function formatWon(v: number) {
  return v.toLocaleString("ko-KR") + "원";
}
