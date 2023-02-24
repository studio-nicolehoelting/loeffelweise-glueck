import React from 'react';
import styles from '../../styles/index/header.module.scss';

export default function Header() {
    return (
        <div id="hobelbankHeaderContainer" className={styles.header}>
            <img
                src="/imgs/wilkommen/HobelbankHeader.jpg"
                alt=""
                className={styles.hobelbankHeader}
            />
            <span>rezepte. fotos. geschichten.</span>
        </div>
    );
}
