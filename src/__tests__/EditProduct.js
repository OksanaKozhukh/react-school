import { fireEvent, waitFor } from '@testing-library/react';

import { renderWithRedux } from 'utils/renderWithRedux';
import EditProduct from 'containers/Modals/EditProduct';

jest.mock('react-select', () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value,
    );
    onChange(option);
  }

  return (
    <select data-testid="select" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

const initialState = {
  edit: {
    currentProduct: {
      name: 'Golden fish',
      price: 2000,
      origin: 'Europe',
    },
  },
  productList: {
    origins: [
      { value: 'europe', label: 'Europe' },
      { value: 'usa', label: 'Usa' },
      { value: 'africa', label: 'Africa' },
      { value: 'asia', label: 'Asia' },
    ],
  },
};

describe('EditProduct modal', () => {
  let name;
  let price;
  let origin;
  let editBtn;
  let resetBtn;
  let getByRole;
  let getByText;
  let getByTestId;
  let getByPlaceholderText;

  beforeEach(() => {
    ({
      getByRole,
      getByText,
      getByTestId,
      getByPlaceholderText,
    } = renderWithRedux(<EditProduct />, { initialState }));
    origin = getByTestId('select');
    name = getByPlaceholderText('Enter name');
    price = getByPlaceholderText('Enter price');
    editBtn = getByRole('button', { name: 'Edit' });
    resetBtn = getByText('Reset').closest('button');
  });

  it('render Edit button and check it is disabled', () => {
    expect(editBtn).toBeInTheDocument();
    expect(editBtn).toHaveAttribute('disabled');
  });

  it('render Reset button and check it is not disabled', () => {
    expect(resetBtn).toBeInTheDocument();
    expect(resetBtn).not.toHaveAttribute('disabled');
  });

  it('modal fields are prefilled with values from state', () => {
    expect(price).toHaveValue(2000);
    expect(origin).toHaveValue('europe');
    expect(name).toHaveValue('Golden fish');
  });

  it('change product name', async () => {
    await waitFor(() =>
      fireEvent.change(name, {
        target: {
          value: 'Black cat',
        },
      }),
    );
    expect(name).toBeValid();
    expect(name).toHaveValue('Black cat');
  });

  it('change product price', async () => {
    await waitFor(() =>
      fireEvent.change(price, {
        target: {
          value: 1500,
        },
      }),
    );
    expect(price).toBeValid();
    expect(price).toHaveValue(1500);
  });

  it('change product origin', async () => {
    await waitFor(() =>
      fireEvent.change(origin, {
        target: {
          value: 'usa',
        },
      }),
    );
    expect(origin).toBeValid();
    expect(origin).toHaveValue('usa');
  });
});
