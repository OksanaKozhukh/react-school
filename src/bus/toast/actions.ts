import { createAction } from '@reduxjs/toolkit';

import { IToast } from 'interfaces';

const actionType = 'TOAST';

enum ToastActionName {
  SHOW = 'SHOW',
}

export const toastActions = {
  showToast: createAction<IToast>(`${actionType}/${ToastActionName.SHOW}`),
};
