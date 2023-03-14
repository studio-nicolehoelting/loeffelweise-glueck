import TextWithImageItem from '../../text-with-image-item';

export default function GeschichteSchweinchen() {
    return (
        <TextWithImageItem id="geschichten" imgs={['schweinchen.jpg']}>
            <h3 style={{ display: 'inline', fontFamily: 'sans-serif' }}>#</h3>
            <h3 style={{ display: 'inline' }}>WirBleibenZuhause</h3>
            <br />
            <div style={{ marginTop: '1cm', fontSize: '1.5rem' }}>
                Gemeinsam kriegen wir alles gebacken... <br />
                Wir wünschen allen Löffelfreunden ein gesundes & glückliches
                Jahr 2021.
            </div>
        </TextWithImageItem>
    );
}
