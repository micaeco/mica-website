import { Body, Font, Head, Html, Tailwind } from "@react-email/components";
import { ReactNode } from "react";

export default function Layout({ lang, children }: { lang: string; children?: ReactNode }) {
  return (
    <Html lang={lang}>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  quaternary: "#f39e16",
                },
                muted: {
                  DEFAULT: "#f4f4f5",
                  foreground: "##71717a",
                },
              },
            },
          },
        }}
      >
        <Body style={{ fontFamily: "'Montserrat', sans-serif" }} className="bg-muted text-primary">
          {children}
        </Body>
      </Tailwind>
    </Html>
  );
}
