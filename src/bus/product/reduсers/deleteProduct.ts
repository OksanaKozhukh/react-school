import { createReducer } from '@reduxjs/toolkit';

import { productActions } from 'bus/product/actions';

const initialState = {
  id: null,
  error: false,
  loading: false,
  succeed: false,
};

const deleteProductReducer = createReducer(initialState, {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.selectProductForDelete]: (state, { payload }) => ({
    ...state,
    id: payload,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.deleteProduct.start]: (state) => ({
    ...state,
    loading: true,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.deleteProduct.success]: (state) => ({
    ...state,
    succeed: true,
    loading: false,
  }),
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [productActions.deleteProduct.error]: (state, { payload }) => ({
    ...state,
    error: payload.error.code,
  }),
});

export default deleteProductReducer;
