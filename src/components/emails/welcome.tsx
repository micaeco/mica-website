import Layout from "./layout";

interface Props {
  locale: string;
}

export default function Welcome({ locale }: Props) {
  return <Layout lang={locale}></Layout>;
}
