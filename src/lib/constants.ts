import {
  Droplet,
  Lightbulb,
  CircleAlert,
  TrendingUp,
  Users,
  Gift,
  Zap,
  ClipboardCheck,
  FileQuestion,
  UserCheck,
  Cpu,
  User,
  Mail,
  Phone,
  Info,
  Settings,
  Wrench,
  CheckCircle,
  Maximize
} from 'lucide-react';

import { IInputField } from '@/types';

export const languageMap: { [key: string]: string } = {
  ca: 'Català',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
  ar: 'العربية',
  hi: 'हिन्दी',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  cs: 'Čeština',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
} as const;

export function getNavLinks(t: (key: string) => string) {
  return [
    { href: '/', label: t('navLinks.home') },
    { href: '/product', label: t('navLinks.product') },
    { href: '/beta', label: t('navLinks.beta') },
    { href: '/about', label: t('navLinks.about') },
    { href: '/faqs', label: t('navLinks.faqs') },
    { href: '/blog', label: t('navLinks.blog') },
  ];
}

export function getNavCta(t: (key: string) => string) {
  return [
    { href: '/contact', label: t('navCta.contact') },
    { href: 'https://app.mica.eco', label: t('navCta.demo') },
    { href: '/register', label: t('navCta.register') },
  ];
}

export function getSolutionBenefits(t: (key: string) => string) {
  return [
    {
      icon: Droplet,
      title: t('benefit1.title'),
      description: t('benefit1.text'),
    },
    {
      icon: CircleAlert,
      title: t('benefit2.title'),
      description: t('benefit2.text'),
    },
    {
      icon: TrendingUp,
      title: t('benefit3.title'),
      description: t('benefit3.text'),
    },
  ];
}

export function getBetaBenefits(t: (key: string) => string) {
  return [
    {
      icon: Zap,
      title: t('benefit1.title'),
      description: t('benefit1.text'),
    },
    {
      icon: TrendingUp,
      title: t('benefit2.title'),
      description: t('benefit2.text'),
    },
    {
      icon: Users,
      title: t('benefit3.title'),
      description: t('benefit3.text'),
    },
    {
      icon: Gift,
      title: t('benefit4.title'),
      description: t('benefit4.text'),
    },
  ];
}

export function getBetaSteps(t: (key: string) => string) {
  return [
    {
      icon: ClipboardCheck,
      title: t("step1.title"),
      description: t("step1.text"),
    },
    {
      icon: FileQuestion,
      title: t("step2.title"),
      description: t("step2.text"),
    },
    {
      icon: UserCheck,
      title: t("step3.title"),
      description: t("step3.text"),
    },
    {
      icon: Cpu,
      title: t("step4.title"),
      description: t("step4.text"),
    },
  ];
}

export function getTeamMembers(t: (key: string) => string) {
  return [
    {
      name: "Jaime",
      src: "/images/jaime.webp",
      role: t("jaime.role"),
      studies: t("jaime.studies"),
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/jaime-escobar-8949a71/" },
      ]
    },
    {
      name: 'Miquel',
      src: '/images/miki.webp',
      role: t('miquel.role'),
      studies: t('miquel.studies'),
      socials: [
        {
          platform: 'linkedin',
          url: 'https://es.linkedin.com/in/miquel-escobar-castells',
        },
        { platform: 'github', url: 'https://github.com/miquelescobar' },
      ],
    },
    {
      name: 'Lucía',
      src: '/images/lucia.webp',
      role: t('lucia.role'),
      studies: t('lucia.studies'),
      socials: [{ platform: 'github', url: 'https://github.com/LUciaChHcon' }],
    },
    {
      name: 'Marta',
      src: '/images/marta.webp',
      role: t('marta.role'),
      studies: t('marta.studies'),
      socials: [],
    },
    {
      name: 'Irene',
      src: '/images/irene.webp',
      role: t('irene.role'),
      studies: t('irene.studies'),
      socials: [
        {
          platform: 'linkedin',
          url: 'https://uk.linkedin.com/in/irene-escobar-castells',
        },
        {
          platform: 'github',
          url: 'https://github.com/ireescobar',
        },
      ],
    },
    {
      name: 'Gabriel',
      src: '/images/gabi.webp',
      role: t('gabriel.role'),
      studies: t('gabriel.studies'),
      socials: [
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/gabriel-escobar-castells-8b4248268/',
        },
        {
          platform: 'github',
          url: 'https://github.com/GabrielEscobar04',
        },
      ],
    }
  ]
}

export function getRegisterFormFields(t: (key: string) => string, common: (key: string) => string): IInputField[] {
  return [
    {
      type: 'input',
      icon: User,
      label: t('name.label'),
      inputType: 'text',
      name: 'name',
      placeholder: t('name.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: User,
      label: t('surname.label'),
      inputType: 'text',
      name: 'surname',
      placeholder: t('surname.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: Mail,
      label: t('email.label'),
      inputType: 'email',
      name: 'email',
      placeholder: t('email.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: Phone,
      label: t('phone.label') + ` (${common('optional')})`,
      inputType: 'tel',
      name: 'phone',
      placeholder: t('phone.placeholder'),
      required: false,
    },
    {
      type: 'input',
      icon: Info,
      label: t('referralSource.label') + ` (${common('optional')})`,
      inputType: 'text',
      name: 'referralSource',
      placeholder: t('referralSource.placeholder'),
      required: false,
    },
    {
      type: 'input',
      label: t('interestInBeta.label'),
      link: '/beta',
      inputType: 'checkbox',
      name: 'interestInBeta',
      required: false,
      className: 'mt-12',
    },
    {
      type: 'input',
      label: t('privacyPolicy.label'),
      link: '/privacy-policy',
      inputType: 'checkbox',
      name: 'privacyPolicy',
      required: true,
    },
  ];
}

export function getTimelineItems(t: {
  (key: string): string;
  raw: (key: string) => any;
}) {
  const stepConfig = {
    step1: {
      date: 'AGO 22',
      icon: Lightbulb,
      color: 'bg-gray-200'
    },
    step2: {
      date: 'JUN 24',
      icon: Settings,
      color: 'bg-tertiary'
    },
    step3: {
      date: 'OCT 24',
      icon: Wrench,
      color: 'bg-secondary'
    },
    step4: {
      date: 'ABR 25',
      icon: CheckCircle,
      color: 'bg-primary'
    },
    step5: {
      date: 'OCT 25',
      icon: Maximize,
      color: 'bg-accent'
    }
  };

  return Array.from({ length: 5 }, (_, i) => {
    const stepKey = `step${i + 1}` as keyof typeof stepConfig;
    const config = stepConfig[stepKey];

    const items = [];
    const itemsData = t.raw(`${stepKey}.items`);
    for (let i = 0; i < Object.keys(itemsData).length; i++) {
      items.push(`${itemsData[i]}`);
    }

    return {
      date: config.date,
      title: t(`${stepKey}.title`),
      icon: config.icon,
      items,
      color: config.color,
    };
  });
}