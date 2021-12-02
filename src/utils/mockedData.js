export const mockedError = 'Something went wrong';

export const mockedProduct = { name: 'book', price: 100, origin: 'usa' };

export const mockedProductItem = {
  ...mockedProduct,
  id: '12',
  quantity: 3,
  isEditable: false,
  totalPrice: 0,
};

export const mockedProductItemModified = {
  ...mockedProductItem,
  totalPrice: 200,
};

export const mockedProductList = [
  {
    price: 100,
    origin: 'asia',
    isEditable: false,
    name: 'Golden Fish',
  },
  {
    price: 200,
    origin: 'usa',
    isEditable: false,
    name: 'Black Cat',
  },
];

export const mockedOrigins = [
  { value: 'usa', label: 'Usa' },
  { value: 'europe', label: 'Europe' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
];

export const mockedProductCart = {
  name: 'book',
  price: 100,
  origin: 'usa',
  quantity: 0,
  id: '12',
};

export const mockedCartProductList = [
  {
    price: 100,
    origin: 'asia',
    name: 'Golden Fish',
    quantity: 1,
    id: '3',
    totalPrice: 100,
  },
  {
    price: 200,
    origin: 'usa',
    name: 'Black Cat',
    quantity: 3,
    id: '9',
    totalPrice: 600,
  },
];
