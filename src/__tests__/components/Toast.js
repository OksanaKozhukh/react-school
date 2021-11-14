import { render } from '@testing-library/react';

import Toast from 'components/Toast';

const props = {
  message: 'Product has been deleted',
};
describe('ModalsContainer', () => {
  it('should show correct toast message', () => {
    const { getByText } = render(<Toast {...props} />);
    expect(getByText(props.message)).toBeInTheDocument();
  });
});
