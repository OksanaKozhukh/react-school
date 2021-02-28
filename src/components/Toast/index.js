import PropTypes from "prop-types";

import "./styles.module.scss";

const Toast = ({ message }) => <h4>{message}</h4>;

Toast.propTypes = {
  message: PropTypes.string,
};

export default Toast;
