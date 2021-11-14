import upperFirst from 'lodash/upperFirst';

import ItemInfo from 'pages/ItemInfo';
import { mockedProduct } from 'utils/mockedData';
import { renderWithReduxAndRouter } from 'utils/renderWithReduxAndRouter';

const initialState = {
  productItem: {
    product: mockedProduct
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 12 }),
}));

describe('ItemInfo page', () => {
  const { getByTestId, getByRole, queryByRole } = renderWithReduxAndRouter(
    <ItemInfo />, { initialState },
  );
  it('should render correct product details', () => {
    expect(getByRole('heading')).toHaveTextContent(mockedProduct.name);
    expect(getByTestId('item-origin')).toHaveTextContent(`Origin: ${upperFirst(mockedProduct.origin)}`);
    expect(getByTestId('item-price')).toHaveTextContent(`Price: $ ${(mockedProduct.price)}`);
  });
});
