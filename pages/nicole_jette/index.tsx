import Head from 'next/head';
import Geschichte from '../../components/geschichten/geschichte';
import NavigationBar from '../../components/navigation-bar';
import Header from '../../components/nicole_jette/header';

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
                <Geschichte id="nicole_jette" imgs={['nicole.jpg']}>
                    <h3>JETTE ÜBER NICOLE:</h3>
                </Geschichte>
            </div>
        </>
    );
}
