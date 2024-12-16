"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GoBack() {
  const router = useRouter();
  const pathname = usePathname();
  const common = useTranslations("common");

  if (pathname === "/") return null;

  return (
    <div
      onClick={() => router.back()}
      className="group mb-6 inline-flex items-center gap-2 text-blue-600 hover:cursor-pointer hover:text-blue-800"
    >
      <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
      <span className="text-lg capitalize">{common("go-back")}</span>
    </div>
  );
}
