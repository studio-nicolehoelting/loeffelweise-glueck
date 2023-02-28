import React, { useState } from 'react';
import styles from '../../styles/rezepte/header.module.scss';

export default function Header() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        setHidden(!hidden);
    }

    const mainPart = (
        <div className={styles.header}>
            <span>Schokobraun, tomatenrot, spinatgrün oder eigelb....</span>
            <span className={styles.mehrLesen} onClick={toggleHidden}>
                mehr lesen <br /> <i className="fas fa-utensil-spoon"></i>
            </span>
        </div>
    );
    const hiddenPart = (
        <div id="textExpand" className={'closed ' + styles.textExpand}>
            In unserer Küche geht es immer bunt zu! <br />
            Dabei sind wir überhaupt nicht darauf festgelegt, dass Spinat nur
            gekocht und mit Schokolade nur gebacken wird. <br />
            Tomaten kann man auch als Marmelade auf ein Käsebrot streichen...{' '}
            <br />
            Es herrscht (fast) immer gute Laune, wenn wir Kochlöffel oder
            Teigschaber schwingen. <br />
            Meist läuft Musik, wenn sich die Schneebesen im Takt bewegen. <br />
            Tretet ein in Jettes kleines Backstübchen und in Nicoles
            kulinarisches Atelier. <br />
            Gern lassen wir euch an unseren Rezepten teilhaben und freuen uns,
            wenn ihr sie selbst ausprobiert. <br />
            Viel Spaß dabei und lasst es euch schmecken! Genießt euer eigenes
            LÖFFELWEISE GLÜCK...
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
