import { FC, ReactElement } from 'react';
import cn from 'classnames';

import ButtonLoader from 'components/ButtonLoader';

import styles from './styles.module.scss';

type Props = {
  title?: string;
  loading?: boolean;
  onClick?: (...args: any[]) => any;
  disabled?: boolean;
  extraClass?: string;
};

const Button: FC<Props> = ({
  title,
  loading,
  disabled,
  onClick,
  extraClass,
}: Props): ReactElement => (
  <div className={cn(styles.btn, extraClass)}>
    <button type="submit" disabled={disabled} onClick={onClick}>
      {loading ? <ButtonLoader /> : <div>{title}</div>}
    </button>
  </div>
);

export default Button;
