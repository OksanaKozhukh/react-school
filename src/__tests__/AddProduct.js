import { fireEvent, waitFor, screen } from '@testing-library/react';

import AddProduct from 'containers/Modals/AddProduct';
import { renderWithRedux } from 'utils/renderWithRedux';

const mockedOrigins = {
  productList: {
    origins: [
      { value: 'usa', label: 'Usa' },
      { value: 'europe', label: 'Europe' },
      { value: 'africa', label: 'Africa' },
      { value: 'asia', label: 'Asia' },
    ],
  },
};

describe('AddProduct modal', () => {
  let btn;
  let name;
  let price;
  let origin;
  // let container;

  beforeEach(() => {
    renderWithRedux(
      <AddProduct />,
      { mockedOrigins },
    );
    name = screen.getByLabelText(/Name/);
    origin = screen.getByTestId('select');
    price = screen.getByLabelText(/Price/);
    btn = screen.getByRole('button', { name: 'Add' });
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

  it('should handle change fields and submit form', async () => {
    await waitFor(() =>
      fireEvent.change(name, {
        target: {
          value: 'mockName',
        },
      }),
    );

    expect(name).toBeValid();
    expect(name).toHaveValue('mockName');

    await waitFor(() =>
      fireEvent.change(price, {
        target: {
          value: 1000,
        },
      }),
    );
    
    expect(price).toBeValid();
    expect(price).toHaveValue(1000);

    // const input = origin.querySelector('input');
    // const result = container.querySelector(`input[name=origin]`);

    // await waitFor(() => fireEvent.keyDown(input, { key: 'ArrowDown' }));
    // screen.debug();
    // await waitFor(() => screen.getByText('Usa'));
    // fireEvent.click(screen.getByText('Usa'));

    // expect(result).toHaveValue('usa');

    // await waitFor(() => fireEvent.submit(getByTestId('form')));
  });
});
