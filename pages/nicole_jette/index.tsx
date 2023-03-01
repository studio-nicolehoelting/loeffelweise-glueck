import Head from 'next/head';
import Footer from '../../components/footer';
import GeschichteHunger from '../../components/geschichten/texte/hunger';
import NavigationBar from '../../components/navigation-bar';
import Header from '../../components/nicole_jette/header';
import TextAntrieb from '../../components/nicole_jette/texte/antrieb';
import TextBasics from '../../components/nicole_jette/texte/basics';
import TextHomemade from '../../components/nicole_jette/texte/homemade';
import TextJette from '../../components/nicole_jette/texte/jette';
import TextLoeffelGlueck from '../../components/nicole_jette/texte/loeffel-glueck';
import TextNicole from '../../components/nicole_jette/texte/nicole';
import TextOpasGarten from '../../components/nicole_jette/texte/opas-garten';
import ScrollTopBtn from '../../components/scroll-top-button';

export default function NicoleJettePage() {
    return (
        <>
            <Head>
                <title>Über uns - Löffelweise Glück</title>
                <style>
                    {`#geschichtenContainer {
                    margin-top: 1cm;
                    display: flex;
                    flex-direction: column;
                    }`}
                </style>
            </Head>
            <NavigationBar active="/nicole_jette" />
            <Header />

            <div id="geschichtenContainer">
                <TextNicole />
                <TextJette />
                <TextLoeffelGlueck />
                <TextBasics />
                <TextOpasGarten />
                <TextAntrieb />
                <TextHomemade />
                <GeschichteHunger />
            </div>

            <ScrollTopBtn />
            <Footer />
        </>
    );
}
