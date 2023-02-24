import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default function NavigationBar({ active }) {
    const menu = [
        ['/', 'willkommen.'],
        ['/rezepte', 'rezepte.'],
        ['/geschichten', 'geschichten.'],
        ['/nicole_jette', 'nicole & jette.'],
        ['/loeffelfreunde', 'loeffelfreu(n)de'],
        ['/leseglueck', 'leseglück.'],
    ];
    return (
        <div id="navbar" className={styles.navbar}>
            {menu.map(el => {
                if (el[0] === active)
                    return (
                        <p className={styles.active} key={el[1]}>
                            {el[1]}
                        </p>
                    );
                else
                    return (
                        <Link
                            href={el[0]}
                            scroll
                            className={styles.inactive}
                            key={el[1]}
                        >
                            {el[1]}
                        </Link>
                    );
            })}
        </div>
    );
}
