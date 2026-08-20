import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">Thank you</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Your company" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="+971 ..." />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="solution">Solution Interested In</Label>
        <Select required>
          <SelectTrigger id="solution">
            <SelectValue placeholder="Select a solution" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ucc">UCC Solutions</SelectItem>
            <SelectItem value="security">Security Solutions</SelectItem>
            <SelectItem value="id">ID Solutions</SelectItem>
            <SelectItem value="it">IT Solutions</SelectItem>
            <SelectItem value="av">AV Solutions</SelectItem>
            <SelectItem value="multiple">Multiple Solutions</SelectItem>
            <SelectItem value="unsure">Not Sure — Need Advice</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={4} placeholder="Tell us about your project..." />
      </div>
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Send Message
      </Button>
    </form>
  );
}
