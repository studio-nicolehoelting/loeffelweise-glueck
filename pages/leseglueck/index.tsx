import Head from 'next/head';
import Geschichte from '../../components/geschichten/geschichte';
import Header from '../../components/leseglueck/header';
import NavigationBar from '../../components/navigation-bar';

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
                <Geschichte id="leseglueck" imgs={['night_kitchen.jpg']}>
                    <h3>Blaue Stunde. Sternenhimmel. Morgenröte.</h3>
                </Geschichte>
            </div>
        </>
    );
}
