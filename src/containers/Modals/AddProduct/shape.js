import { FORM_FIELDS } from "constants/index";
import { productSchema } from "bus/product/shape";

const { NAME, PRICE, ORIGIN } = FORM_FIELDS;

export const addProduct = {
  shape: {
    [NAME]: "",
    [PRICE]: "",
    [ORIGIN]: "",
  },
  schema: productSchema,
};
