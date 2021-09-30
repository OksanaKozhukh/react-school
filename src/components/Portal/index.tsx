/* eslint-disable no-undef */
import { useEffect, useState, FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactElement;
};

const Portal: FC<Props> = ({ children }: Props): ReactElement => {
  const [container] = useState(document.createElement('div'));
  container.classList.add('root-modal');

  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute('class', styles.wrapper);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
