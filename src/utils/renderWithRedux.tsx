import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { rootReducer, AppState } from 'rootReducer';

export type TestType = {
  initialState?: AppState;
  store?: Store<AppState>;
};

export const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(rootReducer, initialState),
  }: TestType = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});
