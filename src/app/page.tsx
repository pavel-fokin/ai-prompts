'use client';

import { SearchPrompts } from '@/features/search-prompts';
import { PromptCard } from '@/features/prompt-card';

import styles from './page.module.css';

const prompts = [
  {
    title: 'Healthy Weekly Meal Plan with Shopping List',
    description:
      'Design a healthy weekly meal plan for two, including recipes and a grocery list, with a focus on quick preparation and affordability.',
    tags: ['health', 'meal plan', 'grocery list'],
  },
  {
    title: 'Morning Routine for Productivity',
    description:
      'Help me create a tailored morning routine that includes mindfulness, exercise, and planning to boost productivity while working from home.',
    tags: ['productivity', 'morning routine'],
  },
  {
    title: 'Quick 15-Minute Workouts',
    description:
      'Suggest three quick and effective 15-minute workout routines I can do daily at home, focusing on full-body fitness.',
    tags: ['fitness', 'workout', 'home workout'],
  },
  {
    title: 'Summarizing Key Points',
    description:
      'Summarize the key points from [insert topic/article] in a concise and actionable format.',
    tags: ['summary', 'topic', 'article'],
  },
  {
    title: 'Time-Management Techniques',
    description:
      'Recommend five effective time-management techniques to optimize a busy schedule and prevent burnout.',
    tags: ['time management', 'busy schedule', 'prevent burnout'],
  },
  {
    title: 'Creative Weekend Activities',
    description:
      'Suggest five affordable, creative weekend activities I can do with family or friends.',
    tags: ['affordable', 'creative', 'weekend activities'],
  },
  {
    title: 'Saving Money on Groceries',
    description:
      'Provide practical tips to save money on groceries while ensuring healthy and delicious meals.',
    tags: ['saving money', 'groceries', 'healthy meals'],
  },
  {
    title: 'Drafting a Professional Email',
    description:
      'Help me write a professional email to request a meeting with my boss about {{specific topic}}, highlighting its importance and proposed agenda.',
    tags: ['professional email', 'meeting', 'boss'],
  },
  {
    title: 'Reducing Screen Time',
    description:
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
