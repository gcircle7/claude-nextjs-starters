import {
  Zap,
  Shield,
  Palette,
  Smartphone,
  Code2,
  Layers,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

// 아이콘 매핑
const iconMap = {
  Zap,
  Shield,
  Palette,
  Smartphone,
  Code2,
  Layers,
} as const;

type IconName = keyof typeof iconMap;

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* 헤더 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            모든 것이 갖춰진 스타터킷
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            프로덕션 환경에 필요한 모든 기능이 사전 구성되어 있습니다.
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon as IconName];
            return (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
