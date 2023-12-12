const community = defineCollection({
  type: 'content',
  schema: z.object({
    tags: z.array(z.string())
  })
});
const official = defineCollection({
  type: 'content',
  schema: z.object({
    tags: z.array(z.string())
  })
});
const authors = defineCollection({
  type: 'data',
  schema: z.object({ /* ... */ })
});

export const collections = {
  'community': community,
  'official': official,
  'authors': authors,
};