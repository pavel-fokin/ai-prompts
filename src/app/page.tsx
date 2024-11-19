import { SearchPrompts } from '@/features/search-prompts';
import { PromptCard } from '@/features/prompt-card';

import styles from './page.module.css';

const prompts = [
  {
    id: '1',
    title: 'Healthy Weekly Meal Plan with Shopping List',
    prompt:
      'Design a healthy weekly meal plan for two, including recipes and a grocery list, with a focus on quick preparation and affordability.',
    tags: ['health', 'meal plan', 'grocery list'],
  },
  {
    id: '2',
    title: 'Morning Routine for Productivity',
    prompt:
      'Help me create a tailored morning routine that includes mindfulness, exercise, and planning to boost productivity while working from home.',
    tags: ['productivity', 'morning routine'],
  },
  {
    id: '3',
    title: 'Quick 15-Minute Workouts',
    prompt:
      'Suggest three quick and effective 15-minute workout routines I can do daily at home, focusing on full-body fitness.',
    tags: ['fitness', 'workout', 'home workout'],
  },
  {
    id: '4',
    title: 'Summarizing Key Points',
    prompt:
      'Summarize the key points from [insert topic/article] in a concise and actionable format.',
    tags: ['summary', 'topic', 'article'],
  },
  {
    id: '5',
    title: 'Time-Management Techniques',
    prompt:
      'Recommend five effective time-management techniques to optimize a busy schedule and prevent burnout.',
    tags: ['time management', 'busy schedule', 'prevent burnout'],
  },
  {
    id: '6',
    title: 'Creative Weekend Activities',
    prompt:
      'Suggest five affordable, creative weekend activities I can do with family or friends.',
    tags: ['affordable', 'creative', 'weekend activities'],
  },
  {
    id: '7',
    title: 'Saving Money on Groceries',
    prompt:
      'Provide practical tips to save money on groceries while ensuring healthy and delicious meals.',
    tags: ['saving money', 'groceries', 'healthy meals'],
  },
  {
    id: '8',
    title: 'Drafting a Professional Email',
    prompt:
      'Help me write a professional email to request a meeting with my boss about {{specific topic}}, highlighting its importance and proposed agenda.',
    tags: ['professional email', 'meeting', 'boss'],
  },
  {
    id: '9',
    title: 'Reducing Screen Time',
    prompt:
      'Suggest practical strategies to reduce screen time while maintaining work productivity and quality leisure time.',
    tags: ['screen time', 'work productivity', 'quality leisure time'],
  },
];

export default function Home() {
  return (
    <div className={styles['page']}>
      <main className={styles['page__main']}>
        <div className={styles['page__search-prompts']}>
          <SearchPrompts />
        </div>
        <div className={styles['page__prompts']}>
          {prompts.map((prompt) => (
            <PromptCard key={prompt.title} {...prompt} />
          ))}
        </div>
      </main>
    </div>
  );
}
