import Head from 'next/head';
import React from 'react';
import Footer from '../../components/footer';
import NavigationBar from '../../components/navigation-bar';
import Header from '../../components/rezepte/header';
import RezeptSearch from '../../components/rezepte/rezept-search';
import { getRezepte } from '../../util/get-rezepte';

export default function RezeptePage({ rezepte }) {
    return (
        <>
            <Head>
                <title>Rezepte - Löffelweise Glück</title>
            </Head>
            <NavigationBar active="/rezepte" />
            <Header />
            <RezeptSearch rezepte={rezepte} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    return { props: { rezepte: JSON.stringify(await getRezepte()) } };
}
