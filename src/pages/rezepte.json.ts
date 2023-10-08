import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getImage } from "astro:assets";

export const GET: APIRoute = async () => {
    const data = await getCollection("rezepte").then(
        async (collection) =>
            await Promise.all(
                collection.map(async (item) => ({
                    name: item.data.name,
                    slug: item.slug,
                    img: await getImage({
                        src: item.data.bild,
                        quality: "mid",
                    }).then((img) => img.src),
                    date: item.data.datum,
                    praesentiert: item.data.praesentiert,
                    tags: item.data.tags,
                }))
            )
    );
    return new Response(JSON.stringify(data));
};
