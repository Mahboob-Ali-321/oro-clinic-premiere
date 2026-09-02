import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  service: z.string().trim().max(120).optional(),
  preferred_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

export const requestAppointment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => appointmentSchema.parse(input))
  .handler(async ({ data }) => {
    const supabase = createClient(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      { auth: { persistSession: false } }
    );
    const { error } = await supabase.from("appointments").insert({
      name: data.name,
      phone: data.phone,
      service: data.service || null,
      preferred_date: data.preferred_date || null,
      message: data.message || null,
    });
    if (error) {
      console.error("Appointment insert failed:", error);
      throw new Error("Could not save your request. Please call or WhatsApp us instead.");
    }
    return { ok: true as const };
  });
