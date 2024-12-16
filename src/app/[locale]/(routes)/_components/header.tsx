"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import LanguageSwitcher from "./language-switcher";
import { Button } from "@/components/ui/button";
import { cn, isExternalLink } from "@/lib/utils";

interface Translations {
  product: string;
  beta: string;
  about: string;
  blog: string;
  faqs: string;
  contact: string;
  demo: string;
  register: string;
}

interface LogoProps {
  onClick?: () => void;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
  pathname: string;
}

interface DesktopNavProps {
  children: Translations;
  locale: string;
}

interface MobileNavProps {
  children: Translations;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className="z-30 mr-4 flex items-center space-x-2 font-semibold"
      onClick={onClick}
    >
      <Image src="/logos/logo.webp" alt="Logo" width={35} height={35} />
      <h5 className="font-semibold">MICA</h5>
    </Link>
  );
}

function NavLink({ href, children, onClick, className, isMobile, pathname }: NavLinkProps) {
  return (
    <Link
      href={href}
      target={isExternalLink(href) ? "_blank" : "_self"}
      onClick={onClick}
      className={cn(
        "flex items-center transition-colors",
        className,
        !className && [
          "text-muted-foreground hover:text-foreground",
          pathname.replace(/\/[^/]*\/|\/[^/]*$/, "/") === href ? "text-foreground" : "",
          isMobile ? "text-md" : "text-sm",
        ]
      )}
    >
      {children}
      {isExternalLink(href) && <ExternalLink size={16} className="ml-1 inline" />}
    </Link>
  );
}

function DesktopNav({ children, locale }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex items-center space-x-6">
        <Logo />
        <NavLink href="/product" pathname={pathname}>
          {children.product}
        </NavLink>
        <NavLink href="/beta" pathname={pathname}>
          {children.beta}
        </NavLink>
        <NavLink href="/about" pathname={pathname}>
          {children.about}
        </NavLink>
        <NavLink href="/blog" pathname={pathname}>
          {children.blog}
        </NavLink>
        <NavLink href="/faqs" pathname={pathname}>
          {children.faqs}
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <LanguageSwitcher shortened />
        <Button variant="secondary">
          <Link href="/contact">{children.contact}</Link>
        </Button>
        <Button variant="secondary">
          <Link href={`https://app.mica.eco/${locale}`} target="_blank">
            {children.demo}
            <ExternalLink size={16} className="ml-1 inline" />
          </Link>
        </Button>
        <Button>
          <Link href="/register">{children.register}</Link>
        </Button>
      </div>
    </nav>
  );
}

function MobileNav({ children, isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 overflow-y-auto bg-white"
          style={{ top: "var(--header-height, 60px)" }}
        >
          <div className="flex min-h-full flex-col justify-between space-y-6 p-8 text-lg">
            <div className="flex flex-col items-start justify-start space-y-6">
              <NavLink
                href="/product"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.product}
              </NavLink>
              <NavLink
                href="/beta"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.beta}
              </NavLink>
              <NavLink
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.about}
              </NavLink>
              <NavLink
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.blog}
              </NavLink>
              <NavLink
                href="/faqs"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.faqs}
              </NavLink>
              <NavLink
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.contact}
              </NavLink>
              <NavLink
                href={`https://app.mica.eco/${locale}`}
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.demo}
              </NavLink>
              <NavLink
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                isMobile
                pathname={pathname}
              >
                {children.register}
              </NavLink>
            </div>
            <LanguageSwitcher className="text-lg" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const locale = useLocale();
  const tNavLinks = useTranslations("nav-links");
  const tNavCta = useTranslations("nav-cta");

  const translations: Translations = {
    product: tNavLinks("product"),
    beta: tNavLinks("beta"),
    about: tNavLinks("about"),
    blog: tNavLinks("blog"),
    faqs: tNavLinks("faqs"),
    contact: tNavCta("contact"),
    demo: tNavCta("demo"),
    register: tNavCta("register"),
  };

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < 1400;
    const handleResize = () => setIsMobile(checkIsMobile());

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMobile === false) setIsMenuOpen(false);
  }, [isMobile]);

  if (isMobile === null) return null;

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-3">
        {isMobile && <Logo onClick={() => setIsMenuOpen(false)} />}

        {!isMobile ? (
          <DesktopNav locale={locale}>{translations}</DesktopNav>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-30 h-6 w-6 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</AnimatePresence>
          </button>
        )}
      </div>

      {isMobile && (
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          {translations}
        </MobileNav>
      )}
    </header>
  );
}
