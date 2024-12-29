import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { toast } from "react-toastify";

import { ErrorKey, SuccessKey } from "@/types/errors";
import { LeadFormSchema } from "@/schemas/lead";
import { registerLead } from "../actions";

const FORM_STORAGE_KEY = "lead-form-data";
type LeadFormData = z.infer<ReturnType<typeof LeadFormSchema>>;

export const useRegisterForm = () => {
  const locale = useLocale();
  const messages = useMessages() as unknown as IntlMessages;
  const tSuccess = useTranslations("success");
  const tErrors = useTranslations("errors");

  const savedFormData =
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem(FORM_STORAGE_KEY) || "{}") : {};

  const form = useForm<LeadFormData>({
    resolver: zodResolver(LeadFormSchema(messages, locale)),
    defaultValues: {
      name: savedFormData.name || "",
      surname: savedFormData.surname || "",
      email: savedFormData.email || "",
      phone: savedFormData.phone || "",
      referralSource: savedFormData.referralSource || "",
      interestInBeta: savedFormData.interestInBeta || false,
      privacyPolicy: savedFormData.privacyPolicy || false,
    },
  });

  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(data));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (values: LeadFormData) => {
    const { success, code } = await registerLead({
      ...values,
      locale,
      isVerified: false,
    });

    if (!success) {
      toast.error(tErrors(code as ErrorKey));
      return;
    }

    localStorage.removeItem(FORM_STORAGE_KEY);

    form.reset({
      name: "",
      surname: "",
      email: "",
      phone: "",
      referralSource: "",
      interestInBeta: false,
      privacyPolicy: false,
    });

    toast.success(tSuccess(code as SuccessKey));
  };

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
  };
};
