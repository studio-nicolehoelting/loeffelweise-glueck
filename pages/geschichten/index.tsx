import Head from 'next/head';
import Footer from '../../components/footer';
import Geschichte from '../../components/geschichten/geschichte';
import Header from '../../components/geschichten/header';
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
                <Geschichte
                    id="weihnachten"
                    imgs={['mini.jpg', '1.jpg', '2.jpg']}
                    title="Geschichte"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe deserunt fugit, suscipit beatae, fugiat repellendus
                    recusandae tempora maxime dolore explicabo voluptatibus
                    itaque autem et? Et atque quisquam reiciendis laboriosam
                    doloremque? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Sit enim eveniet quam corrupti iste atque
                    facere possimus, quaerat, cumque id nesciunt est, temporibus
                    suscipit? Illum iste reiciendis veniam aspernatur, vel
                    exercitationem quisquam sapiente magnam quasi possimus
                    officiis ad dolore, ducimus beatae similique tenetur
                    corrupti ipsum nulla quibusdam laborum ullam velit culpa
                    necessitatibus mollitia. Vel assumenda similique culpa,
                    consequatur optio sapiente dolore autem. Provident deleniti,
                    numquam excepturi, ipsa facilis, quod cum iste magnam vitae
                    maiores totam! Adipisci, reiciendis debitis earum eaque
                    consequuntur repellat, ratione ut, voluptates sunt dolorem
                    ipsum similique culpa. Odit consectetur cum aliquam veniam
                    facilis deserunt vel exercitationem porro! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Error, ipsa
                    dolor. Voluptas pariatur est quis architecto facilis harum.
                    Obcaecati, quibusdam illo consequatur magnam at blanditiis
                    nam eos delectus ab magni velit voluptas nobis quod
                    asperiores debitis error ut sit nemo assumenda doloremque.
                    Possimus, voluptas temporibus delectus quis magnam deleniti
                    eveniet!
                </Geschichte>
            </div>

            <Footer />
        </>
    );
}
