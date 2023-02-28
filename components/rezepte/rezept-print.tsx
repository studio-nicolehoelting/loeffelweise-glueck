import styles from '../../styles/rezepte/rezept-display.module.scss';

export default function RezeptPrint({
    name,
    link,
    tags,
    zutaten,
    zubereitung,
    kommentar,
}) {
    return (
        <div className={styles.dina4}>
            <h3>{name}</h3>
            <div className={styles.container}>
                <img src={`/rezepte/imgs/${link}.jpg`} alt={name} />
                <div className={styles.zutaten}>
                    <h4>{zutaten[0]}</h4>
                    <ul>
                        {zutaten.slice(1).map((z, i) => {
                            if (/^!/.test(z))
                                return (
                                    <span
                                        key={i}
                                        className={styles.sectionHeader}
                                    >
                                        {z.replace(/^!/, '')}
                                    </span>
                                );
                            else if (z === '') return <span key={i}></span>;
                            else
                                return (
                                    <li className={styles.zutat} key={i}>
                                        {z}
                                    </li>
                                );
                        })}
                    </ul>
                </div>
                <div className={styles.zubereitung}>{zubereitung}</div>
                <div className={styles.kommentar}>{kommentar}</div>
            </div>
        </div>
    );
}
