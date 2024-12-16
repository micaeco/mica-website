"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import GoBack from "@/components/ui/go-back";
import Loading from "@/components/loading";
import Markdown from "@/components/ui/markdown";
import { ErrorKey } from "@/types/errors";
import { PrivacyPolicy } from "@/types/privacy-policy";
import { getPrivacyPolicy } from "../actions";

export default function Latest() {
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>({ content: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorKey | null>();

  const errors = useTranslations("errors");
  const locale = useLocale();

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const privacyPolicy = await getPrivacyPolicy(locale);

      if (!privacyPolicy) {
        setError("NOT_FOUND");
        setIsLoading(false);
        return;
      }

      setPrivacyPolicy(privacyPolicy);
      setIsLoading(false);
    };

    fetchPrivacyPolicy();
  }, [locale]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-96 w-full flex-col items-center justify-center space-y-2 bg-white">
        <p className="text-destructive">{errors(error)}</p>
        <GoBack />
      </div>
    );
  }

  return (
    <section className="bg-white px-8 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <Markdown content={privacyPolicy.content} />
        <GoBack />
      </div>
    </section>
  );
}
