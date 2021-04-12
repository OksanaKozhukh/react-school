import Select from 'react-select';
import selectEvent from 'react-select-event';
import { render } from '@testing-library/react';

const options = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'Usa' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
];

describe('emulate FilterByCountry container', () => {
  it('check select values', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <label htmlFor="origin">Origin</label>
        <Select options={options} name="origin" inputId="origin" isMulti />
      </form>,
    );

    // for empty state
    expect(getByTestId('form')).toHaveFormValues({ origin: '' });

    // select one value
    await selectEvent.select(getByLabelText('Origin'), 'Europe');
    expect(getByTestId('form')).toHaveFormValues({ origin: 'europe' });

    // select second value
    await selectEvent.select(getByLabelText('Origin'), 'Usa');
    expect(getByTestId('form')).toHaveFormValues({ origin: ['europe', 'usa'] });

    // select third value
    await selectEvent.select(getByLabelText('Origin'), 'Africa');
    expect(getByTestId('form')).toHaveFormValues({
      origin: ['europe', 'usa', 'africa'],
    });
  });
});
