import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hotel } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import heroImage from "@/assets/hero-it.jpg";

export const Route = createFileRoute("/solutions/it")({
  head: () => ({
    meta: [
      { title: "IT Solutions — MarselTech" },
      { name: "description", content: "Network infrastructure, servers and managed IT support for Dubai businesses." },
      { property: "og:title", content: "IT Solutions — MarselTech" },
      { property: "og:description", content: "Network infrastructure, servers and managed IT support for Dubai businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ITPage,
});

const subServices = [
  { title: "Network Infrastructure & Structured Cabling", description: "Data, voice and fiber cabling with certified termination, testing and labeling.", brands: "Multiple" },
  { title: "Servers & Storage", description: "On-premise server, storage and backup hardware sized for your workloads.", brands: "Multiple" },
  { title: "Managed IT Support", description: "Ongoing monitoring, maintenance and help-desk support for your environment.", brands: "Multiple" },
  { title: "Cloud & Backup Solutions", description: "Cloud migration, off-site backup and disaster recovery planning.", brands: "Multiple" },
  { title: "IT Security Basics", description: "Firewalls, endpoint protection and network segmentation for small and mid-size sites.", brands: "Multiple" },
];

const partners = [
  { name: "Cisco", description: "Network infrastructure and switching." },
  { name: "HP / HPE", description: "Servers, storage and networking hardware." },
  { name: "Microsoft", description: "Cloud, productivity and identity services." },
];

const industries = ["Corporate", "Hospitality", "Education", "Retail"];

const projects = [
  {
    title: "Hotel Network Refresh",
    sector: "Hospitality",
    scope: "Replaced core switching and Wi-Fi infrastructure for a Dubai hotel.",
    icon: Hotel,
  },
  {
    title: "Office Network Rollout",
    sector: "Corporate",
    scope: "Structured cabling, switching and server rack build for a new office fit-out.",
    icon: Building2,
  },
];

function ITPage() {
  return (
    <SolutionPageTemplate
      title="IT Solutions"
      tagline="Reliable infrastructure for daily operations"
      overview="Your IT infrastructure is the platform everything else runs on. We build networks, servers and support processes that keep business applications available and secure."
      image={heroImage}
      imageAlt="Data center aisle with network switches and structured cabling"
      subServices={subServices}
      partners={partners}
      industries={industries}
      projects={projects}
    />
  );
}
