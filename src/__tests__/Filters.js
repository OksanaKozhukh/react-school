import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor, screen } from '@testing-library/react';

import Filter from 'containers/Filters';
import { renderWithRedux } from 'utils/renderWithRedux';

describe('MinMaxPcice container', () => {
  let min;
  let max;
  let perPage;
  let container;

  beforeEach(() => {
    ({ container } = renderWithRedux(<Filter />));
    min = screen.getByPlaceholderText('Min price');
    max = screen.getByPlaceholderText('Max price');
    perPage = screen.getByTestId('perPage-select');
  });

  it('check placeholders', () => {
    expect(min).toBeInTheDocument();
    expect(max).toBeInTheDocument();
  });

  it('should handle correct min price', () => {
    expect(screen.queryByDisplayValue('100')).not.toBeInTheDocument();
    userEvent.type(min, '100');

    expect(screen.getByDisplayValue('100')).toBeInTheDocument();
  });

  it('should handle correct max price', () => {
    expect(screen.queryByDisplayValue('500')).not.toBeInTheDocument();
    userEvent.type(max, '500');

    expect(screen.getByDisplayValue('500')).toBeInTheDocument();
  });

  it('should handle correct perPage filter and submit form', async () => {
    const input = perPage.querySelector('input');
    const result = container.querySelector(`input[name=perPage]`);

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText('10'));
    fireEvent.click(screen.getByText('10'));

    expect(result).toHaveValue('10');

    await waitFor(() => fireEvent.submit(screen.getByTestId('form')));
  });
});
