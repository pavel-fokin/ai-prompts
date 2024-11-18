import { Button } from '@/components/ui/button';
import { TextArea } from '@/components/ui/text-area';
import { TextField } from '@/components/ui/text-field';

import styles from './submit-prompt-form.module.css';

const SubmitPromptForm = () => {
  return (
    <form className={styles['submit-prompt-form']}>
      <div className={styles['submit-prompt-form__field']}>
        <Label>Prompt title</Label>
        <TextField.Root
          placeholder="Enter a concise and descriptive title"
          size="3"
        />
      </div>
      <div className={styles['submit-prompt-form__field']}>
        <Label>Prompt text</Label>
        <TextArea
          placeholder="Type the exact wording of your prompt here"
          size="3"
          rows={10}
        />
      </div>
      <div className={styles['submit-prompt-form__actions']}>
        <Button variant="solid" highContrast size="3">
          Submit prompt
        </Button>
      </div>
    </form>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className={styles['submit-prompt-form__label']}>{children}</label>
  );
};

export { SubmitPromptForm };