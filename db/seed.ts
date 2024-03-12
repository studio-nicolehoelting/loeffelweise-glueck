import { db, Review } from "astro:db";

export default async function () {
    await db.insert(Review).values([
        {
            author: "Moritz Hölting",
            recipe: "apfel-liebt-mandel",
            rating: 5,
            content: "Leckerer Kuchen!!",
        },
        { author: "Nicole H.", recipe: "bärlauch-butter", rating: 4 },
        { author: "Jette", recipe: "existiert-nicht", rating: 2 },
    ]);
}
