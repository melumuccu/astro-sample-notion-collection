import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { notionLoader } from 'notion-astro-loader'
import {
  notionPageSchema,
  transformedPropertySchema,
} from 'notion-astro-loader/schemas'

const notion = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_DATABASE_ID,
    // Use Notion sorting and filtering
    filter: {
      property: 'hidden',
      checkbox: { equals: false },
    },
  }),
  schema: notionPageSchema({
    properties: z.object({
      Name: transformedPropertySchema.title,
      date: transformedPropertySchema.date,
      tags: transformedPropertySchema.multi_select,
      slug: transformedPropertySchema.rich_text,
    }),
  }),
})

export const collections = { notion }
