import './styles.module.scss';

type Props = {
  message?: string;
};

const Toast = ({ message }: Props) => <h4>{message}</h4>;

export default Toast;
