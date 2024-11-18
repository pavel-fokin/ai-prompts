'use client';

import { ThemeProvider } from 'next-themes';
import { Theme as RadixTheme } from '@radix-ui/themes';

export const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <RadixTheme accentColor="gray" grayColor="slate">
        {children}
      </RadixTheme>
    </ThemeProvider>
  );
};
