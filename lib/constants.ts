// 사이트 기본 정보
export const SITE_CONFIG = {
  name: "StarterKit",
  description: "Next.js 기반의 현대적인 웹 애플리케이션 스타터킷",
  url: "https://example.com",
};

// 네비게이션 링크
export const NAV_LINKS = [
  { label: "기능", href: "#features" },
  { label: "후기", href: "#testimonials" },
  { label: "시작하기", href: "#cta" },
];

// Footer 링크 그룹
export const FOOTER_LINKS = [
  {
    title: "제품",
    links: [
      { label: "기능 소개", href: "#features" },
      { label: "가격 안내", href: "#pricing" },
      { label: "로드맵", href: "#roadmap" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "소개", href: "#about" },
      { label: "블로그", href: "#blog" },
      { label: "채용", href: "#careers" },
    ],
  },
  {
    title: "지원",
    links: [
      { label: "문서", href: "#docs" },
      { label: "FAQ", href: "#faq" },
      { label: "문의하기", href: "#contact" },
    ],
  },
];

// 기능 소개 데이터
export const FEATURES = [
  {
    icon: "Zap",
    title: "빠른 성능",
    description:
      "Next.js 15 App Router와 React Server Components로 최적화된 성능을 경험하세요.",
  },
  {
    icon: "Shield",
    title: "안전한 보안",
    description:
      "최신 보안 표준을 적용하여 사용자 데이터를 안전하게 보호합니다.",
  },
  {
    icon: "Palette",
    title: "다크모드 지원",
    description:
      "시스템 설정에 자동으로 맞춰지는 다크모드로 눈의 피로를 줄이세요.",
  },
  {
    icon: "Smartphone",
    title: "완전한 반응형",
    description:
      "모든 화면 크기에 최적화된 반응형 디자인으로 어디서든 편리하게 사용하세요.",
  },
  {
    icon: "Code2",
    title: "TypeScript 기반",
    description:
      "타입 안정성으로 버그를 사전에 방지하고 개발 생산성을 높이세요.",
  },
  {
    icon: "Layers",
    title: "컴포넌트 시스템",
    description:
      "ShadcnUI 기반의 일관된 컴포넌트 시스템으로 빠르게 UI를 구성하세요.",
  },
];

// 사용자 후기 데이터
export const TESTIMONIALS = [
  {
    name: "김민준",
    role: "프론트엔드 개발자",
    company: "테크스타트업",
    content:
      "이 스타터킷 덕분에 프로젝트 초기 설정 시간을 대폭 줄일 수 있었습니다. 다크모드와 반응형 디자인이 이미 구현되어 있어 핵심 기능 개발에만 집중할 수 있었어요.",
    avatar: "KM",
  },
  {
    name: "이서연",
    role: "풀스택 개발자",
    company: "디지털에이전시",
    content:
      "ShadcnUI와 TailwindCSS의 조합이 정말 훌륭합니다. 커스터마이징이 쉽고 코드 품질도 높아서 팀 전체가 만족하고 있습니다.",
    avatar: "LS",
  },
  {
    name: "박도현",
    role: "CTO",
    company: "SaaS 스타트업",
    content:
      "Next.js 15와 TypeScript 기반으로 안정적인 프로덕션 환경을 빠르게 구축할 수 있었습니다. 새 프로젝트를 시작할 때마다 이 스타터킷을 사용합니다.",
    avatar: "PD",
  },
];
