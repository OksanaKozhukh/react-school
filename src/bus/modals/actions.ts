import { createAction } from '@reduxjs/toolkit';

const actionType = 'MODALS';

export const modalsActions = {
  openModal: createAction<string, 'MODALS/OPEN'>(`${actionType}/OPEN`),
  closeModal: createAction(`${actionType}/CLOSE`),
};
