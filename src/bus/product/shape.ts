import { object, string, number } from 'yup';

import { FORM_FIELDS } from 'constants/index';

const { NAME, PRICE, ORIGIN } = FORM_FIELDS;

export const productSchema = () =>
  object().shape({
    [ORIGIN]: string().required('Origin field is required'),
    [PRICE]: number()
      .required('Price field is required')
      .positive('Enter positive number'),
    [NAME]: string()
      .trim()
      .required('Name field is required')
      .min(3, 'Enter at least 3 characters')
      .max(20, 'Enter less than 20 characters'),
  });
