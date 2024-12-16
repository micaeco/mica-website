import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

import { Link } from "@/i18n/routing";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { isExternalLink } from "@/lib/utils";

interface FooterLink {
  href: string;
  children: React.ReactNode;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface FooterLinkProps extends FooterLink {
  className?: string;
}

interface SocialProps {
  platform: "x" | "linkedin" | "github" | "youtube";
  url: string;
}

interface FooterBottomProps {
  currentYear: number;
  copyright: string;
  socialLinks: SocialProps[];
}

function FooterLink({
  href,
  children,
  className = "flex items-center gap-1 text-xs hover:text-primary",
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      target={isExternalLink(href) ? "_blank" : undefined}
      rel={isExternalLink(href) ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
      {isExternalLink(href) && <ExternalLink size={14} />}
    </Link>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase text-primary">{title}</h2>
      <nav className="flex flex-col gap-4">{children}</nav>
    </div>
  );
}

function FooterBottom({ currentYear, copyright, socialLinks }: FooterBottomProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <div>
        <Link href="/" className="mb-2 flex items-center gap-2">
          <Image
            src="/logos/logo-dark.svg"
            alt="MICA Logo"
            width={30}
            height={30}
            className="opacity-70"
          />
          <span className="text-lg font-bold">MICA</span>
        </Link>
        <p className="text-xs">
          &copy; {currentYear} MICA ECO. {copyright}
        </p>
      </div>

      <nav className="flex gap-4">
        <Button size="icon" variant="ghost" className="group" asChild>
          <Link href={socialLinks[0].url} target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/x-icon.svg"
              alt="x icon"
              width={20}
              height={20}
              className="opacity-50 transition-opacity group-hover:opacity-100"
            />
            <span className="sr-only">MICA on X</span>
          </Link>
        </Button>
        <Button size="icon" variant="ghost" className="group" asChild>
          <Link href={socialLinks[1].url} target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin icon"
              width={20}
              height={20}
              className="opacity-50 transition-opacity group-hover:opacity-100"
            />
            <span className="sr-only">MICA on LinkedIn</span>
          </Link>
        </Button>
        <Button size="icon" variant="ghost" className="group" asChild>
          <Link href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github-icon.svg"
              alt="github icon"
              width={20}
              height={20}
              className="opacity-50 transition-opacity group-hover:opacity-100"
            />
            <span className="sr-only">MICA on GitHub</span>
          </Link>
        </Button>
        <Button size="icon" variant="ghost" className="group" asChild>
          <Link href={socialLinks[3].url} target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/youtube-icon.svg"
              alt="youtube icon"
              width={20}
              height={20}
              className="opacity-50 transition-opacity group-hover:opacity-100"
            />
            <span className="sr-only">MICA on YouTube</span>
          </Link>
        </Button>
      </nav>
    </div>
  );
}

export default function Footer() {
  const common = useTranslations("common");
  const tNavLinks = useTranslations("nav-links");
  const tNavCta = useTranslations("nav-cta");
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialProps[] = [
    { platform: "x", url: "https://x.com/micaeco_bcn" },
    { platform: "linkedin", url: "https://linkedin.com/company/micaeco" },
    { platform: "github", url: "https://github.com/micaeco" },
    { platform: "youtube", url: "https://www.youtube.com/@micaeco_bcn/videos" },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="mx-auto max-w-5xl px-8 py-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Section title={common("company")}>
            <FooterLink href="/product">{tNavLinks("product")}</FooterLink>
            <FooterLink href="/beta">{tNavLinks("beta")}</FooterLink>
            <FooterLink href="/about">{tNavLinks("about")}</FooterLink>
            <FooterLink href="/blog">{tNavLinks("blog")}</FooterLink>
            <FooterLink href="/faqs">{tNavLinks("faqs")}</FooterLink>
          </Section>

          <Section title={common("quick-links")}>
            <FooterLink href="/contact">{tNavCta("contact")}</FooterLink>
            <FooterLink href="/register">{tNavCta("register")}</FooterLink>
            <FooterLink href="https://app.mica.eco">{tNavCta("demo")}</FooterLink>
          </Section>

          <Section title={common("legal")}>
            <FooterLink href="/privacy-policy">{tNavLinks("privacy-policy")}</FooterLink>
          </Section>

          <Section title={common("location")}>
            <p className="text-xs">Barcelona, {common("spain")}</p>
          </Section>
        </div>

        <Separator className="my-8" />

        <FooterBottom
          currentYear={currentYear}
          copyright={common("all-rights-reserved")}
          socialLinks={socialLinks}
        />
      </div>
    </footer>
  );
}
