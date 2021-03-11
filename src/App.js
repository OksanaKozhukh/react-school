import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BOOK } from "book";
import Cart from "pages/Cart";
import ItemInfo from "pages/ItemInfo";
import ProductList from "pages/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={BOOK.PRODUCT_LIST} component={ProductList} />
      </Switch>
      <Switch>
        <Route path={BOOK.MY_PRODUCT_LIST} component={ProductList} />
      </Switch>
      <Switch>
        <Route path={BOOK.PRODUCT_ITEM} component={ItemInfo} />
      </Switch>
      <Switch>
        <Route path={BOOK.CART} component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
