import { useState } from 'react';
import styles from '../../styles/geschichten/geschichte.module.scss';
import { Scrollbar } from 'react-scrollbars-custom';

export default function Geschichte({ children, id, imgs }) {
    const [shownImg, setShownImg] = useState(0);

    return (
        <div className={styles.geschichte}>
            {imgs.length <= 1 ? (
                <img alt={id} src={`/imgs/geschichten/${id}/${imgs[0]}`} />
            ) : (
                <div className={styles.img}>
                    {imgs
                        .map((img, i) => (
                            <img
                                key={i}
                                alt={img}
                                src={`/imgs/geschichten/${id}/${img}`}
                            />
                        ))
                        .find((img, i) => i === shownImg)}
                    <span
                        className={styles.next}
                        onClick={() =>
                            setShownImg((shownImg + 1) % imgs.length)
                        }
                    >
                        <i className="fas fa-utensil-spoon"></i>
                    </span>
                    <span
                        className={styles.back}
                        onClick={() =>
                            setShownImg(
                                (shownImg + (imgs.length - 1)) % imgs.length
                            )
                        }
                    >
                        <i className="fas fa-utensil-spoon"></i>
                    </span>
                </div>
            )}
            <div className={styles.text}>
                <Scrollbar>
                    <div className={styles.content}>{children}</div>
                </Scrollbar>
            </div>
        </div>
    );
}
