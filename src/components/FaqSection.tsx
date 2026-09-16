import { useState } from "react";
import { Plus } from "lucide-react";
interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
  initialCount?: number;
  step?: number;
}
export function FaqSection({
  faqs,
  title = "Your questions, answered.",
  eyebrow = "A LITTLE MORE CLARITY",
  initialCount = 5,
  step = 5,
}: FaqSectionProps) {
  const [visible, setVisible] = useState(initialCount);
  if (!faqs.length) return null;
  return (
    <section className="faq-section section-space">
      <div className="shell faq-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <div className="faq-list">
            {faqs.slice(0, visible).map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          {visible < faqs.length && (
            <button
              className="text-link faq-more"
              type="button"
              onClick={() => setVisible((v) => v + step)}
            >
              Show more questions <Plus size={15} />
              <span>({faqs.length - visible})</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
