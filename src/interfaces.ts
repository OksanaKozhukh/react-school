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

export interface DataList {
  data: IList;
}

export interface DataItem {
  data: IItem;
}

export interface DataOrigins {
  data: IOriginList;
}

export interface IProduct {
  name: string;
  origin: string;
  price: number | string;
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

export interface Toast {
  message: string;
}

export interface CartState {
  cartProducts: IItemWithQuantity[];
  totalPrice: number;
}

export interface ModalState {
  name: string;
  opened: boolean;
}

export interface ProductPayload {
  id: string;
  product: IProduct;
}
