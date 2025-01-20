import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Verification from "./_components/verification";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const verification = await getTranslations({ locale, namespace: "verification" });

  return {
    title: verification("title"),
  };
}

export default function Verify() {
  return <Verification />;
}
