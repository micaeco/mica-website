import { Button, Column, Hr, Img, Link, Row, Section, Text } from "@react-email/components";
import { createTranslator } from "next-intl";

import en from "#/messages/en.json";
import Layout from "./layout";
import { env } from "@/lib/env";

interface Props {
  messages: IntlMessages;
  locale: string;
}

export default function WelcomeEmail({ messages = en, locale = "en" }: Props) {
  const t = createTranslator({ messages, locale });
  console.log(t);

  const baseUrl = env.appUrl;

  const team = [
    { src: "marta", name: "Marta", role: "Producte" },
    { src: "miquel", name: "Miquel", role: "Dades" },
    { src: "irene", name: "Irene", role: "Marquèting" },
    { src: "jaime", name: "Jaime", role: "Operacions" },
    { src: "lucia", name: "Lucía", role: "Hardware" },
    { src: "gabi", name: "Gabriel", role: "Software" },
    { src: "gael", name: "Gael", role: "Legal" },
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
        <Text className="mb-4 text-2xl font-bold">Gràcies per unir-te a MICA, Ana!</Text>

        <Row>
          <Column>
            <Text className="mb-4 max-w-[400px]">
              Ens fa molta il·lusió comptar amb el teu interès i compartir la nostra visió amb tu:
              una ciutat empoderada amb eines intel·ligents per millorar la gestió de l&apos;aigua a
              les llars.
            </Text>
            <Text className="mb-6 max-w-[400px]">
              Amb la teva MICA, estem un pas més a prop d&apos;un futur més sostenible.
            </Text>
            <Button className="rounded-md bg-brand-primary px-6 py-2 text-white" href={baseUrl}>
              Descobreix MICA
            </Button>
          </Column>
        </Row>
      </Section>

      {/* Introduction */}
      <Section className="py-8">
        <Text className="mb-4 text-center text-2xl font-bold">Encantats de conèixer-te!</Text>
        <Text className="mb-8 text-center">
          Som un grup d&apos;enginyers barcelonins compromesos amb fer front al repte de
          l&apos;escassetat d&apos;aigua a la ciutat. Volem maximitzar el potencial de les noves
          tecnologies per oferir als residents urbans dades detallades, accionables i
          personalitzades que els ajudin a optimitzar el seu consum d&apos;aigua.
        </Text>
      </Section>

      {/* Team */}
      <Section className="mb-8">
        <Row className="desktop w-full">
          {team.map(({ src, name, role }) => (
            <Column key={src} className="px-1">
              <Img
                src={`${baseUrl}/images/${src}.png`}
                width="135"
                alt={name}
                className="rounded-lg"
              />
              <Text className="text-center font-bold">{name}</Text>
              <Text className="text-center">{role}</Text>
            </Column>
          ))}
        </Row>
        <Column className="mobile">
          {team.map(({ src, name, role }) => (
            <Row key={src} className="p-1">
              <Img
                src={`${baseUrl}/images/${src}.png`}
                width="200"
                alt={name}
                className="mx-auto rounded-lg"
              />
              <Text className="text-center font-bold">{name}</Text>
              <Text className="text-center">{role}</Text>
            </Row>
          ))}
        </Column>
      </Section>

      {/* Development Status */}
      <Section className="mb-8 rounded-lg p-8">
        <Section className="desktop">
          <Column>
            <Text className="mb-4 text-xl font-bold">
              De moment, estem en fase de desenvolupament...
            </Text>
            <Text className="mb-4">
              Actualment, estem en plena fase de desenvolupament del projecte, i amb el suport
              potencial d&apos;una subvenció de l&apos;Ajuntament de Barcelona, estem treballant
              intensament per fer-lo realitat.
            </Text>
            <Text>
              Sabem que amb la teva ajuda, podem aconseguir-ho! Busquem socis estratègics, lampistes
              associats per a la instal·lació del sensor i usuaris beta compromesos.
            </Text>
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
            <Text className="mb-4 text-xl font-bold">
              De moment, estem en fase de desenvolupament...
            </Text>
            <Text className="mb-4">
              Actualment, estem en plena fase de desenvolupament del projecte, i amb el suport
              potencial d&apos;una subvenció de l&apos;Ajuntament de Barcelona, estem treballant
              intensament per fer-lo realitat.
            </Text>
            <Text>
              Sabem que amb la teva ajuda, podem aconseguir-ho! Busquem socis estratègics, lampistes
              associats per a la instal·lació del sensor i usuaris beta compromesos.
            </Text>
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
            className="mt-6 rounded-md bg-brand-secondary px-6 py-2 font-bold"
            href={`${baseUrl}/contact`}
          >
            Contacta&apos;ns
          </Button>
        </Section>
      </Section>

      {/* What to Expect */}
      <Section className="mb-8">
        <Text className="mb-8 text-center text-xl font-bold">Mentrestant, què pots esperar?</Text>
        <Section className="desktop">
          <Row>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/data-analysis.png`}
                width="70"
                alt="Updates"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">Actualitzacions regulars</Text>
              <Text className="text-sm">
                T&apos;anirem informant sobre el progrés del projecte i com pots participar-hi.
              </Text>
            </Column>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/water-meter.png`}
                width="70"
                alt="Early access"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">Accés anticipat</Text>
              <Text className="text-sm">
                Quan estiguem llestos per llançar MICA, seràs el primer en saber-ho.
              </Text>
            </Column>
            <Column className="px-4 text-center">
              <Img
                src={`${baseUrl}/icons/users.png`}
                width="70"
                alt="Community"
                className="mx-auto mb-4"
              />
              <Text className="mb-2 font-bold">Implicació de la comunitat</Text>
              <Text className="text-sm">
                Volem construir MICA amb tu al centre! T&apos;animem a connectar amb la comunitat.
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
            <Text className="mb-2 font-bold">Actualitzacions regulars</Text>
            <Text className="text-sm">
              T&apos;anirem informant sobre el progrés del projecte i com pots participar-hi.
            </Text>
          </Row>
          <Row className="px-4 text-center">
            <Img
              src={`${baseUrl}/icons/water-meter.png`}
              width="70"
              alt="Early access"
              className="mx-auto mb-4"
            />
            <Text className="mb-2 font-bold">Accés anticipat</Text>
            <Text className="text-sm">
              Quan estiguem llestos per llançar MICA, seràs el primer en saber-ho.
            </Text>
          </Row>
          <Row className="px-4 text-center">
            <Img
              src={`${baseUrl}/icons/users.png`}
              width="70"
              alt="Community"
              className="mx-auto mb-4"
            />
            <Text className="mb-2 font-bold">Implicació de la comunitat</Text>
            <Text className="text-sm">
              Volem construir MICA amb tu al centre! T&apos;animem a connectar amb la comunitat.
            </Text>
          </Row>
        </Section>

        <Section className="text-center">
          <Button
            className="mt-8 rounded-md bg-brand-secondary px-6 py-2 text-center font-bold"
            href="https://app.mica.eco"
          >
            Prova la demo
          </Button>
        </Section>
      </Section>

      <Hr />

      {/* Footer */}
      <Section className="pt-8">
        <Text className="mb-4">Gràcies per ser part d&apos;aquest projecte!</Text>
        <Text className="mb-8 font-bold">L&apos;equip de MICA</Text>
        <Text className="font-bold">Segueix-nos per saber-ne més:</Text>
        <Row className="float-left w-40">
          <Column>
            <Link href="https://x.com/micaeco_bcn" className="mx-2">
              <Img src={`${baseUrl}/icons/twitter.png`} width="35" alt="Twitter" />
            </Link>
          </Column>
          <Column>
            <Link href="https://linkedin.com/company/micaeco" className="mx-2">
              <Img src={`${baseUrl}/icons/linkedin.png`} width="35" alt="Linkedin" />
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
