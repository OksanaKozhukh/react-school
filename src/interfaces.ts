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
  id: string;
  name: string;
  price: number;
  origin: string;
  quantity: number;
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
