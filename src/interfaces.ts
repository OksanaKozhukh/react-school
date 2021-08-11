export interface IItem {
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
  isEditable: boolean;
}
export interface IItemWithQuantity {
  quantity: number;
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
  isEditable: boolean;
}

export interface IOrigin {
  value: string;
  displayName: string;
}

export interface IList {
  items: [];
}

export interface IProduct {
  name: string | null;
  price: string | null;
  origin: string | null;
}
// price should be number

export interface IError {
  error: {
    code: string;
  };
}
