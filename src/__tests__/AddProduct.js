import { fireEvent, waitFor } from '@testing-library/react';

import { renderWithRedux } from 'utils/renderWithRedux';
import AddProduct from 'containers/Modals/AddProduct';

jest.mock('react-select', () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value,
    );
    onChange(option);
  }

  return (
    <select data-testid="select" value={value} onChange={handleChange} required>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

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

  it('check form fields', () => {
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(origin).toBeInTheDocument();
  });

  it('check form fields to be required', () => {
    expect(name).toBeRequired();
    expect(price).toBeRequired();
    expect(origin).toBeRequired();
  });

  it('render button and check it is disabled', () => {
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('disabled');
  });

  it('submits correct values', async () => {
    // fill name input
    await waitFor(() =>
      fireEvent.change(name, {
        target: {
          value: 'mockName',
        },
      }),
    );
    expect(name).toBeValid();
    expect(name).toHaveValue('mockName');

    // fill price input
    await waitFor(() =>
      fireEvent.change(price, {
        target: {
          value: 1000,
        },
      }),
    );
    expect(price).toBeValid();
    expect(price).toHaveValue(1000);

    // select country
    await waitFor(() =>
      fireEvent.change(origin, {
        target: {
          value: 'usa',
        },
      }),
    );
    expect(origin).toBeValid();
    expect(origin).toHaveValue('usa');

    // check button is not disabled when all required fields are filled and valid
    expect(btn).not.toHaveAttribute('disabled');
  });
});
