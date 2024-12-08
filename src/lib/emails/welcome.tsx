import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Link,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { interpolate } from './utils';
import Layout from './layout';

interface Props {
  locale: string;
}

export default function Welcome({ locale }: Props) {
  return <Layout lang={locale}></Layout>;
}
