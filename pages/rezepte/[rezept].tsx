import React, { useState } from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getRezepte } from '../../util/get-rezepte';
import RezeptDisplay from '../../components/rezepte/rezept-display';
import RezeptPrint from '../../components/rezepte/rezept-print';
import { promises as fs } from 'fs';
import { join as joinPath } from 'path';
import Head from 'next/head';

import stylesNavbar from '../../styles/navbar.module.scss';
import styles from '../../styles/rezepte/rezept-display.module.scss';

export default function Rezept({
    name,
    link,
    tags,
    zutaten,
    zubereitung,
    kommentar,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [print, setPrint] = useState(false);

    let zutatenSplit = zutaten.split('\r\n');
    if (zutatenSplit.length == 1 && zutatenSplit[0].length >= 15)
        zutatenSplit = zutaten.split('\n');

    function printRezept() {
        setPrint(true);
        setTimeout(window.print, 10);

        setTimeout(() => setPrint(false), 20);
    }

    const printComp = (
        <RezeptPrint
            link={link}
            name={name}
            tags={tags}
            zubereitung={zubereitung}
            zutaten={zutatenSplit}
            kommentar={kommentar}
        />
    );

    const displayComp = (
        <div>
            {/* <NavigationBar active="" /> */}
            {/* <h1 style={{ color: '#fff' }}>{name}</h1> */}
            <div className={stylesNavbar.navbar}>
                <a href=".." id="back" className={stylesNavbar.inactive}>
                    Zurück zu den Rezepten
                </a>
                <h3 className={stylesNavbar.inactive}>{name}</h3>
            </div>
            <RezeptDisplay
                link={link}
                name={name}
                tags={tags}
                zubereitung={zubereitung}
                zutaten={zutatenSplit}
                kommentar={kommentar}
            />
        </div>
    );

    return (
        <>
            <Head>
                <title>{`${name} - Löffelweise Glück`}</title>
            </Head>
            {print ? (
                <div className={styles.print}>{printComp}</div>
            ) : (
                <>
                    <div className={styles.page}>{displayComp}</div>
                    <button
                        onClick={printRezept}
                        className={styles.printBtn}
                        title="Rezept ausdrucken"
                    >
                        <i className="fas fa-print" />
                    </button>
                </>
            )}
        </>
    );
}

export async function getStaticProps({ params: { rezept } }) {
    const rezeptData = (await getRezepte()).find(e => e.link === rezept);
    const zubereitung = await fs.readFile(
        joinPath(process.cwd(), `asset/rezepte/${rezept}/zubereitung.txt`),
        'utf8'
    );
    const zutaten = await fs.readFile(
        joinPath(process.cwd(), `asset/rezepte/${rezept}/zutaten.txt`),
        'utf8'
    );
    const kommentar = await fs.readFile(
        joinPath(process.cwd(), `asset/rezepte/${rezept}/kommentar.txt`),
        'utf8'
    );

    return { props: { ...rezeptData!, zubereitung, kommentar, zutaten } };
}

export async function getStaticPaths() {
    const posts = await getRezepte();

    const paths = posts.map(c => {
        return { params: { rezept: c.link } }; // Route is something like "this-is-my-post"
    });

    return {
        paths,
        fallback: false,
    };
}
