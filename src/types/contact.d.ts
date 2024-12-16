import { ContactFormSchema } from "@/schemas/contact";

export type Contact = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  message: string;
};

export type ContactForm = z.infer<typeof ContactFormSchema>;
