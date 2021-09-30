import { IItemWithQuantity } from 'interfaces';

export type Toast = {
  message: string;
};

export type CartState = {
  cartProducts: IItemWithQuantity[];
  totalPrice: number;
};

export type ModalState = {
  name: string;
  opened: boolean;
};
