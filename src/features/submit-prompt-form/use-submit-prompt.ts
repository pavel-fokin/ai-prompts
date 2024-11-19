import { supabase } from '@/lib/supabase/client';

interface Prompt {
  title: string;
  text: string;
}

export const useSubmitPrompt = () => {
  return async (prompt: Prompt) => {
    return await supabase.from('prompt').insert(prompt);
  };
};
