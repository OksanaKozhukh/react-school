import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  error: false,
  loading: false,
  succeed: false,
};

const addNewProductReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.addNewProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.addNewProduct.success]: (state) => ({
    ...state,
    succeed: true,
    loading: false,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.addNewProduct.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default addNewProductReducer;
