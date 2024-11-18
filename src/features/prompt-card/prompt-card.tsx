import { Avatar } from '@/components/ui/avatar';

import styles from './promt-card.module.css';

interface PromptCardProps {
  title: string;
  description: string;
  tags: string[];
}

interface PromptContributorProps {
  contributor: string;
}

const PromptCard = ({ title, description, tags }: PromptCardProps) => {
  return (
    <article
      className={styles['prompt-card']}
      aria-labelledby="prompt-title"
      aria-describedby="prompt-description"
    >
      <h2 id="prompt-title" className={styles['prompt-card__title']}>
        {title}
      </h2>
      <PromptContributor contributor="John Doe" />
      <p id="prompt-description" className={styles['prompt-card__description']}>
        {description}
      </p>
      <PromptTags tags={tags} />
    </article>
  );
};

const PromptContributor = ({ contributor }: PromptContributorProps) => {
  return (
    <div className={styles['prompt-contributor__container']}>
      <Avatar
        fallback={contributor.slice(0, 2)}
        size="1"
        radius="full"
        highContrast
      />
      <div className={styles['prompt-contributor__name']}>{contributor}</div>
    </div>
  );
};

const PromptTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles['prompt-tags']} aria-label="Prompt tags">
      {tags.map((tag, index) => (
        <span key={index} className={styles['prompt-tags__tag']}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export { PromptCard };
