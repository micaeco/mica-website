import React from "react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function CallToAction() {
  const t = useTranslations("beta.cta");
  const locale = useLocale();

  return (
    <section className="bg-secondary pt-16 text-secondary-foreground">
      <div className="flex justify-center">
        <Card className="mx-8 max-w-4xl p-8">
          <CardHeader>
            <CardTitle>{t("text")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg">
              <Link href="/register"> {t("cta")} </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">{t("note")}</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
