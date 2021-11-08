// import selectEvent from 'react-select-event';
import { fireEvent, waitFor } from '@testing-library/react';

import AddProduct from 'containers/Modals/AddProduct';
import { renderWithRedux } from 'utils/renderWithRedux';

const initialState = {
  productList: {
    origins: [
      { value: 'europe', label: 'Europe' },
      { value: 'usa', label: 'Usa' },
      { value: 'africa', label: 'Africa' },
      { value: 'asia', label: 'Asia' },
    ],
  },
};

describe('AddProduct modal', () => {
  const mockedHandler = jest.fn();
  let btn;
  let name;
  let price;
  let origin;
  let getByText;
  let getByTestId;
  let getByLabelText;

  beforeEach(() => {
    ({ getByText, getByTestId, getByLabelText } = renderWithRedux(
      <AddProduct />,
      { initialState },
    ));
    name = getByLabelText(/Name/);
    origin = getByTestId('select');
    price = getByLabelText(/Price/);
    btn = getByText('Add').closest('button');
  });

  it('should render correct form fields', () => {
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(origin).toBeInTheDocument();
  });

  it('should render button and check it is disabled', () => {
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('disabled');
  });

  it('should fill correct name input', async () => {
    await waitFor(() =>
      fireEvent.change(name, {
        target: {
          value: 'mockName',
        },
      }),
    );
    expect(name).toBeValid();
    expect(name).toHaveValue('mockName');
  });

  it('should fill correct price input', async () => {
    await waitFor(() =>
      fireEvent.change(price, {
        target: {
          value: 1000,
        },
      }),
    );
    expect(price).toBeValid();
    expect(price).toHaveValue(1000);
  });

  // it('should fill correct origin select', async () => {
  //   const input = origin.querySelector('input');
  //   fireEvent.keyDown(input, { key: 'ArrowDown' });
  //   await waitFor(() => getByText('Europe'));
  //   fireEvent.click(screen.getByText('Europe'));

  //   expect(imput).toHaveValue('europe')
  // });
});
