import modalsReducer from 'bus/modals/reducer';
import { modalsActions } from 'bus/modals/actions';

const initialState = {
  name: '',
  opened: false,
};

describe('modalsReducer', () => {
  it('should return the initial state', () => {
    expect(modalsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle open modal action', () => {
    expect(
      modalsReducer(initialState, {
        type: modalsActions.openModal,
        payload: 'Edit product',
      }),
    ).toEqual({
      ...initialState,
      opened: true,
      name: 'Edit product',
    });
  });

  it('should handle close modal action', () => {
    expect(modalsReducer(initialState, modalsActions.closeModal)).toEqual({
      ...initialState,
    });
  });
});
