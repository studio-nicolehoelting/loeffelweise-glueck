import { promises as fs } from 'fs';
import { join as joinPath } from 'path';

export async function getRezepte() {
    return JSON.parse(
        await fs.readFile(
            joinPath(process.cwd(), 'asset/rezepte/recipes.json'),
            'utf8'
        )
    ) as Rezept[];
}

export interface Rezept {
    name: string;
    link: string;
    tags: string[];
}
