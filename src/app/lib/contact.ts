const WEB3FORMS_ACCESS_KEY = "605d2276-5bb5-4347-a777-3b97663f79ac";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export const CONTACT_CATEGORIES = [
  { value: "general", label: "General Contact", tag: "GENERAL" },
  { value: "event", label: "Event Inquiry", tag: "EVENT" },
  { value: "vendor", label: "Vendor / Performer", tag: "VENDOR" },
  { value: "vinyl", label: "Vinyl Request", tag: "VINYL" },
  { value: "feedback", label: "Feedback & Suggestions", tag: "FEEDBACK" },
  { value: "other", label: "Other", tag: "OTHER" },
] as const;

export async function sendContactForm(form: HTMLFormElement): Promise<boolean> {
  const data = new FormData(form);
  const firstName = (data.get("firstName") ?? "").toString().trim();
  const lastName = (data.get("lastName") ?? "").toString().trim();
  const email = (data.get("email") ?? "").toString().trim();
  const phone = (data.get("phone") ?? "").toString().trim();
  const message = (data.get("message") ?? "").toString().trim();
  const categoryValue = (data.get("category") ?? "general").toString();
  const category = CONTACT_CATEGORIES.find((c) => c.value === categoryValue) ?? CONTACT_CATEGORIES[0];

  const nameStr = `${firstName} ${lastName}`.trim();
  const subject = `[${category.tag}] ${nameStr ? `Contact from ${nameStr}` : "New contact form submission"}`;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: "Espresso Groove Website",
        name: nameStr,
        email,
        phone,
        category: category.label,
        message,
        botcheck: Boolean(data.get("botcheck")),
      }),
    });
    const json = await res.json();
    return json.success === true;
  } catch {
    return false;
  }
}
