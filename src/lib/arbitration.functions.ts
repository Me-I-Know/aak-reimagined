import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const arbitrationApplicationSchema = z.object({
  applicantName: z.string().trim().min(2, "Enter the applicant name").max(120),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  respondent: z.string().trim().min(2, "Name the other party").max(200),
  project: z.string().trim().min(2, "Name the project or contract").max(200),
  discipline: z.string().trim().min(2).max(80),
  summary: z
    .string()
    .trim()
    .min(30, "Describe the dispute in a little more detail")
    .max(4000, "Keep the summary under 4000 characters"),
});

export type ArbitrationApplicationInput = z.infer<typeof arbitrationApplicationSchema>;

export const submitArbitrationApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => arbitrationApplicationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("arbitration_applications")
      .insert({
        applicant_name: data.applicantName,
        organisation: data.organisation || null,
        email: data.email,
        phone: data.phone || null,
        respondent: data.respondent,
        project: data.project,
        discipline: data.discipline,
        summary: data.summary,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[arbitration] insert failed", error);
      throw new Error("The application could not be recorded. Please try again.");
    }

    let emailSent = false;
    try {
      const { notifySecretariat } = await import("./arbitration-email.server");
      emailSent = await notifySecretariat({ id: row.id, ...data });
      if (emailSent) {
        await supabaseAdmin
          .from("arbitration_applications")
          .update({ email_sent: true })
          .eq("id", row.id);
      }
    } catch (mailError) {
      console.error("[arbitration] notification email failed", mailError);
    }

    return { id: row.id as string, emailSent };
  });
