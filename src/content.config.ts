import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/site-pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(99),
    /** Canva share/embed link (or the whole embed code) to show full-width under the page text */
    canvaEmbed: z.string().optional(),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/home' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(1),
    name: z.string().optional(),
    tagline: z.string().optional(),
    email: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    instagram2: z.string().optional(),
    /** words the homepage headline types out, one after another */
    roles: z.array(z.string()).optional(),
    /** second line of the homepage headline */
    heroLine: z.string().optional(),
  }),
});

const tags = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tags' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, pages, home, tags };
