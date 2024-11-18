import { Button } from '@/components/ui/button';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__title']}>AI Prompts</h1>
      <div className={styles['header__actions']}>
        <Button variant="ghost" highContrast size="3">Log in</Button>
        <Button variant="solid" highContrast size="3">Submit prompt</Button>
      </div>
    </header>
  );
};
