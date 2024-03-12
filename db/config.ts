import { NOW, column, defineDb, defineTable } from "astro:db";

const Review = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        recipe: column.text({ collection: "rezepte" }),
        author: column.text(),
        content: column.text({ optional: true }),
        rating: column.number(),
        published: column.date({ default: NOW }),
    },
    indexes: {
        recipe_slug: { on: ["recipe"], unique: false },
    },
});

export default defineDb({
    tables: { Review },
});
