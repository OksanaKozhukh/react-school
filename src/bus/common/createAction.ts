/* eslint-disable prettier/prettier */
import { createAction } from '@reduxjs/toolkit';

import { IError } from 'interfaces';

export const createRequestAction = <T, K>(
  actionType: string,
  actionName: string,
) => ({
    request: createAction<T>(`${actionType}/${actionName}_REQUEST`),
    start: createAction(`${actionType}/${actionName}_START`),
    success: createAction<K>(`${actionType}/${actionName}_SUCCESS`),
    error: createAction<IError>(`${actionType}/${actionName}_ERROR`),
  });
