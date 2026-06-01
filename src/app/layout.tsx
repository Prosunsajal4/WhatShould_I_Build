import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BuildNext - AI-Powered Project Ideas',
  description: 'Generate personalized software project ideas with AI',
  openGraph: {
    title: 'BuildNext',
    description: 'AI-powered project ideas for developers',
    type: 'website',
    url: 'https://buildnext.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildNext',
    description: 'AI-powered project ideas for developers',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
