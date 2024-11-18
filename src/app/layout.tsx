import type { Metadata } from 'next';

import '@radix-ui/themes/styles.css';

import { Theme } from './theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Prompts',
  description: 'Search and submit AI prompts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
