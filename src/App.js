import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import ItemInfo from "./pages/ItemInfo";
import ProductList from "./pages/ProductsList";

export const ProductContext = React.createContext();

function App() {
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://yalantis-react-school-api.yalantis.com/api/v1/products"
      );
      setList(response.data.items);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ list, totalPrice, setTotalPrice, cartList, setCartList }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/products" component={ProductList} />
        </Switch>
        <Switch>
          <Route path="/product-info/:id" component={ItemInfo} />
        </Switch>
        <Switch>
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      </ProductContext.Provider>
  );
}

export default App;
