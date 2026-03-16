import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* 배경 그라디언트 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 text-center md:px-6">
        <Badge variant="secondary" className="mb-6 gap-1.5">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span>Next.js 15 스타터킷 출시</span>
        </Badge>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          빠르게 시작하는
          <br />
          <span className="text-primary">현대적인 웹 개발</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Next.js 15, TypeScript, TailwindCSS, ShadcnUI로 구성된 프로덕션
          레디 스타터킷. 다크모드, 반응형 디자인, 최적화된 성능이 모두
          포함되어 있습니다.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 px-8">
            지금 시작하기
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            문서 보기
          </Button>
        </div>

        {/* 소셜 프루프 */}
        <p className="mt-8 text-sm text-muted-foreground">
          이미{" "}
          <span className="font-semibold text-foreground">1,000+</span>명의
          개발자가 사용 중
        </p>
      </div>
    </section>
  );
}
