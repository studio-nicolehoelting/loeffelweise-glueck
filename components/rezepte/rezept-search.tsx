import { useRouter } from 'next/router';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import styles from '../../styles/rezepte/rezept-search.module.scss';
import { Rezept } from '../../util/get-rezepte';
import RezeptVorschau from './rezept-vorschau';

export default function RezeptSearch({ rezepte, witzig = false }) {
    const [sort, setSort] = useState(0);
    const [search, setSearch] = React.useState('');
    const [limit, setLimit] = useState(10);

    const router = useRouter();

    useEffect(() => {
        const params = router.query;
        if (params.search)
            setSearch(decodeURIComponent(params.search as string));
    }, [router.query]);

    const modes = [
        {
            content: 'aktuell',
            title: 'Chronologisch absteigend',
        },
        {
            content: 'historisch',
            title: 'Chronologisch aufsteigend',
        },
        {
            content: (
                <>
                    A <i className="fas fa-utensil-spoon right"></i> Z
                </>
            ),
            title: 'Von A bis Z',
        },
        {
            content: (
                <>
                    A <i className="fas fa-utensil-spoon left"></i> Z
                </>
            ),
            title: 'Von Z bis A',
        },
    ];

    function changeSort() {
        setSort((sort + 1) % 4);
        return;
    }

    function deleteClick() {
        setSearch('');
        router.push({ query: { search: encodeURIComponent('') } }, undefined, {
            shallow: true,
        });
    }

    function changeSearchEvent(ev: BaseSyntheticEvent) {
        setSearch(ev.target.value);
        router.push(
            { query: { search: encodeURIComponent(ev.target.value) } },
            undefined,
            {
                shallow: true,
            }
        );
    }

    const rezepteJSON = JSON.parse(rezepte);

    function filterRezepte(rezepte: Rezept[]) {
        return rezepte
            .filter(rezept => {
                let ret = true;
                const queries = search.split(' ');
                queries.forEach(query => {
                    let isTag = false;
                    if (/^#/.test(query)) {
                        query = query.replace(/^#/, '');
                        isTag = true;
                    }
                    const r = new RegExp(
                        query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
                        'i'
                    );
                    if (
                        !(
                            (r.test(rezept.name) && isTag == false) ||
                            (isTag == true &&
                                rezept.tags
                                    .map(eee => r.test(eee))
                                    .some(eee => eee == true))
                        )
                    )
                        ret = false;
                    // if(!((r.test(e.name) && isTag == false && isAuthor == false) || ((r.test(e.author) && isTag == false) && ((e.author != "unnamedDE" || isAuthor) || search.toLowerCase() == "unnamedde")) || (e.keywords.map(eee => r.test(eee)).some(eee => eee == true) && isAuthor == false))) ret = false;
                });
                return ret;
            })
            .filter(rezept => rezept.witzig || !witzig);
        //   .filter(e => e.witzig == true || eeWitzig == false);;
    }

    const umlautMap = {
        '\u00dc': 'Ue',
        '\u00c4': 'Ae',
        '\u00d6': 'Oe',
        '\u00fc': 'ue',
        '\u00e4': 'ae',
        '\u00f6': 'oe',
        '\u00df': 'ss',
    };
    function replaceUmlaute(str) {
        return str
            .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, a => {
                const big = umlautMap[a.slice(0, 1)];
                return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
            })
            .replace(
                new RegExp('[' + Object.keys(umlautMap).join('|') + ']', 'g'),
                a => umlautMap[a]
            );
    }

    function sortData(data, mode) {
        if (mode == 0) return Array.from(data).reverse();
        if (mode == 1) return data;
        if (mode == 2 || mode == 3) {
            const sorted = Array.from(data).sort(
                (a: { name: string }, b: { name: string }) => {
                    const nameA = replaceUmlaute(a.name).toUpperCase();
                    const nameB = replaceUmlaute(b.name).toUpperCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                }
            );
            if (mode == 2) return sorted;
            if (mode == 3) return sorted.reverse();
        }
        return data;
    }

    function limitData(data, limit) {
        return [data.slice(0, limit), limit <= data.length];
    }

    const [rezepteAusgabe, limited] = limitData(
        sortData(filterRezepte(rezepteJSON), sort),
        limit
    );

    function loadMore() {
        setLimit(limit + 10);
    }

    return (
        <>
            <div id="searchContainer" className={styles.searchContainer}>
                <style>
                    {`.fas.left {
                    transform: rotate(-135deg);
                }
                .fas.right {
                    transform: rotate(45deg);
                }`}
                </style>
                <label htmlFor="search">Suchbegriff eingeben</label>
                <span>
                    <button
                        type="button"
                        id="sortOrder"
                        title={modes[sort].title}
                        onClick={changeSort}
                        className={styles.sortOrder}
                    >
                        {modes[sort].content}
                    </button>
                    <input
                        type="text"
                        id="search"
                        className="deletable"
                        placeholder="#Sommer"
                        value={search}
                        autoFocus
                        onInput={changeSearchEvent}
                    />
                    <button
                        type="button"
                        id="delete-search"
                        className={styles['delete-search']}
                        title="Suche löschen"
                        onClick={deleteClick}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </span>
            </div>
            {rezepteAusgabe.map((r: Rezept, i) => (
                <RezeptVorschau
                    link={r.link}
                    rezepte={rezepte}
                    index={i}
                    key={r.link}
                    witzig={witzig}
                />
            ))}
            {limited ? (
                <button className={styles.loadMore} onClick={loadMore}>
                    Mehr Rezepte Laden...
                </button>
            ) : (
                ''
            )}
        </>
    );
}
