import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';

import { TestType } from 'utils/renderWithRedux';

import { rootReducer } from 'rootReducer';

export const renderWithReduxAndRouter = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
  }: TestType = {},
) => ({
  ...render(
    <Provider store={store}>
      <MemoryRouter>
        <Route>{ui}</Route>
      </MemoryRouter>
    </Provider>,
  ),
  store,
});
