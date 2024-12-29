import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Lightbulb, Settings, Wrench, CheckCircle, Maximize } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  children: ReactNode;
  date: string;
  bgColor: string;
  Icon: LucideIcon;
};

function TimelineItem({ children, date, bgColor, Icon }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-row items-start justify-center space-x-4">
        <div className="max-w-8 text-right text-sm font-light">{date}</div>
        <div className={cn("h-full min-w-4 rounded-full", bgColor)} />
        <div
          className={cn("z-10 flex min-h-10 min-w-10 items-center justify-center rounded-full", bgColor)}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="flex-grow space-y-2 pb-12">{children}</div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const t = useTranslations("about.timeline");

  return (
    <section className="flex justify-center bg-brand-tertiary px-8 py-16">
      <div>
        <TimelineItem date="AGO 22" bgColor="bg-gray-200" Icon={Lightbulb}>
          <h5 className="font-bold">{t("step1.title")}</h5>
          <ul className="space-y-1">
            {Object.keys(t.raw("step1.items")).map((key) => (
              <li className="ml-5 list-disc" key={key}>
                <p>{t(`step1.items.${key}`)}</p>
              </li>
            ))}
          </ul>
        </TimelineItem>

        <TimelineItem date="JUN 24" bgColor="bg-gray-300" Icon={Settings}>
          <h5 className="font-bold">{t("step1.title")}</h5>
          <ul className="space-y-1">
            {Object.keys(t.raw("step1.items")).map((key) => (
              <li className="ml-5 list-disc" key={key}>
                <p>{t(`step1.items.${key}`)}</p>
              </li>
            ))}
          </ul>
        </TimelineItem>

        <TimelineItem date="OCT 24" bgColor="bg-brand-secondary" Icon={Wrench}>
          <h5 className="font-bold">{t("step1.title")}</h5>
          <ul className="space-y-1">
            {Object.keys(t.raw("step1.items")).map((key) => (
              <li className="ml-5 list-disc" key={key}>
                <p>{t(`step1.items.${key}`)}</p>
              </li>
            ))}
          </ul>
        </TimelineItem>

        <TimelineItem date="ABR 25" bgColor="bg-brand-primary" Icon={CheckCircle}>
          <h5 className="font-bold">{t("step1.title")}</h5>
          <ul className="space-y-1">
            {Object.keys(t.raw("step1.items")).map((key) => (
              <li className="ml-5 list-disc" key={key}>
                <p>{t(`step1.items.${key}`)}</p>
              </li>
            ))}
          </ul>
        </TimelineItem>

        <TimelineItem date="OCT 25" bgColor="bg-brand-quaternary" Icon={Maximize}>
          <h5 className="font-bold">{t("step1.title")}</h5>
          <ul className="space-y-1">
            {Object.keys(t.raw("step1.items")).map((key) => (
              <li className="ml-5 list-disc" key={key}>
                <p>{t(`step1.items.${key}`)}</p>
              </li>
            ))}
          </ul>
        </TimelineItem>
      </div>
    </section>
  );
}
