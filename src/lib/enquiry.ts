export interface Enquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  message: string;
}
export function composeEnquiry(enquiry: Enquiry, recipient: string) {
  const subject =
    `Project enquiry: ${enquiry.solution} — ${enquiry.company || enquiry.name}`.replace(
      /[\r\n]/g,
      " ",
    );
  const body = [
    "Hello Marsel Tech,",
    "",
    "I would like to discuss a project.",
    "",
    `Name: ${enquiry.name}`,
    `Company: ${enquiry.company || "Not provided"}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Interested in: ${enquiry.solution}`,
    "",
    enquiry.message || "Please contact me to discuss the requirements.",
    "",
    "Thank you,",
    enquiry.name,
  ].join("\n");
  return {
    subject,
    body,
    href: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
