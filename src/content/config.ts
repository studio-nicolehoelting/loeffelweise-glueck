import { z, defineCollection } from "astro:content";

const rezepteCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            bild: image(),
            datum: z.date(),
            name: z.string(),
            tags: z.array(z.string()),
            zutaten: z.array(z.string()),
            kommentar: z.string().optional(),
            praesentiert: z.number().optional(),
        }),
});

const geschichtenCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            order: z.number(),
            images: z.array(image()),
        }),
});
const nicoleJetteCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            order: z.number(),
            images: z.array(image()),
        }),
});
const loeffelfreundeCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            order: z.number(),
            images: z.array(image()),
        }),
});
const leseglueckCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            order: z.number(),
            images: z.array(image()),
        }),
});

export const collections = {
    rezepte: rezepteCollection,
    geschichten: geschichtenCollection,
    nicole_jette: nicoleJetteCollection,
    loeffelfreunde: loeffelfreundeCollection,
    leseglueck: leseglueckCollection,
};
