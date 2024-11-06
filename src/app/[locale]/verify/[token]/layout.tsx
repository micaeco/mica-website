import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Verification',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen items-center justify-center">{children}</main>;
}
