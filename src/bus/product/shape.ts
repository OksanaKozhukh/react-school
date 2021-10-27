import { object, string, number } from 'yup';

import { FORM_FIELDS } from 'constants/index';

const { NAME, PRICE, ORIGIN } = FORM_FIELDS;

export const productSchema = () =>
  object().shape({
    [ORIGIN]: string().required('This field is required'),
    [PRICE]: number()
      .required('This field is required')
      .positive('Enter positive number'),
    [NAME]: string()
      .trim()
      .required('This field is required')
      .min(3, 'Enter at least 3 characters')
      .max(20, 'Enter less than 20 characters'),
  });
