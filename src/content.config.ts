import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const CATEGORIES = ['City of Del Rio','Val Verde County','Schools','Police','Health','Community'] as const;
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(), summary: z.string(), category: z.enum(CATEGORIES),
    image: z.string().optional().default(''), date: z.coerce.date(),
    author: z.string().default('TDRP Staff'), featured: z.boolean().default(false), breaking: z.boolean().default(false), draft: z.boolean().default(false),
  }),
});
export const collections = { stories };
