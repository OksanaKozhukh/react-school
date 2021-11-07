/* eslint-disable indent */
import ReactSelect from 'react-select';
import { FC, ReactElement } from 'react';

import { IOption } from 'interfaces';

import styles from './styles.module.scss';

type Props = {
  id?: string;
  label?: string;
  labelStyles?: string;
  name: string;
  options: Array<IOption>;
  isMulti?: boolean;
  value: string | string[];
  onBlur?: any;
  onChange: (...args: any[]) => void;
  placeholder: string;
  defaultValue?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
};

const Select: FC<Props> = ({
  id,
  name,
  value,
  label,
  error,
  onBlur,
  options,
  touched,
  isMulti,
  onChange,
  labelStyles,
  placeholder,
  defaultValue,
}: Props): ReactElement => {
  const getValue = () =>
    !isMulti
      ? options.find((option) => option.value === value) || ''
      : options.filter((option) => value.includes(option.value)) || [];
  const getDefaultValue = () =>
    options.find((option) => option.value === defaultValue);
  const handleChange = (option) =>
    isMulti
      ? onChange(name, option ? option.map((item) => item.value) : [])
      : onChange(name, option.value);

  return (
    <div data-testid="select" className={styles.field}>
      {label && (
        <div className={labelStyles}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <ReactSelect
        name={name}
        onBlur={onBlur}
        options={options}
        isMulti={isMulti}
        value={getValue()}
        onChange={handleChange}
        placeholder={placeholder}
        defaultValue={getDefaultValue()}
      />
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Select;
