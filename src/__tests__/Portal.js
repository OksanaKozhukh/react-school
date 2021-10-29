import Portal from 'components/Portal';
import { renderWithRedux } from 'utils/renderWithRedux';
import AddProduct from 'containers/Modals/AddProduct';

describe('Portal component', () => {
  let unmount;
  let getByText;
  let queryByText;
  
  beforeEach(
    () =>
      ({ getByText, unmount, queryByText } = renderWithRedux(
        <Portal role="portal">
          <AddProduct />
        </Portal>,
      )),
  );

  it('modal is mounted', () => {
    expect(getByText('Add Product')).toBeInTheDocument();
  });

  it('modal is unmounted', () => {
    expect(getByText('Add Product')).toBeInTheDocument();
    unmount();
    expect(queryByText('Add New Product')).not.toBeInTheDocument();
  });
});
