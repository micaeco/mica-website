"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Gift, TrendingUp, Users, Zap } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BetaBenefits() {
  const t = useTranslations("beta.benefits");
  const tBenefits = useTranslations("beta.benefits.benefits");

  return (
    <section className="bg-muted py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-8"
      >
        <h3 className="mb-10 text-center font-bold">{t("title")}</h3>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <Card className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
            <CardHeader>
              <Zap className="text-brand-quaternary" size={50} />
              <CardTitle>
                <h5 className="font-medium">{tBenefits("benefit1.title")}</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-light">{tBenefits("benefit1.text")}</p>
            </CardContent>
            <Zap
              className="absolute -bottom-5 -right-5 text-brand-quaternary opacity-5"
              size={200}
            />
          </Card>

          <Card className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
            <CardHeader>
              <TrendingUp className="text-brand-quaternary" size={50} />
              <CardTitle>
                <h5 className="font-medium">{tBenefits("benefit2.title")}</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-light">{tBenefits("benefit2.text")}</p>
            </CardContent>
            <TrendingUp
              className="absolute -bottom-5 -right-5 text-brand-quaternary opacity-5"
              size={200}
            />
          </Card>

          <Card className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
            <CardHeader>
              <Users className="text-brand-quaternary" size={50} />
              <CardTitle>
                <h5 className="font-medium">{tBenefits("benefit3.title")}</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-light">{tBenefits("benefit3.text")}</p>
            </CardContent>
            <Users
              className="absolute -bottom-5 -right-5 text-brand-quaternary opacity-5"
              size={200}
            />
          </Card>

          <Card className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
            <CardHeader>
              <Gift className="text-brand-quaternary" size={50} />
              <CardTitle>
                <h5 className="font-medium">{tBenefits("benefit4.title")}</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-light">{tBenefits("benefit4.text")}</p>
            </CardContent>
            <Gift
              className="absolute -bottom-5 -right-5 text-brand-quaternary opacity-5"
              size={200}
            />
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
