"use client";

import { FormEvent, useState } from "react";

import { usePortfolio } from "@/components/portfolio-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const deliveryEndpoint =
  "https://formsubmit.co/ajax/valentinrutaganda04@gmail.com";

type FormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const { t } = usePortfolio();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = t.contact.invalidName;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t.contact.invalidEmail;
    }
    if (form.message.trim().length < 20) {
      nextErrors.message = t.contact.invalidMessage;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setStatus("submitting");
      setStatusMessage("");

      const response = await fetch(deliveryEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          subject: form.subject || "Portfolio contact message",
          message: form.message,
          _subject: form.subject || "Portfolio contact message",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setStatusMessage(t.contact.success);
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage(t.contact.missingEndpoint);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div>
            <p className="section-eyebrow">{t.contact.title}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t.contact.intro}</p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-6">
            <h3 className="text-lg font-semibold">{t.contact.contactInfo}</h3>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                <span className="mr-2 font-medium text-foreground">
                  {t.contact.phoneLabel}:
                </span>
                <a href="tel:+250786862012" className="hover:text-primary">
                  +250 786 862 012
                </a>
              </p>
              <p>
                <span className="mr-2 font-medium text-foreground">
                  {t.contact.emailLabel}:
                </span>
                <a
                  href="mailto:valentinrutaganda04@gmail.com"
                  className="hover:text-primary"
                >
                  valentinrutaganda04@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/70 bg-card/80 p-6 md:p-8">
          <h3 className="text-2xl font-semibold">{t.contact.formTitle}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Messages are sent directly to your Gmail inbox through the site form.
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="fullName">
                  {t.contact.fullName}
                </label>
                <Input
                  id="fullName"
                  value={form.fullName}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, fullName: event.target.value }))
                  }
                  placeholder={t.contact.fullName}
                />
                {errors.fullName ? (
                  <p className="mt-2 text-sm text-destructive">{errors.fullName}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="email">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="hello@example.com"
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="subject">
                {t.contact.subject}
              </label>
              <Input
                id="subject"
                value={form.subject}
                onChange={(event) =>
                  setForm((current) => ({ ...current, subject: event.target.value }))
                }
                placeholder={t.contact.subject}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="message">
                {t.contact.message}
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                placeholder={t.contact.message}
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? t.contact.sending : t.contact.submit}
            </Button>

            {statusMessage ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-primary" : "text-destructive"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
