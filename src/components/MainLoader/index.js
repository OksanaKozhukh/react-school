import styles from "./styles.module.scss";

const MainLoader = () => (
  <div className={styles.loading}>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
);

export default MainLoader;
