import Head from 'next/head';
import Footer from '../../components/footer';
import Header from '../../components/geschichten/header';
import GeschichteGlueckAuf from '../../components/geschichten/texte/glueck-auf';
import GeschichteGruenkohl from '../../components/geschichten/texte/gruenkohl';
import GeschichteHai from '../../components/geschichten/texte/hai';
import GeschichteHobelbank from '../../components/geschichten/texte/hobelbank';
import TextHunger from '../../components/text-items/hunger';
import GeschichteKrimidinner from '../../components/geschichten/texte/krimidinner';
import GeschichteLavendel from '../../components/geschichten/texte/lavendel';
import GeschichteMaus from '../../components/geschichten/texte/maus';
import GeschichteMichel from '../../components/geschichten/texte/michel';
import GeschichteOuttakes from '../../components/geschichten/texte/outtakes';
import GeschichteRhabarbara from '../../components/geschichten/texte/rhabarbara';
import GeschichteSchweinchen from '../../components/geschichten/texte/schweinchen';
import GeschichteWaldpicknick from '../../components/geschichten/texte/waldpicknick';
import GeschichteWeihnachten from '../../components/geschichten/texte/weihnachten';
import GeschichteZettelZ from '../../components/geschichten/texte/zettel-z';
import NavigationBar from '../../components/navigation-bar';
import ScrollTopBtn from '../../components/scroll-top-button';

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
                <GeschichteOuttakes />
                <GeschichteLavendel />
                <GeschichteWaldpicknick />
                <GeschichteGruenkohl />
                <GeschichteZettelZ />
                <GeschichteMaus />
                <GeschichteSchweinchen />
                <GeschichteKrimidinner />
                <GeschichteHai />
                <TextHunger />
            </div>

            <ScrollTopBtn />
            <Footer />
        </>
    );
}
