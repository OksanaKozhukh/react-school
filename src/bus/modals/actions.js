import { createAction } from "@reduxjs/toolkit";

const actionType = 'MODALS';

export const modalsActions = {
    openModal: createAction(`${actionType}/OPEN`),
    closeModal: createAction(`${actionType}/CLOSE`)

}