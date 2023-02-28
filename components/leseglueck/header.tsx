import { useState } from 'react';
import styles from '../../styles/leseglueck/header.module.scss';

export default function Header() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        setHidden(!hidden);
    }

    const mainPart = (
        <div className={styles.header}>
            <span>Jedes Kochbuch ist ein Schatz!</span>
            <span className={styles.mehrLesen} onClick={toggleHidden}>
                mehr lesen <br /> <i className="fas fa-utensil-spoon"></i>
            </span>
        </div>
    );
    const hiddenPart = (
        <div id="textExpand" className={'closed ' + styles.textExpand}>
            Mal sind es ERINNERUNGEN an die liebe Oma, mal an einen Duft, einen
            besonderen Abend, einen tollen Urlaub, ... <br />
            Erinnerungen, die uns beim DURCHSTÖBERN ein Lächeln ins Gesicht
            zaubern. <br />
            Mal ist es der Latte Macchiato am Nachmittag, der einem fünf Minuten
            Ruhepause schenkt - <br />
            noch besser schmeckt er beim Blättern in atemberaubend schön
            fotografierten Foodbooks. GLÜCKSMOMENTE.
            <br />
            <br />
            Wir möchten euch gern von unseren Lieblingsbüchern in der Küche
            erzählen - keine professionellen Rezensionen, sondern Berichte über
            unsere Empfindungen:
            <br />
            Was uns an dem Buch besonders GEFÄLLT, was es für uns ausmacht,
            welches Rezept wir zubereitet und probiert haben.
            <br />
            Über Geschmack lässt sich ja bekanntlich nicht streiten. Welch ein
            GLÜCK...
        </div>
    );

    return hidden ? (
        mainPart
    ) : (
        <>
            {mainPart}
            {hiddenPart}
        </>
    );
}
