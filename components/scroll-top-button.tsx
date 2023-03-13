import styles from '../styles/scroll-top-button.module.scss';

export default function ScrollTopBtn({
    contextFn = ev => {},
    doubleFn = ev => {},
}) {
    return (
        <div
            title="Zum Anfang springen"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            onContextMenu={contextFn}
            onDoubleClick={doubleFn}
            className={styles.scrollTopBtn}
        >
            <i className="fas fa-utensil-spoon"></i>
        </div>
    );
}
