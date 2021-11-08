import { fireEvent, render } from '@testing-library/react';

import Button from 'components/Button';

const props = {
  title: 'Edit',
  onClick: jest.fn(),
};

describe('Button component', () => {
  let btn;
  let getByRole;

  beforeEach(() => {
    ({ getByRole } = render(<Button {...props} />));
    btn = getByRole('button', { name: 'Edit' });
  });

  it('should render button with title', () => {
    expect(btn).toBeInTheDocument();
  });

  it('should handle click events', () => {
    fireEvent.click(btn);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
