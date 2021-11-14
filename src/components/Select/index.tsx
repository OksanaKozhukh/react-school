/* eslint-disable indent */
import ReactSelect from 'react-select';
import { FC, ReactElement } from 'react';

import { IOption } from 'interfaces';

import styles from './styles.module.scss';

type Props = {
  id?: string;
  name: string;
  label?: string;
  testId?: string;
  isMulti?: boolean;
  placeholder: string;
  labelStyles?: string;
  defaultValue?: string;
  options: Array<IOption>;
  value: string | string[];
  error?: string | undefined;
  touched?: boolean | undefined;
  onBlur?: (...args: any[]) => void;
  onChange: (...args: any[]) => void;
};

const Select: FC<Props> = ({
  id,
  name,
  value,
  label,
  error,
  onBlur,
  testId,
  options,
  touched,
  isMulti,
  onChange,
  labelStyles,
  placeholder,
  defaultValue,
}: Props): ReactElement => {
  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) =>
            value ? value.includes(option.value) : [],
          )
        : options.find((option) => option.value === value);
    }
    return isMulti ? [] : '';
  };
  const getDefaultValue = () =>
    options && options.find((option) => option.value === defaultValue);
  const handleChange = (option) =>
    isMulti
      ? onChange(name, option ? option.map((item) => item.value) : [])
      : onChange(name, option.value);

  return (
    <div data-testid={testId || 'select'} className={styles.field}>
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
