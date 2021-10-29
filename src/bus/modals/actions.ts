import { createAction } from '@reduxjs/toolkit';

const actionType = 'MODALS';

enum ModalActionName {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export const modalsActions = {
  closeModal: createAction(`${actionType}/${ModalActionName.CLOSE}`),
  openModal: createAction<string>(`${actionType}/${ModalActionName.OPEN}`),
};
