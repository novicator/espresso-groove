const WEB3FORMS_ACCESS_KEY = "605d2276-5bb5-4347-a777-3b97663f79ac";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export async function sendContactForm(form: HTMLFormElement): Promise<boolean> {
  const data = new FormData(form);
  const firstName = (data.get("firstName") ?? "").toString().trim();
  const lastName = (data.get("lastName") ?? "").toString().trim();
  const email = (data.get("email") ?? "").toString().trim();
  const phone = (data.get("phone") ?? "").toString().trim();
  const message = (data.get("message") ?? "").toString().trim();

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Contact from ${firstName} ${lastName}`.trim() || "New contact form submission",
        from_name: "Espresso Groove Website",
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone,
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
