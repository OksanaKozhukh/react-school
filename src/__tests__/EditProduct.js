import { fireEvent, waitFor, screen } from '@testing-library/react';

import { renderWithRedux } from 'utils/renderWithRedux';
import EditProduct from 'containers/Modals/EditProduct';
import { mockedProduct, mockedOrigins } from 'utils/mockedData';

const initialState = {
  edit: {
    currentProduct: mockedProduct,
  },
  productList: {
    origins: mockedOrigins,
  },
};

describe('EditProduct modal', () => {
  let name;
  let price;
  let result;
  let editBtn;
  let resetBtn;
  let container;

  beforeEach(() => {
    ({ container } = renderWithRedux(<EditProduct />, { initialState }));
    name = screen.getByPlaceholderText('Enter name');
    price = screen.getByPlaceholderText('Enter price');
    editBtn = screen.getByRole('button', { name: 'Edit' });
    resetBtn = screen.getByText('Reset').closest('button');
    result = container.querySelector(`input[name=origin]`);
  });

  it('should render Edit button and check it is disabled', () => {
    expect(editBtn).toBeInTheDocument();
    expect(editBtn).toHaveAttribute('disabled');
  });

  it('should render Reset button and check it is not disabled', () => {
    expect(resetBtn).toBeInTheDocument();
    expect(resetBtn).not.toHaveAttribute('disabled');
  });

  it('should prefill modal fields with values from state', () => {
    expect(price).toHaveValue(mockedProduct.price);
    expect(result).toHaveValue(mockedProduct.origin);
    expect(name).toHaveValue(mockedProduct.name);
  });

  it('should change product name', async () => {
    await waitFor(() =>
      fireEvent.change(name, {
        target: {
          value: 'Black cat',
        },
      }),
    );

    expect(name).toBeValid();
    expect(name).toHaveValue('Black cat');

    await waitFor(() => fireEvent.submit(screen.getByTestId('form')));
  });

  it('should change product price', async () => {
    await waitFor(() =>
      fireEvent.change(price, {
        target: {
          value: 1500,
        },
      }),
    );

    expect(price).toBeValid();
    expect(price).toHaveValue(1500);

    await waitFor(() => fireEvent.submit(screen.getByTestId('form')));
  });
});
