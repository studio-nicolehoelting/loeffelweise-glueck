import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../components/footer';
import NavigationBar from '../../components/navigation-bar';
import Header from '../../components/rezepte/header';
import RezeptSearch from '../../components/rezepte/rezept-search';
import ScrollTopBtn from '../../components/scroll-top-button';
import { getRezepte } from '../../util/get-rezepte';

export default function RezeptePage({ rezepte }) {
    const [witzig, setWitzig] = useState(false);

    function toggleWitzig(ev: Event) {
        ev.preventDefault();
        setWitzig(!witzig);
    }

    return (
        <>
            <Head>
                <title>Rezepte - Löffelweise Glück</title>
            </Head>
            <NavigationBar active="/rezepte" />
            <Header />
            <RezeptSearch rezepte={rezepte} witzig={witzig} />
            <ScrollTopBtn contextFn={toggleWitzig} doubleFn={toggleWitzig} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    return { props: { rezepte: JSON.stringify(await getRezepte()) } };
}
