import Head from 'next/head';
import Footer from '../../components/footer';
import TextHunger from '../../components/text-items/hunger';
import Header from '../../components/loeffelfreunde/header';
import TextBowls from '../../components/loeffelfreunde/texte/bowls';
import TextEvergreens from '../../components/loeffelfreunde/texte/evergreens';
import TextOutdoorkueche from '../../components/loeffelfreunde/texte/outdoorkueche';
import TextPodcast from '../../components/loeffelfreunde/texte/podcast';
import TextRotkohlEier from '../../components/loeffelfreunde/texte/rotkohl-eier';
import TextSpoonies from '../../components/loeffelfreunde/texte/spoonies';
import TextWeisseWeihnacht from '../../components/loeffelfreunde/texte/weisse-weihnacht';
import NavigationBar from '../../components/navigation-bar';
import ScrollTopBtn from '../../components/scroll-top-button';

export default function LoeffelfreundePage() {
    return (
        <>
            <Head>
                <title>Löffelfreu(n)de - Löffelweise Glück</title>
                <style>
                    {`#geschichtenContainer {
            margin-top: 1cm;
            display: flex;
            flex-direction: column;
            }`}
                </style>
            </Head>
            <NavigationBar active="/loeffelfreunde" />
            <Header />

            <div id="geschichtenContainer">
                <TextWeisseWeihnacht />
                <TextEvergreens />
                <TextOutdoorkueche />
                <TextSpoonies />
                <TextRotkohlEier />
                <TextBowls />
                <TextPodcast />

                <TextHunger />
            </div>

            <ScrollTopBtn />
            <Footer />
        </>
    );
}
