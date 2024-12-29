"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CircleAlert, Droplet, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function Solution() {
  const t = useTranslations("home");

  return (
    <div className="bg-gradient-to-b from-brand-secondary to-brand-tertiary px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 2xl:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 font-bold"
            >
              {t("solution.title")}
            </motion.h2>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <Droplet className="mb-4 size-20 rounded-full bg-brand-primary p-4 text-white" />
                <h4 className="mb-2 font-bold">{t("solution.benefits.benefit1.title")}</h4>
                <p>{t("solution.benefits.benefit1.text")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CircleAlert className="mb-4 size-20 rounded-full bg-brand-primary p-4 text-white" />
                <h4 className="mb-2 font-bold">{t("solution.benefits.benefit2.title")}</h4>
                <p>{t("solution.benefits.benefit2.text")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TrendingUp className="mb-4 size-20 rounded-full bg-brand-primary p-4 text-white" />
                <h4 className="mb-2 font-bold">{t("solution.benefits.benefit3.title")}</h4>
                <p>{t("solution.benefits.benefit3.text")}</p>
              </motion.div>
            </div>
          </div>

          <div className="hidden justify-end 2xl:col-span-5 2xl:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/app-mockup-no-bg.webp"
                alt="Hand holding phone with MICA app"
                width={550}
                height={1100}
                className="px-8"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button size="lg">
            <Link href="/product">{t("solution.cta")}</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
