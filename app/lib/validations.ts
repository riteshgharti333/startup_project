import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const careerFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\-\s()]{10,15}$/, "Please enter a valid phone number"),

  position: z
    .string()
    .min(1, "Please select a position"),

  experience: z
    .string()
    .min(1, "Please select years of experience"),

  portfolio: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  linkedin: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  github: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  coverLetter: z
    .string()
    .max(2000, "Cover letter must be less than 2000 characters")
    .optional()
    .or(z.literal("")),

  resume: z
    .instanceof(File, { message: "Please upload your resume" })
    .refine((file) => file.size <= MAX_FILE_SIZE, "File size must be less than 2MB")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PDF, DOC, or DOCX files are allowed"
    ),
});

export type CareerFormData = z.infer<typeof careerFormSchema>;




export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{0,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),

  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .min(1, "Please select a service"),

  budget: z
    .string()
    .optional()
    .or(z.literal("")),

  details: z
    .string()
    .max(2000, "Project details must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;