import { createAction } from '@reduxjs/toolkit';

const actionType = 'MODALS';

export const modalsActions = {
  openModal: createAction<string>(`${actionType}/OPEN`),
  closeModal: createAction(`${actionType}/CLOSE`),
};
