import { TextField } from '@/components/ui/text-field';
import { SearchIcon } from '@/components/icons';

export const SearchPrompts = () => {
  return (
    <TextField.Root placeholder="Search prompts..." size="3">
      <TextField.Slot>
        <SearchIcon size={16} fontWeight="light" />
      </TextField.Slot>
    </TextField.Root>
  );
};
