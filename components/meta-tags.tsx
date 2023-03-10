import Head from 'next/head';

export default function MetaTags({ meta }: { meta: MetaData }) {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{meta.title}</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={meta.url} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.img} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={meta.url} />
            <meta property="twitter:title" content={meta.title} />
            <meta property="twitter:description" content={meta.description} />
            <meta property="twitter:image" content={meta.img} />
        </Head>
    );
}

export interface MetaData {
    title: string;
    description: string;
    url: string;
    img: string;
}
