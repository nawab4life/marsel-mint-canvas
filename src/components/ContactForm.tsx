import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, Pencil } from "lucide-react";
import { composeEnquiry } from "@/lib/enquiry";
import { siteContact, serviceAreas } from "@/data/site";
export function ContactForm() {
  const [draft, setDraft] = useState<ReturnType<typeof composeEnquiry> | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    setDraft(
      composeEnquiry(
        {
          name: value("name"),
          company: value("company"),
          email: value("email"),
          phone: value("phone"),
          solution: value("solution"),
          message: value("message"),
        },
        siteContact.email,
      ),
    );
    setCopied(false);
    setCopyError(false);
  }
  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${siteContact.email}\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="enquiry-form-wrap">
      <form className="enquiry-form" onSubmit={prepare} hidden={!!draft}>
        <div className="form-pair">
          <div>
            <label htmlFor="name">
              Your name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Full name"
              maxLength={100}
              required
              pattern=".*\S.*"
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Company name"
              maxLength={120}
            />
          </div>
        </div>
        <div className="form-pair">
          <div>
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              maxLength={254}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Including country code"
              maxLength={40}
            />
          </div>
        </div>
        <div>
          <label htmlFor="solution">
            What can we help with? <span>*</span>
          </label>
          <select id="solution" name="solution" required defaultValue="">
            <option value="" disabled>
              Select a solution
            </option>
            {serviceAreas.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option>Multiple solutions</option>
            <option>I’d like some advice</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">A little about your project</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Your space, what you need and any timing you have in mind…"
          />
        </div>
        <p className="form-note">
          We’ll prepare an email with these details for you to review and send from your email app.
        </p>
        <button className="action action-dark" type="submit">
          Prepare enquiry <ArrowUpRight size={19} />
        </button>
      </form>
      {draft && (
        <div className="email-draft" role="region" aria-label="Your enquiry draft">
          <p className="eyebrow">READY FOR YOUR EMAIL APP</p>
          <h3>Your enquiry is ready.</h3>
          <p>
            Open your email app to review and send it to <strong>{siteContact.email}</strong>. Your
            message has not been sent yet.
          </p>
          <div className="draft-subject">{draft.subject}</div>
          <label className="sr-only" htmlFor="enquiry-draft">
            Enquiry text
          </label>
          <textarea id="enquiry-draft" readOnly value={draft.body} rows={11} />
          <div className="draft-actions">
            <a className="action action-dark" href={draft.href}>
              Open email app <Mail size={17} />
            </a>
            <button className="action action-outline" type="button" onClick={copyDraft}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy enquiry"}
            </button>
          </div>
          <p className="form-note" aria-live="polite">
            {copyError
              ? "Please select and copy the enquiry text above."
              : copied
                ? "Enquiry copied. Paste it into an email when you’re ready."
                : "No email app set up? Copy the enquiry and paste it into your preferred email service."}
          </p>
          <button className="text-link" onClick={() => setDraft(null)} type="button">
            <Pencil size={14} />
            Edit details
          </button>
        </div>
      )}
    </div>
  );
}
