import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { BOOK } from 'book';
import Cart from 'pages/Cart';
import ItemInfo from 'pages/ItemInfo';
import Header from 'components/Header';
import ProductList from 'pages/ProductsList';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path={BOOK.PRODUCT_LIST} component={ProductList} />
        <Route path={BOOK.MY_PRODUCT_LIST} component={ProductList} />
        <Route path={BOOK.PRODUCT_ITEM} component={ItemInfo} />
        <Route path={BOOK.CART} component={Cart} />
        <Redirect to={BOOK.PRODUCT_LIST} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
