import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from 'components/Select';

const mockedOptions = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'Usa' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
];

const props = {
  error: true,
  name: 'name',
  touched: true,
  isMulti: false,
  menuIsOpen: true,
  onChange: jest.fn(),
  errorText: 'errorText',
  options: mockedOptions,
  placeholder: 'placeholder',
};

describe('<Select>', () => {
  let input;
  let rerender;
  let container;

  beforeEach(() => {
    ({ container, rerender } = render(<Select {...props} />));
    input = container.querySelector('input');
  });

  afterEach(() => {
    props.onChange.mockClear();
  });

  test('should display correct placeholder', () => {
    expect(screen.getByText(props.placeholder)).toBeInTheDocument();
  });

  test('should handle click and select single option', async () => {
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText('Europe'));
    fireEvent.click(screen.getByText('Europe'));

    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith(props.name, 'europe');
  });

  test('should handle click and select multiple options', async () => {
    rerender(<Select {...props} isMulti value={[]} />);

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText('Europe'));
    fireEvent.click(screen.getByText('Europe'));

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText('Usa'));
    fireEvent.click(screen.getByText('Usa'));

    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenCalledWith(props.name, ['europe']);
    expect(props.onChange).toHaveBeenCalledWith(props.name, ['usa']);
  });

  test('shoul display value in the input if options are empty', () => {
    rerender(<Select {...props} options={[]} />);
    expect(input).toHaveValue('');
  });
});
