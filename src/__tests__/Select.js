import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Select from 'components/Select';

const mockedOptions = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'Usa' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
];

const props = {
  name: 'name',
  label: 'label',
  isMulti: false,
  menuIsOpen: true,
  onChange: jest.fn(),
  options: mockedOptions,
  placeholder: 'placeholder',
};

describe('<Select>', () => {
  let input;
  let result;
  let rerender;
  let container;

  beforeEach(() => {
    ({ container, rerender } = render(<Select {...props} />));
    input = container.querySelector('input');
    result = container.querySelector(`input[name=${props.name}]`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should display label if has label prop', () => {
    expect(screen.getByText(props.label)).toBeInTheDocument();
  });

  test('should display correct placeholder', () => {
    expect(screen.getByText(props.placeholder)).toBeInTheDocument();
  });

  test('should display error if has error and touched is true', () => {
    const errorText = 'Field is required';
    rerender(<Select {...props} error={errorText} touched />);

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  test('should display correct single value', () => {
    rerender(<Select {...props} value={props.options[3].value} />);

    expect(result).toHaveValue(props.options[3].value);
  });

  test('should display correct multi value', () => {
    rerender(
      <Select
        {...props}
        isMulti
        value={[props.options[0].value, props.options[3].value]}
      />,
    );
    const first = container.querySelector(
      `input[name=${props.name}]:first-child`,
    );
    const last = container.querySelector(
      `input[name=${props.name}]:last-child`,
    );

    expect(first).toHaveValue(props.options[0].value);
    expect(last).toHaveValue(props.options[3].value);
  });

  test('should handle click and select single option', async () => {
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText(props.options[0].label));
    fireEvent.click(screen.getByText(props.options[0].label));

    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith(
      props.name,
      props.options[0].value,
    );
    expect(result).toHaveValue(props.options[0].value);
  });

  test('should handle click and select multiple options', async () => {
    rerender(<Select {...props} isMulti value={[]} />);

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText(props.options[0].label));
    fireEvent.click(screen.getByText(props.options[0].label));

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText(props.options[1].label));
    fireEvent.click(screen.getByText(props.options[1].label));

    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenCalledWith(props.name, [
      props.options[0].value,
    ]);
    expect(props.onChange).toHaveBeenCalledWith(props.name, [
      props.options[1].value,
    ]);
  });

  test('should display value in the input if options are empty', () => {
    rerender(<Select {...props} options={[]} />);

    expect(input).toHaveValue('');
  });
});
