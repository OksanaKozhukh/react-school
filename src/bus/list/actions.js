import { createAction } from "@reduxjs/toolkit";

const actionType = "DEFINE_LIST";

export const defineListActions = {
  setGeneralList: createAction(`${actionType}/SET_GENERAL_LIST`),
  clearGeneralList: createAction(`${actionType}/CLEAR_GENERAL_LIST`),
};
