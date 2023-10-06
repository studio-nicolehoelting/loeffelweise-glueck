import Fuse from "fuse.js";

interface Rezept {
    name: string;
    slug: string;
    img: string;
    tags: string[];
    date: Date;
    praesentiert: number | undefined;
}

const rezepte = JSON.parse(
    document.getElementById("rezepte")?.dataset.rezepte || "[]"
) as Rezept[];
const searchOptions: Fuse.IFuseOptions<Rezept> = {
    includeScore: true,
    threshold: 0.4,
    keys: ["title", "url", "tags"],
};
const fuse = new Fuse(rezepte, searchOptions);

const deleteBtn = document.getElementById("delete-search") as HTMLButtonElement;
const searchInput = document.getElementById("search") as HTMLInputElement;

const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
let searchQuery = decodeURIComponent(urlParams.get("search") ?? "");
if (searchQuery.length > 0) onSearchQueryChange(true);

searchInput.addEventListener("input", (ev: Event) => {
    searchQuery = (ev.target as HTMLInputElement).value;
    onSearchQueryChange();
});

deleteBtn.addEventListener("click", () => {
    searchQuery = "";
    onSearchQueryChange(true);
});

function onSearchQueryChange(updateInput = false) {
    if (updateInput) searchInput.value = searchQuery;
    if (searchQuery.trim().length == 0) {
        refreshRecipes(rezepte);
        url.searchParams.delete("search");
    } else {
        let searchResults = fuse.search(searchQuery);
        if (searchQuery.trimStart().startsWith("#"))
            searchResults = searchResults.filter((res) =>
                res.score ? res.score < 0.2 : true
            );
        refreshRecipes(searchResults.map((r) => r.item));
        url.searchParams.set("search", encodeURIComponent(searchQuery));
    }
    window.history.pushState({}, "", url);
}

function refreshRecipes(recipeData: Rezept[]) {
    const recipeContainer = document.querySelector(
        "#rezepte"
    ) as HTMLDivElement;
    if (!recipeContainer) return;
    recipeContainer.innerHTML = "";

    recipeData.forEach((r) => {
        const recipe = document.createElement("div");
        recipe.classList.add("rezeptDisplay");
        //   if(eeWitzig) recipe.classList.add('witzig');
        const img = document.createElement("img");
        img.src = r.img;
        recipe.appendChild(img);

        const text = document.createElement("div");
        text.classList.add("text");
        const header = document.createElement("h1");
        header.innerText = r.name;
        text.appendChild(header);
        let searchSuffix = "";
        if (searchQuery.length > 0)
            searchSuffix = `?search=${encodeURIComponent(searchQuery)}`;
        const link = document.createElement("a");
        const löffelglück = document.createElement("span");
        löffelglück.innerText = "Löffelglück...";
        link.href = "./" + r.slug + "/" + searchSuffix;
        link.innerText = `Rezept zum `;
        link.classList.add("zum-rezept");
        link.appendChild(löffelglück);
        text.appendChild(link);

        const tags = document.createElement("div");
        tags.classList.add("tags");
        r.tags.forEach((t) => {
            const tag = document.createElement("button");
            tag.innerText = `#${t}`;
            tag.addEventListener("click", setupTagBtn(t));
            tag.dataset.tag = t;
            tags.appendChild(tag);
        });
        text.appendChild(tags);

        recipe.appendChild(text);

        recipeContainer.appendChild(recipe);
    });
}

// sortBtn.addEventListener("click", () => {
//     console.log(searchQuery);
// });

// function filterRezepte(query: string) {
//     if (query.length == 0) {
//         rezepteDisplays.forEach((rezept) => rezept.classList.remove("hidden"));
//         return;
//     }
//     const queries = query.split(" ");

//     const filtered = rezepteDisplays.reduce(
//         (
//             acc: {
//                 matched: HTMLDivElement[];
//                 notMatched: HTMLDivElement[];
//             },
//             rezept
//         ) => {
//             let ret = true;
//             let {
//                 name,
//                 slug,
//                 tags,
//             }: { name: string; slug: string; tags: string[] } = JSON.parse(
//                 rezept.dataset.rezeptData ?? "{}"
//             );
//             queries.forEach((query) => {
//                 let isTag = false;
//                 if (/^#/.test(query)) {
//                     query = query.replace(/^#/, "");
//                     isTag = true;
//                 }
//                 const r = new RegExp(
//                     query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
//                     "i"
//                 );
//                 if (
//                     !(
//                         (r.test(name) && isTag == false) ||
//                         (isTag == true &&
//                             tags
//                                 .map((tag) => r.test(tag))
//                                 .some((tagFound) => tagFound == true))
//                     )
//                 )
//                     ret = false;
//             });
//             acc[ret ? "matched" : "notMatched"].push(rezept);
//             return acc;
//         },
//         { matched: [], notMatched: [] }
//     );

//     filtered.notMatched.forEach((rezept) => rezept.classList.add("hidden"));
//     filtered.matched.forEach((rezept) => rezept.classList.remove("hidden"));
// }

// console.log(fuse.search("schnell"));

function setupTagBtn(tag: string) {
    return () => {
        url.searchParams.set("search", encodeURIComponent("#" + tag));
        searchQuery = "#" + tag;
        onSearchQueryChange(true);
        window.history.pushState({}, "", url);
    };
}

window.addEventListener("load", () => {
    const tagBtns = Array.from(
        document.querySelectorAll(".tag-btn")
    ) as HTMLButtonElement[];

    tagBtns.forEach((btn) => {
        if (!btn.dataset.tag) return;
        btn.addEventListener("click", setupTagBtn(btn.dataset.tag));
    });
});
