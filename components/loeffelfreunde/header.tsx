import { useState } from 'react';

import styles from '../../styles/loeffelfreunde/header.module.scss';

export default function Header() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        setHidden(!hidden);
    }

    const mainPart = (
        <div className={styles.header}>
            <span>Freunde und Freude - sooooo wichtig!</span>
            <span className={styles.mehrLesen} onClick={toggleHidden}>
                mehr lesen <br /> <i className="fas fa-utensil-spoon"></i>
            </span>
        </div>
    );
    const hiddenPart = (
        <div id="textExpand" className={'closed ' + styles.textExpand}>
            Freude mit Freunden, FREUDE am Löffeln, FREUNDE, mit denen wir
            gemeinsam Löffeln - hoffentlich nicht die Suppe aus...
            <br />
            Gern lassen wir euch an unseren Freuden und Freundschaften
            teilhaben. Vielleicht sind sie Inspiration <br />
            für ein fröhliches Miteinander, ein kleines Event, vielleicht für
            eine DIY-Geschenkidee, neue Gewürze, Küchenutensilien...
            <br />
            Wir hoffen und wünschen, euch mit unseren Ideen eine kleine Freude
            zu bereiten, LÖFFELFREUDE...
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
