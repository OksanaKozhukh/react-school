import { object, array, number } from 'yup';

import { FORM_FIELDS } from 'constants/index';
import { getParams } from 'bus/product/helpers/formUrlQuery';

const queryParams = getParams();
const { PER_PAGE, MIN_PRICE, MAX_PRICE, ORIGINS } = FORM_FIELDS;

const initialValues = () => ({
  [PER_PAGE]: queryParams[PER_PAGE]?.toString() || '',
  [ORIGINS]:
    (queryParams[ORIGINS] && queryParams[ORIGINS]?.toString().split(',')) || [],
  [MIN_PRICE]: queryParams[MIN_PRICE]?.toString() || '',
  [MAX_PRICE]: queryParams[MAX_PRICE]?.toString() || '',
});

export const filters = {
  shape: initialValues,
  schema: object().shape({
    [ORIGINS]: array(),
    [PER_PAGE]: number(),
    [MIN_PRICE]: number(),
    [MAX_PRICE]: number(),
  }),
};
