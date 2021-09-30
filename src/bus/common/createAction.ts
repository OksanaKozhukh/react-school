import { createAction } from '@reduxjs/toolkit';

import { IError, IProduct } from 'interfaces';

type RequestPayload = { id: string } | { product: IProduct };

export const createRequestAction = (
  actionType: string,
  actionName: string,
) => ({
  request: createAction<RequestPayload>(`${actionType}/${actionName}_REQUEST`),
  start: createAction(`${actionType}/${actionName}_START`),
  success: createAction(`${actionType}/${actionName}_SUCCESS`),
  error: createAction<IError>(`${actionType}/${actionName}_ERROR`),
});

// нужно ли прописывать типы экшенов не строками, а конкретными названиями
