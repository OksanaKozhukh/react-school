import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Input from 'components/Input';

const props = {
  id: 'price',
  name: 'price',
  onChange: jest.fn(),
  label: 'Product price',
  placeholder: 'Enter price',
};

describe('Input component', () => {
  let rerender;

  beforeEach(() => {
    ({ rerender } = render(<Input {...props} />));
  });

  it('should have correct label', () => {
    expect(screen.getByLabelText(props.label)).toBeInTheDocument();
  });

  it('should display placeholder if value is empty', () => {
    expect(screen.getByPlaceholderText(props.placeholder)).toBeInTheDocument();
  });

  it('should handle onChange and change input value', () => {
    const newVal = '10';
    const input = screen.getByLabelText(props.label);
    expect(input.value).toBe('');

    userEvent.type(input, newVal);
    expect(props.onChange).toHaveBeenCalledTimes(newVal.length);
    expect(input.value).toBe(newVal);
  });

  it('should display error text if has error and is touched', () => {
      const error = 'Required';
      rerender(<Input {...props} error={error} touched/>);
      expect(screen.getByText(error)).toBeInTheDocument();
  })
});
