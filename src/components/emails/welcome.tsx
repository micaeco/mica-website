import { Button, Column, Hr, Img, Link, Row, Section, Text } from "@react-email/components";
import { createTranslator } from "next-intl";

import en from "#/messages/en.json";
import Layout from "./layout";

interface Props {
  messages: IntlMessages;
  locale: string;
  name: string;
}

export default function WelcomeEmail({ messages = en, locale = "en", name = "Ana" }: Props) {
  const baseUrl = "https://mica.eco";

  const t = createTranslator({ messages, locale });

  const team = [
    { src: "marta", name: "Marta", department: t("about.our-team.members.marta.department") },
    { src: "miquel", name: "Miquel", department: t("about.our-team.members.miquel.department") },
    { src: "irene", name: "Irene", department: t("about.our-team.members.irene.department") },
    { src: "jaime", name: "Jaime", department: t("about.our-team.members.jaime.department") },
    { src: "lucia", name: "Lucía", department: t("about.our-team.members.lucia.department") },
    { src: "gabi", name: "Gabriel", department: t("about.our-team.members.gabriel.department") },
    { src: "gael", name: "Gael", department: t("about.our-team.members.gael.department") },
  ];

  return (
    <Layout lang={locale} className="mx-auto max-w-5xl rounded-lg p-4">
      <Section className="relative overflow-hidden rounded-lg p-8">
        <Img
          src={`${baseUrl}/images/welcome-hero.png`}
          alt="MICA App and Sensor"
          className="desktop absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <Img
          src={`${baseUrl}/images/welcome-hero-mobile.png`}
          alt="MICA Gradient"
          className="mobile absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />

        <Img src={`${baseUrl}/logos/logo-dark.png`} width="60" alt="MICA" className="mb-6" />
        <Text className="mb-4 text-2xl font-bold">{t("emails.welcome.title", { name })}</Text>

        <Row>
          <Column>
            <Text className="mb-4 max-w-[400px]">{t("emails.welcome.vision.description")}</Text>
            <Text className="mb-6 max-w-[400px]">{t("emails.welcome.vision.impact")}</Text>
            <Button className="rounded-md bg-brand-primary px-6 py-2 text-white" href={baseUrl}>
              {t("emails.welcome.vision.cta")}
            </Button>
          </Column>
        </Row>
      </Section>

      {/* Introduction */}
      <Section className="py-8">
        <Text className="mb-4 text-center text-2xl font-bold">
          {t("emails.welcome.intro.title")}
        </Text>
        <Text className="mb-8 text-center">{t("emails.welcome.intro.description")}</Text>
      </Section>

      {/* Team */}
      <Section className="mb-8">
        <Row className="desktop w-full">
          {team.map(({ src, name, department }) => (
            <Column key={src} className="px-1">
              <Img
                src={`${baseUrl}/images/${src}.png`}
                width="135"
                alt={name}
                className="rounded-lg"
              />
              <Text className="text-center font-bold leading-none">{name}</Text>
              <Text className="text-center leading-none">{department}</Text>
            </Column>
          ))}
        </Row>
        <Column className="mobile">
          {(() => {
            const rows = [];
            for (let i = 0; i < team.length; i += 3) {
              const rowMembers = team.slice(i, i + 3);
              rows.push(
                <Row key={i}>
                  {rowMembers.map(({ src, name, department }) => (
                    <Column key={src} className="p-1">
                      <Img
                        src={`${baseUrl}/images/${src}.png`}
                        width="100"
                        alt={name}
                        className="mx-auto rounded-lg"
                      />
                      <Text className="text-center font-bold leading-none">{name}</Text>
                      <Text className="text-center leading-none">{department}</Text>
                    </Column>
                  ))}
                  {[...Array(3 - rowMembers.length)].map((_, index) => (
                    <Column key={`empty-${i}-${index}`} className="p-1">
                      {/* Empty column for grid alignment */}
                    </Column>
                  ))}
                </Row>
              );
            }
            return rows;
          })()}
        </Column>
      </Section>

      {/* Development Status */}
      <Section className="mb-8 rounded-lg bg-gray-100 p-8">
        <Section className="desktop">
          <Column>
            <Text className="mb-4 text-xl font-bold">{t("emails.welcome.development.title")}</Text>
            <Text className="mb-4">{t("emails.welcome.development.status")}</Text>
            <Text>{t("emails.welcome.development.collaboration")}</Text>
          </Column>
          <Column>
            <Img
              src={`${baseUrl}/images/design-process-circle.png`}
              alt="Development Status"
              width="400"
            />
          </Column>
        </Section>

        <Section className="mobile">
          <Row>
            <Text className="mb-4 text-xl font-bold">{t("emails.welcome.development.title")}</Text>
            <Text className="mb-4">{t("emails.welcome.development.status")}</Text>
            <Text>{t("emails.welcome.development.collaboration")}</Text>
          </Row>
          <Row>
            <Img
              src={`${baseUrl}/images/design-process-circle.png`}
              alt="Development Status"
              width="250"
            />
          </Row>
        </Section>

        <Section className="text-center">
          <Button
            className="mt-6 rounded-md bg-brand-secondary px-6 py-2 font-bold text-brand-primary"
            href={`${baseUrl}/contact`}
          >
            {t("emails.welcome.development.cta")}
          </Button>
        </Section>
      </Section>

      {/* What to Expect */}
      <Section className="mb-8">
        <Text className="mb-8 text-center text-xl font-bold">
          {t("emails.welcome.expectations.title")}
        </Text>
        <Section className="desktop">
          <Row>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/data-analysis.png`}
                width="70"
                alt="Updates"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">
                {t("emails.welcome.expectations.updates.title")}
              </Text>
              <Text className="text-sm">
                {t("emails.welcome.expectations.updates.description")}
              </Text>
            </Column>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/water-meter.png`}
                width="70"
                alt="Early access"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">
                {t("emails.welcome.expectations.earlyAccess.title")}
              </Text>
              <Text className="text-sm">
                {t("emails.welcome.expectations.earlyAccess.description")}
              </Text>
            </Column>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/users.png`}
                width="70"
                alt="Community"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">
                {t("emails.welcome.expectations.community.title")}
              </Text>
              <Text className="text-sm">
                {t("emails.welcome.expectations.community.description")}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section className="mobile text-center">
          <Row className="px-4">
            <Img
              src={`${baseUrl}/icons/data-analysis.png`}
              width="70"
              alt="Updates"
              className="mx-auto mb-4"
            />
            <Text className="mb-2 font-bold">{t("emails.welcome.expectations.updates.title")}</Text>
            <Text className="text-sm">{t("emails.welcome.expectations.updates.description")}</Text>
          </Row>
          <Row className="px-4 text-center">
            <Img
              src={`${baseUrl}/icons/water-meter.png`}
              width="70"
              alt="Early access"
              className="mx-auto mb-4"
            />
            <Text className="mb-2 font-bold">
              {t("emails.welcome.expectations.earlyAccess.title")}
            </Text>
            <Text className="text-sm">
              {t("emails.welcome.expectations.earlyAccess.description")}
            </Text>
          </Row>
          <Row className="px-4 text-center">
            <Img
              src={`${baseUrl}/icons/users.png`}
              width="70"
              alt="Community"
              className="mx-auto mb-4"
            />
            <Text className="mb-2 font-bold">
              {t("emails.welcome.expectations.community.title")}
            </Text>
            <Text className="text-sm">
              {t("emails.welcome.expectations.community.description")}
            </Text>
          </Row>
        </Section>

        <Section className="text-center">
          <Button
            className="mt-8 rounded-md bg-brand-secondary px-6 py-2 text-center font-bold text-brand-primary"
            href="https://app.mica.eco"
          >
            {t("emails.welcome.expectations.cta")}
          </Button>
        </Section>
      </Section>

      <Hr />

      {/* Footer */}
      <Section className="pt-8">
        <Text className="mb-4">{t("emails.welcome.footer.thanks")}</Text>
        <Text className="mb-8 font-bold">{t("emails.welcome.footer.team")}</Text>
        <Text className="font-bold">{t("emails.welcome.footer.social")}</Text>
        <Row className="float-left w-40">
          <Column>
            <Link href="https://x.com/micaeco_bcn" className="mx-2">
              <Img src={`${baseUrl}/icons/twitter-circle.png`} width="35" alt="Twitter" />
            </Link>
          </Column>
          <Column>
            <Link href="https://linkedin.com/company/micaeco" className="mx-2">
              <Img src={`${baseUrl}/icons/linkedin-circle.png`} width="35" alt="Linkedin" />
            </Link>
          </Column>
          <Column>
            <Link href="https://github.com/micaeco" className="mx-2">
              <Img src={`${baseUrl}/icons/github.png`} width="35" alt="GitHub" />
            </Link>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
}
