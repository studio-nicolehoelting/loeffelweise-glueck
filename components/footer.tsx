import React from 'react';
import styles from '../styles/footer.module.scss';

export default function Footer() {
    return (
        <div id="footer" className={styles.footer}>
            <a
                id="facebook"
                className={styles.facebook}
                href="https://www.facebook.com/L%C3%B6ffelweise-Gl%C3%BCck-101153131954283"
                target="_blank"
                title="Hier geht's zu unserer Facebook Seite"
            >
                <i className="fab fa-facebook"></i>
            </a>
            <a
                id="instagram"
                className={styles.instagram}
                href="https://www.instagram.com/loeffelweise.glueck/"
                target="_blank"
                title="Hier geht's zu unserer Instagram Seite"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a
                id="datenschutz-impressum"
                className={styles['datenschutz-impressum']}
                href="/datenschutz-impressum"
                target="_blank"
            >
                datenschutz. impressum.
            </a>
        </div>
    );
}
