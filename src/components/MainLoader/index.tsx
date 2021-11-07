import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

const MainLoader: FC = (): ReactElement => (
  <div className={styles.loading} data-testid="main-loader">
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
);

export default MainLoader;
