'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Your product experience is being judged`;

export default function TemplateC() {
  return (
    <div className="flex min-h-[400px] bg-primary/5">
      <div className="flex w-2/5">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          <div className="w-3/4 text-center">
            <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['product', 'experience']} />
          </div>
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-center text-muted-foreground">
        <div className="w-3/4 space-y-6">
          <div>
            Guide users to unlock the value of your product faster. Rather than being frustrated, they&apos;ll want to explore more. And
            with the adoption of additional features comes higher engagement and more continuous use of your product.
          </div>
          <div>
            Your users go from evaluators to champions. Free-to-paid conversion goes up. Expansion and upsells go up. And retention goes up.
          </div>
          <div>
            And the best part? You can achieve all of this without having to interrupt an engineering sprint or rely solely on costly
            one-on-one support.
          </div>
        </div>
      </div>
    </div>
  );
}
