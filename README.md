# Loeffelweise Glück Blog (Astro version)

## Vorraussetzungen

-   [Git](https://git-scm.com)
-   [NodeJS](https://nodejs.org/en/)
-   _[VS Code](https://code.visualstudio.com)_ (optional)
-   _[GitHub Desktop](https://desktop.github.com)_ (optional)

## Setup

```bash
git clone git@github.com:studio-nicolehoelting/loeffelweise-glueck.git
cd loeffelweise-glueck
```

## Bearbeitung

```bash
git pull
pnpm install
pnpm run dev
```

Dann bearbeiten.

```bash
git add *
git commit -M "Beschreibung"
git push
```

## Hinweise

-   Rezepte/Geschichten/etc können in den Unterordnern von `/src/content/` gefunden werden und dort hinzugefügt/bearbeitet/entfernt werden.
-   Bilder befinden sich im Ordner `/src/images/` und sind nach Kategorien in Unterordner eingeteilt.

## Schemata (Beispielhaft)

### Rezept

```yml
bild: ./link/zu/dem/bild # relativ von dem Rezepte-Ordner aus, ohne Anführungszeichen
datum: 2023-10-06 # ohne Anführungszeichen
name: "Mein Rezept" # mit Anführungszeichen
tags: # Liste mit "- " am Anfang
    - "lecker"
    - "lieblingsessen"
# alternativ tags: [] wenn keine Tags gesetzt werden sollen
zutaten:
    - "100g Mehl"
    - "4 Eier"
kommentar: |- # Mit "|-" beginnend wählt den gesamten folgenden Text aus.
    Ganz langer Text.
    Kann auch neue Zeilen enthalten
praesentiert: 1 # optional, wenn gesetzt ist, wird das Rezept vor anderen (ohne diesen Wert) gezeigt. Bei mehreren Rezepten mit praesentiert-Wert wird von oben aufsteigend sortiert (kleinster Wert ganz oben)
```

Darunter dann die Zubereitung schreiben (Kann mit [Markdown](https://www.heise.de/mac-and-i/downloads/65/1/1/6/7/1/0/3/Markdown-CheatSheet-Deutsch.pdf) formattiert werden).

### Geschichte/Nicole&Jette/Löffelfreunde/Leseglück

```yml
order: 1 # größte Zahl oben (genau anders als bei Rezepten). Einfach bei neuen Einträgen hochzählen
images: # genau wie bei Rezepten, nur mehrere Bilder möglich
    - ./link/zu/bild/1
    - ./link/zu/bild/2
```

Darunter dann die Geschichte schreiben (Kann ebenfalls mit Markdown formattiert werden). Überschriften sollten mit `# ` beginnen.
