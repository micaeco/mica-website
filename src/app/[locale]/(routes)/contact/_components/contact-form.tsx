"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import { toast, ToastContainer } from "react-toastify";
import { Loader2, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { submitContactForm } from "../actions";
import { ErrorKey, SuccessKey } from "@/types/errors";
import type { ContactForm } from "@/types/contact";
import { ContactFormSchema } from "@/schemas/contact";

export default function ContactForm() {
  const t = useTranslations("contact");
  const messages = useMessages() as unknown as IntlMessages;
  const locale = useLocale();
  const common = useTranslations("common");
  const tSuccess = useTranslations("success");
  const tErrors = useTranslations("errors");

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema(messages, locale)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ContactForm) => {
    const { success, code } = await submitContactForm(values);

    if (!success) {
      toast.error(tErrors(code as ErrorKey));
      return;
    }

    toast.success(tSuccess(code as SuccessKey));
    form.reset();
  };

  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-4xl space-y-4">
        <h2 className="font-bold">{t("cta")}</h2>
        <Card>
          <CardHeader />
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="capitalize">{common("name")}</FormLabel>
                        <FormControl>
                          <Input {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="capitalize">{common("email")}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{common("message")}</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} className="w-full resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className={cn(
                    "w-full space-x-1 md:w-auto",
                    isSubmitting ? "cursor-not-allowed" : ""
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="capitalize">
                    {isSubmitting ? common("sending") + "..." : common("send")}
                  </span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!text-xl"
      />
    </section>
  );
}
