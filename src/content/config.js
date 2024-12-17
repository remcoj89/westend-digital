import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string()
  })
})

export const collections = {
  blog: blogsCollection,
}
