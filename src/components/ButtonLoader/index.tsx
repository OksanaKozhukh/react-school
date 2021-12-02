import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

const ButtonLoader: FC = (): ReactElement => (
  <div className={styles.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default ButtonLoader;
