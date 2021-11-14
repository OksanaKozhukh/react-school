import {
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { renderWithRedux } from 'utils/renderWithRedux';
import DeleteProduct from 'containers/Modals/DeleteProduct';

describe('DeleteProduct modal', () => {
  it('should render DeleteProduct modal with Cancel and Delete buttons', () => {
    const { getByRole, getByText } = renderWithRedux(<DeleteProduct />);
    expect(getByText('Delete the product?')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });
});
