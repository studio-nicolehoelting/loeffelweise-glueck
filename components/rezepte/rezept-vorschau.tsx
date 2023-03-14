import React from 'react';
import { Rezept } from '../../util/get-rezepte';
import styles from '../../styles/rezepte/rezept-vorschau.module.scss';
import ExportedImage from 'next-image-export-optimizer';

export default function RezeptVorschau({
    link,
    rezepte,
    index,
    witzig = false,
}) {
    const { name, tags } = JSON.parse(rezepte).find(
        (r: Rezept) => r.link === link
    );

    return (
        <div
            className={
                styles.recipe +
                (index % 2 === 0 ? ' ' + styles.even : '') +
                (witzig ? ' ' + styles.witzig : '')
            }
        >
            <ExportedImage
                src={`/imgs/rezepte/rezept/${link}.jpg`}
                alt={name}
                fill
            />
            <div className={styles.text}>
                <h3>{name}</h3>
                <div>
                    <a href={link} className={styles['zum-rezept']}>
                        Rezept zum <span>Löffelglück...</span>
                    </a>
                    <div className={styles.tags}>
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
        </div>
    );
}
