import { createFileRoute } from "@tanstack/react-router";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import heroImage from "@/assets/hero-id.jpg";

export const Route = createFileRoute("/solutions/id")({
  head: () => ({
    meta: [
      { title: "ID Solutions — MarselTech" },
      { name: "description", content: "Access control, biometric and time-attendance systems powered by HID for Dubai organizations." },
      { property: "og:title", content: "ID Solutions — MarselTech" },
      { property: "og:description", content: "Access control, biometric and time-attendance systems powered by HID for Dubai organizations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IDPage,
});

const subServices = [
  { title: "Access Control Systems", description: "Door controllers, readers and credentials that manage entry by person, time and zone.", brands: "HID" },
  { title: "Time & Attendance Systems", description: "Clock-in/clock-out solutions integrated with payroll and HR systems.", brands: "HID" },
  { title: "Visitor Management Systems", description: "Pre-registration, badge printing and host notifications for visitor entry.", brands: "Multiple" },
  { title: "Biometric Identification", description: "Fingerprint, face and palm recognition for high-assurance identity verification.", brands: "HID" },
  { title: "Card Issuance & Printing", description: "On-site badge printing and credential personalization.", brands: "HID" },
];

const partners = [
  { name: "HID", description: "Access control and identity solutions." },
];

const industries = ["Corporate", "Education", "Healthcare", "Retail"];

function IDPage() {
  return (
    <SolutionPageTemplate
      title="ID Solutions"
      tagline="Identity and access, managed properly"
      overview="Identity solutions control who goes where, when and for how long. We design access control, time-attendance and visitor management systems that fit your policies without creating friction for staff and guests."
      image={heroImage}
      imageAlt="ID card printer producing employee access badges"
      subServices={subServices}
      partners={partners}
      industries={industries}
    />
  );
}
