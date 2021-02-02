export const getTotalPrice = (arr) =>
  arr.map((item) => item.price).reduce((acc, cur) => acc + cur, 0);
