import ExportedImage from 'next-image-export-optimizer';
import React from 'react';
import styles from '../../styles/index/header.module.scss';

export default function Header() {
    return (
        <div id="hobelbankHeaderContainer" className={styles.header}>
            <ExportedImage
                src="/imgs/wilkommen/HobelbankHeader.jpg"
                alt="Hobelbank Header"
                className={styles.hobelbankHeader}
                fill
            />
            <span>rezepte. fotos. geschichten.</span>
        </div>
    );
}
