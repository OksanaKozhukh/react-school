import { FC, ReactElement } from 'react';

import './styles.module.scss';

type Props = {
  message: string;
};

const Toast: FC<Props> = ({ message }: Props): ReactElement => (
  <h4>{message}</h4>
);

export default Toast;
