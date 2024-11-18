import { SubmitPromptForm } from '@/features/submit-prompt-form';

import styles from './page.module.css';

export default function SubmitPrompt() {
  return (
    <div className={styles['submit-prompt-page']}>
      <h2 className={styles['submit-prompt-page__title']}>Submit new prompt</h2>
      <SubmitPromptForm />
    </div>
  );
};
