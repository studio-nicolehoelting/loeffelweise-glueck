import Geschichte from '../geschichte';

export default function GeschichteHunger() {
    return (
        <Geschichte id="geschichten" imgs={['hunger.jpg']}>
            <h3>HUNGER ?!</h3>
            <a href="/rezepte">Hier geht's zu den Rezepten...</a>
        </Geschichte>
    );
}
