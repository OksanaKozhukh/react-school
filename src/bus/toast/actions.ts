import { createAction } from '@reduxjs/toolkit';

import { Toast } from 'types';

const actionType = 'TOAST';

export const toastActions = {
  showToast: createAction<Toast, 'TOAST/SHOW'>(`${actionType}/SHOW`),
};
