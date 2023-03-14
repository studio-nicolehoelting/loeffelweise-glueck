import TextWithImageItem from '../text-with-image-item';

export default function TextHunger() {
    return (
        <TextWithImageItem id="geschichten" imgs={['hunger.jpg']}>
            <h3>HUNGER ?!</h3>
            <a href="/rezepte">Hier geht's zu den Rezepten...</a>
        </TextWithImageItem>
    );
}
