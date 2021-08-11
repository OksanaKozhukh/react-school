export interface IItem {
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
  isEditable: boolean;
}

export interface IItemWithQuantity extends IItem {
  quantity: number;
}

export interface IOrigin {
  value: string;
  displayName: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IList {
  items: [];
}

export interface IProduct {
  name: string | null;
  origin: string | null;
  price: number | string | null;
}
// price should be number

export interface IError {
  error: {
    code: string;
  };
}
