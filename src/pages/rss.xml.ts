import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt({
    html: true,
});

export const GET: APIRoute = async (context) => {
    const items = await getCollection("rezepte").then((collection) =>
        collection
            .sort((a, b) => (a.data.datum < b.data.datum ? 1 : -1))
            .map((rezept) => ({
                title: rezept.data.name,
                pubDate: rezept.data.datum,
                link: `/rezepte/${rezept.slug}/`,
                description:
                    rezept.data.kommentar ?? "Jetzt unser Rezept nachmachen",
                content: zutatenUndZubereitungToHtml(
                    rezept.data.zutaten,
                    rezept.body
                ),
            }))
    );
    return rss({
        title: "Rezepte - Löffelweise Glück",
        description: "Unsere Rezepte",
        site: context.site ?? "https://loeffelweise-glueck.de",
        stylesheet: "/rss/styles.xsl",
        items,
        customData: `<language>de</language>`,
    });
};

function zutatenUndZubereitungToHtml(zutaten: string[], zubereitung: string) {
    const zutatenHtml = zutaten.map((zutat) => `<li>${zutat}</li>`).join("\n");
    const zubereitungHtml = parser.render(zubereitung);
    return sanitizeHtml(
        `<h1>Zutaten</h1><ul>${zutatenHtml}</ul><h1>Zubereitung</h1>${zubereitungHtml}`
    );
}
