import TextWithImageItem from '../../text-with-image-item';

export default function GeschichteHai() {
    return (
        <TextWithImageItem id="geschichten" imgs={['hai.jpg']}>
            <h3>DENKSTE?!</h3>
            <br />
            LÖFFEL sind gefährlicher als HAIE. <br />
            Laut Statistik sterben jährlich durchschnittlich SECHS Menschen
            durch einen Haiangriff - an einem Löffel ersticken ZEHN.
        </TextWithImageItem>
    );
}
