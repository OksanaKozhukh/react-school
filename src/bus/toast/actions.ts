import { createAction } from '@reduxjs/toolkit';

import { Toast } from 'interfaces';

const actionType = 'TOAST';

enum ToastActionName {
  SHOW = 'SHOW',
}

export const toastActions = {
  showToast: createAction<Toast>(`${actionType}/${ToastActionName.SHOW}`),
};
