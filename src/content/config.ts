import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const abstractDoc = defineCollection({
    type: 'content',
    schema: () =>
        z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            sidebar_position: z.number().optional(),
            sidebar_label: z.string().optional(),
            no_page_headings: z.boolean().optional(),
        }),
});

export const products = [
    'law',
] as const;
export const devs = [
    'dev',
] as const;

export const collections = {
    ...products.reduce<PrdDocs>((prev, curr) => {
        prev[`doc-prd-${curr}`] = abstractDoc;
        return prev;
    }, {} as PrdDocs),
    ...devs.reduce<DevDocs>((prev, curr) => {
        prev[`doc-${curr}`] = abstractDoc;
        return prev;
    }, {} as DevDocs),
};

export const urlForCollection = {
    ...products.reduce<Record<PrdDocKey, string>>(
        (prev, curr) => {
            prev[`doc-prd-${curr}`] = `prd/${curr}`;
            return prev;
        },
        {} as Record<PrdDocKey, string>
    ),
    ...devs.reduce<Record<Devs, Dev>>(
        (prev, curr) => {
            prev[`doc-${curr}`] = curr;
            return prev;
        },
        {} as Record<Devs, Dev>
    ),
};

export type PrdDoc = (typeof products)[number];
export type PrdDocKey = `doc-prd-${PrdDoc}`;
export type PrdDocs = Record<PrdDocKey, typeof abstractDoc>;

export type Dev = (typeof devs)[number];
export type Devs = `doc-${Dev}`;
export type DevDocs = Record<Devs, typeof abstractDoc>;
