import { z, defineCollection } from 'astro:content';

const novinkyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
  }),
});

const programCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
  }),
});

export const collections = {
  'novinky': novinkyCollection,
  'program': programCollection,
};
