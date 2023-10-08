export interface RezeptFromCollection {
    id: string;
    slug: string;
    body: string;
    collection: "rezepte";
    data: {
        name: string;
        bild: ImageMetadata;
        praesentiert?: number;
        datum: Date;
        zutaten: string[];
        tags: string[];
        kommentar?: string;
    };
}
export interface Rezept {
    name: string;
    slug: string;
    img: string;
    tags: string[];
    date: Date;
    praesentiert: number | undefined;
}

export const sortByPraesentiert = (
    a: RezeptFromCollection,
    b: RezeptFromCollection
) => {
    if (a.data.praesentiert) {
        if (!b.data.praesentiert) return -1;
        else {
            if (a.data.praesentiert == b.data.praesentiert)
                return -compareDate(a.data.datum, b.data.datum);
            else return a.data.praesentiert - b.data.praesentiert;
        }
    } else if (b.data.praesentiert) return 1;
    else return -compareDate(a.data.datum, b.data.datum);
};

export const compareDate = (a: Date, b: Date) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

export const sortByDateAsc = (
    a: { item: Rezept; score?: number },
    b: { item: Rezept; score?: number }
) => {
    if (!a.score || !b.score || a.score == b.score) {
        return compareDate(a.item.date, b.item.date);
    }
    return a.score - b.score;
};
export const sortByDateDesc = (
    a: { item: Rezept; score?: number },
    b: { item: Rezept; score?: number }
) => {
    if (!a.score || !b.score || a.score == b.score) {
        return -compareDate(a.item.date, b.item.date);
    }
    return a.score - b.score;
};

export const sortByNameAsc = (
    a: { item: Rezept; score?: number },
    b: { item: Rezept; score?: number }
) => {
    if (!a.score || !b.score || a.score == b.score) {
        return replaceUmlaute(a.item.name) < replaceUmlaute(b.item.name)
            ? -1
            : 1;
    }
    return a.score - b.score;
};

export const sortByNameDesc = (
    a: { item: Rezept; score?: number },
    b: { item: Rezept; score?: number }
) => {
    if (!a.score || !b.score || a.score == b.score) {
        return replaceUmlaute(a.item.name) < replaceUmlaute(b.item.name)
            ? 1
            : -1;
    }
    return a.score - b.score;
};

const umlautMap: { [key: string]: string } = {
    "\u00dc": "Ue",
    "\u00c4": "Ae",
    "\u00d6": "Oe",
    "\u00fc": "ue",
    "\u00e4": "ae",
    "\u00f6": "oe",
    "\u00df": "ss",
};
function replaceUmlaute(str: string) {
    return str
        .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
            const big = umlautMap[a.slice(0, 1)];
            return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
        })
        .replace(
            new RegExp("[" + Object.keys(umlautMap).join("|") + "]", "g"),
            (a) => umlautMap[a]
        );
}
