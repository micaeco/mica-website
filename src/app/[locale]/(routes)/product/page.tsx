import { Metadata } from "next";
import { getMessages } from "next-intl/server";

import HowItWorks from "./_components/how-it-works";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const product = messages.product as { title: string; description: string };

  return {
    title: product.title,
    description: product.description,
  };
}

export default function Product() {
  return (
    <main>
      <HowItWorks />
    </main>
  );
}
