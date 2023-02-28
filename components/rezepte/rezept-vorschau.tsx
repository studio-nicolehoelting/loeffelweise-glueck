import React from 'react';
import { Rezept } from '../../util/get-rezepte';
import style from '../../styles/rezepte/rezept-vorschau.module.scss';

export default function RezeptVorschau({ link, rezepte, index }) {
    const { name, tags } = JSON.parse(rezepte).find(
        (r: Rezept) => r.link === link
    );

    return (
        <div
            className={style.recipe + (index % 2 === 0 ? ' ' + style.even : '')}
        >
            <img src={`/rezepte/imgs/${link}.jpg`} alt={name} />
            <div className={style.text}>
                <h3>{name}</h3>
                <a href={link}>
                    Rezept zum <span>Löffelglück...</span>
                </a>
                <div className={style.tags}>
                    {tags.map((t: string) => (
                        <a
                            key={t}
                            href={`.?search=${encodeURIComponent(`#${t}`)}`}
                        >
                            #{t}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
