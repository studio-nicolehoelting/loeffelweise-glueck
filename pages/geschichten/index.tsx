import Head from 'next/head';
import Footer from '../../components/footer';
import Header from '../../components/geschichten/header';
import GeschichteGlueckAuf from '../../components/geschichten/texte/glueck-auf';
import GeschichteHobelbank from '../../components/geschichten/texte/hobelbank';
import GeschichteMichel from '../../components/geschichten/texte/michel';
import GeschichteRhabarbara from '../../components/geschichten/texte/rhabarbara';
import GeschichteWeihnachten from '../../components/geschichten/texte/weihnachten';
import NavigationBar from '../../components/navigation-bar';

export default function GeschichtenPage() {
    return (
        <>
            <Head>
                <title>Geschichten - Löffelweise Glück</title>
                <style>
                    {`#geschichtenContainer {
                    margin-top: 1cm;
                    display: flex;
                    flex-direction: column;
                    }`}
                </style>
            </Head>
            <NavigationBar active="/geschichten" />
            <Header />

            <div id="geschichtenContainer">
                <GeschichteWeihnachten />
                <GeschichteHobelbank />
                <GeschichteMichel />
                <GeschichteRhabarbara />
                <GeschichteGlueckAuf />
            </div>

            <Footer />
        </>
    );
}
