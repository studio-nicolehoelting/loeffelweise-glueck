import type { APIRoute, GetStaticPaths } from "astro";
import { getImage } from "astro:assets";
import { getCollection, getEntryBySlug } from "astro:content";

export const getStaticPaths = (async () => {
    const rezepte = await getCollection("rezepte");
    return rezepte.map((rezept) => ({
        params: {
            rezept: rezept.slug,
        },
        props: {
            slug: rezept.slug,
        },
    }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
    const { rezept: slug } = params;
    if (!slug) throw new Error("No slug provided");

    const rezept = await getEntryBySlug("rezepte", slug);
    if (!rezept) {
        throw new Error(`Rezept ${slug} not found`);
    }

    const img = await getImage({
        src: rezept.data.bild,
        quality: "mid",
    }).then((img) => img.src);

    return new Response(
        JSON.stringify({
            name: rezept.data.name,
            slug: rezept.slug,
            img,
            date: rezept.data.datum,
            tags: rezept.data.tags,
            zutaten: rezept.data.zutaten,
            zubereitung: rezept.body,
            kommentar: rezept.data.kommentar,
            praesentiert: rezept.data.praesentiert,
        })
    );
};
