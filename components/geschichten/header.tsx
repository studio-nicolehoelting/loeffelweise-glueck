import { useState } from 'react';
import styles from '../../styles/geschichten/header.module.scss';

export default function Header() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        setHidden(!hidden);
    }

    const mainPart = (
        <div className={styles.header}>
            <span>Kitchen-Stories, Reiseberichte, dies&amp;das...</span>
            <span className={styles.mehrLesen} onClick={toggleHidden}>
                mehr lesen <br /> <i className="fas fa-utensil-spoon"></i>
            </span>
        </div>
    );
    const hiddenPart = (
        <div id="textExpand" className={'closed ' + styles.textExpand}>
            In langen Wintermonaten, GEMÜTLICH am Lagerfeuer oder im Bett zur
            guten Nacht - immer erzählen sich Menschen Geschichten.
            <br />
            Geschichten bringen zum Lachen, regen zum Nachdenken an, BERÜHREN,
            beruhigen, trösten, informieren, inspirieren, UNTERHALTEN.
            <br />
            Ohne Anspruch auf literarische Qualitäten möchten wir euch gern von
            uns erzählen, von unseren Erlebnissen & Ideen.
            <br />
            Vielleicht gelingt es uns, euch ein wenig auf unsere REISEN
            mitzunehmen, Abenteuer voller GLÜCK...
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
