'use client';

import { Button } from '@/components/ui/button';
import { TextArea } from '@/components/ui/text-area';
import { TextField } from '@/components/ui/text-field';

import { useSubmitPrompt } from './use-submit-prompt';

import styles from './submit-prompt-form.module.css';

const SubmitPromptForm = () => {
  const submitPrompt = useSubmitPrompt();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const prompt = {
      title: formData.get('title') as string,
      text: formData.get('text') as string,
    };
    console.log(prompt);
    await submitPrompt(prompt);
  };

  return (
    <form className={styles['submit-prompt-form']} onSubmit={handleSubmit}>
      <div className={styles['submit-prompt-form__field']}>
        <Label>Prompt title</Label>
        <TextField.Root
          name="title"
          placeholder="Enter a concise and descriptive title"
          size="3"
        />
      </div>
      <div className={styles['submit-prompt-form__field']}>
        <Label>Prompt text</Label>
        <TextArea
          name="text"
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