import Link from 'next/link';

import { Button } from '@/components/ui/button';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Link href="/">
        <h1 className={styles['header__title']}>AI Prompts</h1>
      </Link>
      <div className={styles['header__actions']}>
        <Button asChild variant="ghost" highContrast size="3">
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild variant="solid" highContrast size="3">
          <Link href="/submit-prompt">Submit prompt</Link>
        </Button>
      </div>
    </header>
  );
};
