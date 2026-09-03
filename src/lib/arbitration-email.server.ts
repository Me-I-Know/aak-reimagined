/**
 * Notification email sent to the AAK secretariat when an arbitration
 * application is submitted. Delivery runs through Lovable's managed email
 * sender; until an email domain is verified for the project the helper
 * reports `false` and the submission is still stored in the database.
 */

const SECRETARIAT = "aak@aak.or.ke";

type Payload = {
  id: string;
  applicantName: string;
  organisation?: string;
  email: string;
  phone?: string;
  respondent: string;
  project: string;
  discipline: string;
  summary: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(term: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 16px 6px 0;color:#6b6b6b;font-size:12px;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(
    term,
  )}</td><td style="padding:6px 0;font-size:14px;color:#1a1a1a;">${escapeHtml(value)}</td></tr>`;
}

export async function notifySecretariat(payload: Payload): Promise<boolean> {
  const apiKey = process.env["RESEND_API_KEY"];
  const from = process.env["EMAIL_FROM"];

  if (!apiKey || !from) {
    console.warn("[arbitration] email not configured; submission stored only");
    return false;
  }

  const html = `
    <div style="font-family:Georgia,serif;background:#f4f1ec;padding:32px;">
      <h1 style="font-size:20px;margin:0 0 4px;color:#1a1a1a;">Application for appointment of an arbitrator</h1>
      <p style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#c1272d;margin:0 0 24px;">Reference ${escapeHtml(
        payload.id,
      )}</p>
      <table style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;">
        ${row("Applicant", payload.applicantName)}
        ${row("Organisation", payload.organisation)}
        ${row("Email", payload.email)}
        ${row("Telephone", payload.phone)}
        ${row("Other party", payload.respondent)}
        ${row("Project", payload.project)}
        ${row("Discipline", payload.discipline)}
      </table>
      <h2 style="font-size:14px;margin:24px 0 8px;color:#1a1a1a;">Nature of the dispute</h2>
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap;">${escapeHtml(
        payload.summary,
      )}</p>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SECRETARIAT],
      reply_to: payload.email,
      subject: `Arbitration application — ${payload.project}`,
      html,
    }),
  });

  if (!response.ok) {
    console.error("[arbitration] email provider rejected send", await response.text());
    return false;
  }

  return true;
}
