import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  id?: string;
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  value: string | number;
  error?: string | undefined;
  touched?: boolean | undefined;
  onBlur?: (...args: any[]) => void;
  onChange: (...args: any[]) => void;
};

const Input: FC<Props> = ({
  id,
  type,
  name,
  value,
  label,
  error,
  onBlur,
  touched,
  onChange,
  placeholder,
}: Props): ReactElement => (
  <div className={styles.field}>
    {label && (
      <div className={styles.label}>
        <label htmlFor={id}>{label}</label>
      </div>
    )}
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
    />
    {touched && <div className={styles.error}>{error}</div>}
  </div>
);

export default Input;
