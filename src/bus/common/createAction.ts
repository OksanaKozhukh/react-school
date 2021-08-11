import { createAction } from '@reduxjs/toolkit';

import { IItem, IOrigin, IList, IProduct, IError } from 'interfaces';

export const createRequestAction = (
  actionType: string,
  actionName: string,
) => ({
  request: createAction<undefined | { id: string } | { product: IProduct }>(
    `${actionType}/${actionName}_REQUEST`,
  ),
  start: createAction(`${actionType}/${actionName}_START`),
  success: createAction<undefined | IItem | IOrigin | IList>(
    `${actionType}/${actionName}_SUCCESS`,
  ),
  error: createAction<boolean | IError>(`${actionType}/${actionName}_ERROR`),
});
