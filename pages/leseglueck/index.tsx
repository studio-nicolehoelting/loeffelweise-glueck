import Head from 'next/head';
import Footer from '../../components/footer';
import TextHunger from '../../components/text-items/hunger';
import Header from '../../components/leseglueck/header';
import TextHelloSnow from '../../components/leseglueck/texte/hello-snow';
import TextNightKitchen from '../../components/leseglueck/texte/night-kitchen';
import TextSoulfood from '../../components/leseglueck/texte/soulfood';
import TextWeihnachtenAmsterdam from '../../components/leseglueck/texte/weihnachten-amsterdam';
import NavigationBar from '../../components/navigation-bar';
import ScrollTopBtn from '../../components/scroll-top-button';

export default function NicoleJettePage() {
    return (
        <>
            <Head>
                <title>Leseglück - Löffelweise Glück</title>
                <style>
                    {`#geschichtenContainer {
                    margin-top: 1cm;
                    display: flex;
                    flex-direction: column;
                    }`}
                </style>
            </Head>
            <NavigationBar active="/leseglueck" />
            <Header />

            <div id="geschichtenContainer">
                <TextNightKitchen />
                <TextSoulfood />
                <TextHelloSnow />
                <TextWeihnachtenAmsterdam />
                <TextHunger />
            </div>

            <ScrollTopBtn />
            <Footer />
        </>
    );
}
