"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { CheckCircle, XCircle } from "lucide-react";

import Loading from "@/components/loading";
import { verifyLead } from "../actions";
import { ErrorKey } from "@/types/errors";

export default function Verification() {
  const params = useParams();
  const token = params.token as string;

  const [isLoading, setIsLoading] = useState(true);
  const [errorCode, setErrorCode] = useState<ErrorKey | null>();

  const t = useTranslations("verification");
  const tErrors = useTranslations("errors");
  const tSuccesses = useTranslations("success");

  useEffect(() => {
    const verify = async () => {
      const { success, code } = await verifyLead(token);

      if (!success) {
        setErrorCode(code as ErrorKey);
      }

      setIsLoading(false);
    };
    verify();
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  if (errorCode) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h5 className="font-semibold">{t("title")}</h5>
        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <div>
            <XCircle className="mx-auto h-16 w-16 text-destructive" />
            <p className="mt-4 text-destructive">{tErrors(errorCode)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h5 className="font-semibold">{t("title")}</h5>
      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <p className="mt-4 text-green-600">{tSuccesses("LEAD_VERIFIED")}</p>
        </div>
      </div>
    </div>
  );
}
