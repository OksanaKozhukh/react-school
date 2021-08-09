import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  currentProduct: {},
  error: false,
  loading: false,
  succeed: false,
};

const editProductReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.selectProductForEdit]: (state, { payload }) => ({
    ...state,
    currentProduct: payload,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.editProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.editProduct.success]: (state) => ({
    ...state,
    succeed: true,
    loading: false,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.editProduct.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default editProductReducer;
