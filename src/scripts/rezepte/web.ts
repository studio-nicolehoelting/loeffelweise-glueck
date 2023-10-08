import Fuse from "fuse.js";
import {
    sortByDateDesc,
    type Rezept,
    sortByDateAsc,
    sortByNameAsc,
    sortByNameDesc,
} from "./common";

const rezepte = JSON.parse(
    document.getElementById("rezepte")?.dataset.rezepte || "[]"
) as Rezept[];
const searchOptions: Fuse.IFuseOptions<Rezept> = {
    includeScore: true,
    threshold: 0.6,
    keys: [{ name: "name", weight: 2 }, "slug", "tags"],
};
const fuse = new Fuse(rezepte, searchOptions);

enum SortOrder {
    Praesentiert,
    Aktuell,
    Historisch,
    AtoZ,
    ZtoA,
}

const sortModes = [
    {
        content: "präsentiert",
        title: "Unsere Empfehlungen",
    },
    {
        content: "aktuell",
        title: "Chronologisch absteigend",
    },
    {
        content: "historisch",
        title: "Chronologisch aufsteigend",
    },
    {
        content: "A &rarr; Z",
        title: "Von A bis Z",
    },
    {
        content: "A &larr; Z",
        title: "Von Z bis A",
    },
];

const deleteBtn = document.getElementById("delete-search") as HTMLButtonElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const sortOrderBtn = document.getElementById("sortOrder") as HTMLButtonElement;

const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
let searchQuery = decodeURIComponent(urlParams.get("search") ?? "");
if (searchQuery.length > 0) onSearchQueryChange(true);

let sortMode = Number(sessionStorage.getItem("sortOrder")) || 0;

searchInput.addEventListener("input", (ev: Event) => {
    searchQuery = (ev.target as HTMLInputElement).value;
    onSearchQueryChange();
});

deleteBtn.addEventListener("click", () => {
    searchQuery = "";
    onSearchQueryChange(true);
});

sortOrderBtn.addEventListener("click", () => {
    setSortOrder((sortMode + 1) % sortModes.length);
});
sortOrderBtn.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
    setSortOrder((sortMode - 1) % sortModes.length);
});

function onSearchQueryChange(updateInput = false) {
    if (updateInput) searchInput.value = searchQuery;
    if (searchQuery.trim().length == 0) {
        const rezepteSortiert = sortData(rezepte.map((r) => ({ item: r })));
        refreshRecipes(rezepteSortiert.map((r) => r.item));
        url.searchParams.delete("search");
    } else {
        let searchResults = sortData(fuse.search(searchQuery));
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

function setSortOrder(mode: number) {
    if (mode > sortModes.length - 1) return;
    sessionStorage.setItem("sortOrder", mode.toString());
    sortOrderBtn.innerHTML = sortModes[mode].content;
    sortOrderBtn.title = sortModes[mode].title;
    sortMode = mode;
    onSearchQueryChange();
}

function sortData(data: { item: Rezept; score?: number }[]) {
    if (sortMode == SortOrder.Praesentiert) return data;
    if (sortMode == SortOrder.Aktuell) return data.sort(sortByDateDesc);
    if (sortMode == SortOrder.Historisch) return data.sort(sortByDateAsc);
    if (sortMode == SortOrder.AtoZ) return data.sort(sortByNameAsc);
    if (sortMode == SortOrder.ZtoA) return data.sort(sortByNameDesc);
    throw new Error("Invalid sort mode");
}

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

    if (sortMode !== SortOrder.Praesentiert) {
        setSortOrder(sortMode);
    }

    tagBtns.forEach((btn) => {
        if (!btn.dataset.tag) return;
        btn.addEventListener("click", setupTagBtn(btn.dataset.tag));
    });
});
