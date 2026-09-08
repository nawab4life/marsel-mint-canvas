import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
  /** Number of questions shown before the "Know more" button. */
  initialCount?: number;
  /** Number of questions revealed each time "Know more" is clicked. */
  step?: number;
}

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  initialCount = 5,
  step = 5,
}: FaqSectionProps) {
  const [visible, setVisible] = useState(initialCount);

  if (!faqs.length) return null;

  const visibleFaqs = faqs.slice(0, visible);
  const hasMore = visible < faqs.length;
  const remaining = faqs.length - visible;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Accordion type="single" collapsible className="mt-12">
          {visibleFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {hasMore && (
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setVisible((v) => v + step)}
              className="group border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Plus className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              Know more
              <span className="ml-1 text-sm font-normal text-muted-foreground group-hover:text-primary-foreground/80">
                ({remaining} more)
              </span>
            </Button>
            <p className="text-sm text-muted-foreground">
              Showing {visible} of {faqs.length} questions
            </p>
          </div>
        )}

        {!hasMore && faqs.length > initialCount && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Showing all {faqs.length} questions
          </p>
        )}
      </div>
    </section>
  );
}
