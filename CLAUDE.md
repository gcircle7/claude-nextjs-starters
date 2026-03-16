# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- 기본 응답 언어: 한국어
- 코드 주석: 한국어
- 커밋 메시지: 한국어
- 변수명/함수명: 영어 (코드 표준 준수)

## Commands

```bash
npm run dev       # 개발 서버 시작 (포트 3000)
npm run build     # 프로덕션 빌드
npm run lint      # ESLint 검사
npx tsc --noEmit  # TypeScript 타입 검사 (빌드 없이)
```

테스트 프레임워크 없음.

## Architecture

**Next.js 16 App Router** 기반 랜딩 페이지 스타터킷.

### 컴포넌트 구조

```
components/
  ui/          # Radix UI 기반 기본 UI 프리미티브 (Button, Badge, Sheet, Separator)
  layout/      # 전역 레이아웃 요소 (Header, Footer, HeaderNav, MobileNav, ThemeToggle)
  sections/    # 랜딩 페이지 섹션 (Hero, Features, Testimonials, CTA)
  providers/   # Context provider 래퍼 (ThemeProvider)
lib/
  constants.ts # 사이트 설정, 네비게이션 링크, 기능 소개, 후기 데이터 (단일 진실 공급원)
  utils.ts     # cn() 유틸리티 (clsx + tailwind-merge)
```

### 핵심 설계 원칙

- **데이터와 UI 분리**: 모든 사이트 콘텐츠(텍스트, 링크, 데이터)는 `lib/constants.ts`에 집중. 컴포넌트는 이 데이터를 import해서 렌더링만 담당.
- **Server/Client 경계**: 기본적으로 Server Component. `useState`, `useTheme` 등 훅을 사용하거나 이벤트 핸들러가 있으면 파일 상단에 `"use client"` 추가. (HeaderNav, MobileNav, ThemeToggle, ThemeProvider가 Client Component)
- **내부 링크**: Next.js `<Link>` 사용 필수. `<a href="...">` 는 앵커(`#`) 링크에만 사용. (`@next/next/no-html-link-for-pages` ESLint 규칙)

### 주요 패키지 특이사항

- **Radix UI**: `@radix-ui/react-*` 개별 패키지가 아닌 `radix-ui` 통합 패키지에서 import. (예: `import { Dialog } from "radix-ui"`)
- **TailwindCSS v4**: `tailwind.config.js` 없음. CSS 기반 설정 방식 사용(`app/globals.css`).
- **Sheet 컴포넌트**: Radix UI의 `Dialog` 프리미티브를 재활용해 Sheet로 구현됨 (`components/ui/sheet.tsx`).
- **다크모드**: `next-themes`로 관리. `ThemeProvider`가 `app/layout.tsx`에서 전체를 감쌈. `html` 태그에 `suppressHydrationWarning` 필수.
