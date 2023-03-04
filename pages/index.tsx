import React from 'react';
import NavigationBar from '../components/navigation-bar';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/index/header';
import styles from '../styles/index.module.scss';

export default function StartPage() {
    return (
        <>
            <Head>
                <title>Löffelweise Glück</title>
            </Head>
            <img
                src="/imgs/logo-pappe.svg"
                alt="logo"
                id="logo"
                className={styles.logo}
            />
            <NavigationBar active="/" />
            <Header />
            <Footer />
        </>
    );
}
