import { useSelector } from 'react-redux';

import Portal from 'components/Portal';
import { Modals } from 'containers/Modals/register';
import { selectModalName, selectIsModalOpened } from 'bus/modals/selector';

const ModalsContainer = () => {
  const modalName: string = useSelector(selectModalName);
  const modalOpened: boolean = useSelector(selectIsModalOpened);
  const ModalComponent = Modals[modalName];

  if (!modalOpened || !ModalComponent) return null;

  return (
    <Portal>
      <ModalComponent />
    </Portal>
  );
};

export default ModalsContainer;
