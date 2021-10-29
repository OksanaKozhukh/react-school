import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { rootReducer } from 'rootReducer';

export const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) }: any = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});
