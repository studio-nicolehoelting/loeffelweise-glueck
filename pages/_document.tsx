import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/svg" href="/favicon.svg" />
                <link rel="stylesheet" href="/styles/fontawesome.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
