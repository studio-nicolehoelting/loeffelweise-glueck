import ExportedImage from 'next-image-export-optimizer';
import styles from '../../styles/rezepte/rezept-display.module.scss';

export default function RezeptDisplay({
    name,
    link,
    tags,
    zutaten,
    zubereitung,
    kommentar,
}) {
    return (
        <div className={styles.container}>
            <ExportedImage
                src={`/imgs/rezepte/rezept/${link}.jpg`}
                alt={name}
                fill
            />
            <div className={styles.zutaten}>
                <h4>{zutaten[0]}</h4>
                <ul>
                    {zutaten.slice(1).map((z, i) => {
                        if (/^!/.test(z))
                            return (
                                <span key={i} className={styles.sectionHeader}>
                                    {z.replace(/^!/, '')}
                                </span>
                            );
                        else if (z === '') return <span key={i}></span>;
                        else
                            return (
                                <li key={i} className={styles.zutat}>
                                    {z}
                                </li>
                            );
                    })}
                </ul>
            </div>
            <div className={styles.zubereitung}>{zubereitung}</div>
            <div className={styles.kommentar}>{kommentar}</div>
            <div className={styles.tags}>
                {tags.map((t, i) => (
                    <span key={i}>
                        {i === 0 ? '' : ', '}
                        <a href={`..?search=${encodeURIComponent('#' + t)}`}>
                            #{t}
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
}
