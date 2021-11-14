import ModalsContainer from 'containers/Modals';
import { renderWithRedux } from 'utils/renderWithRedux';

describe('ModalsContainer', () => {
    
  it('should not render any modal if there is no opened modal', () => {
    const { queryByText } = renderWithRedux(<ModalsContainer />, {
      initialState: { modals: { opened: false, name: '' } },
    });
    expect(queryByText('Add Product')).not.toBeInTheDocument();
  });

  it('should render AddProduct modal if it is opened', () => {
    const { getByText } = renderWithRedux(<ModalsContainer />, {
      initialState: { modals: { opened: true, name: 'Add product' } },
    });
    expect(getByText('Add Product')).toBeInTheDocument();
  });
});
