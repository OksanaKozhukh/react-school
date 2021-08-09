import { createAction } from '@reduxjs/toolkit';

export const createRequestAction = (actionType, actionName) => ({
  request: createAction(`${actionType}/${actionName}_REQUEST`),
  start: createAction(`${actionType}/${actionName}_START`),
  success: createAction(`${actionType}/${actionName}_SUCCESS`),
  error: createAction(`${actionType}/${actionName}_ERROR`),
});
