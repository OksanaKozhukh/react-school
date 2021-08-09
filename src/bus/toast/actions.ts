import { createAction } from '@reduxjs/toolkit';

const actionType = 'TOAST';

export const toastActions = {
  showToast: createAction(`${actionType}/SHOW`),
};
