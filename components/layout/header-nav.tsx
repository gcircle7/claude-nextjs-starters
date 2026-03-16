"use client";

import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";

export function HeaderNav() {
  return (
    <div className="flex w-full items-center justify-between">
      {/* 로고 */}
      <Link href="/" className="text-xl font-bold tracking-tight">
        {SITE_CONFIG.name}
      </Link>

      {/* 데스크톱 네비게이션 */}
      <nav className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* 우측 액션 */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button className="hidden md:inline-flex" size="sm">
          시작하기
        </Button>
        <MobileNav />
      </div>
    </div>
  );
}
