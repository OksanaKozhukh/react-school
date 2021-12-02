export type IItem = {
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
  isEditable: boolean;
};

export interface IItemWithQuantity extends IItem {
  quantity: number;
  totalPrice: number;
}

export interface IOrigin {
  value: string;
  displayName: string;
}

export interface IOriginList {
  items: IOrigin[];
}

export interface IOption {
  value: string;
  label: string;
}

export interface IList {
  items: IItem[];
  page: number;
  perPage: number;
  totalItems: number;
}

export interface IDataList {
  data: IList;
}

export interface IDataItem {
  data: IItem;
}

export interface IDataOrigins {
  data: IOriginList;
}

export interface IProduct {
  product: {
    name: string;
    origin: string;
    price: number | string;
  };
}

export interface IProductWithId extends IProduct {
  id: string;
}

export interface IError {
  error: {
    code: number;
  };
}

export interface IProductState {
  error: null | IError;
  loading: boolean;
  succeed: boolean;
}

export interface IDeleteProduct extends IProductState {
  id: string;
}

export interface IEditProduct extends IProductState {
  currentProduct: IItem;
}

export interface IFetchProductItem extends IProductState {
  product: IItem;
}

export interface IFetchProductList extends IProductState {
  origins: IOrigin[];
  products: undefined | IItem[];
  totalItems: number;
}

export interface IToast {
  message: string;
}

export interface ICartState {
  cartProducts: IItemWithQuantity[];
  totalPrice: number;
}

export interface IModalState {
  name: string;
  opened: boolean;
}

export interface IProductPayload {
  id: string;
  product: IProduct;
}
