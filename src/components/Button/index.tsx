import { FC, ReactElement } from 'react';
import cn from 'classnames';

import ButtonLoader from 'components/ButtonLoader';

import styles from './styles.module.scss';

type Props = {
  title?: string;
  testId?: string;
  loading?: boolean;
  children?: object;
  disabled?: boolean;
  extraClass?: string;
  onClick?: (...args: any[]) => void;
};

const Button: FC<Props> = ({
  title,
  testId,
  loading,
  onClick,
  disabled,
  children,
  extraClass,
}: Props): ReactElement => (
  <div className={cn(styles.btn, extraClass)}>
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {loading ? <ButtonLoader /> : <div>{title}</div>}
      {children}
    </button>
  </div>
);

export default Button;
