import { object, string, number } from 'yup';

import { FORM_FIELDS } from 'constants/index';

const { NAME, PRICE, ORIGIN } = FORM_FIELDS;

export const addProduct = {
    shape: {
        [NAME]: '',
        [PRICE]: '',
        [ORIGIN]: ''
    },
    schema: object().shape({
        [ORIGIN]: string().required('This field is required'),
        [PRICE]: number().required('This field is required').positive(),
        [NAME]: string().required('This field is required').min(3).max(20).trim(),
    })
};