import { createAction } from '@reduxjs/toolkit';

const actionType = 'MODALS';

enum ModalActionName {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export const modalsActions = {
  openModal: createAction<string>(`${actionType}/${ModalActionName.OPEN}`),
  closeModal: createAction(`${actionType}/${ModalActionName.CLOSE}`),
};
