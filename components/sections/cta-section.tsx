import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-lg opacity-90">
            몇 분 안에 프로덕션 레디 Next.js 앱을 만들어보세요.
            무료로 사용 가능합니다.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-8"
            >
              시작하기 무료
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Github className="h-4 w-4" />
              GitHub 보기
            </Button>
          </div>

          <p className="mt-6 text-sm opacity-75">
            신용카드 불필요 · 설치 5분 · 즉시 배포 가능
          </p>
        </div>
      </div>
    </section>
  );
}
