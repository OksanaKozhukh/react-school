import cn from "classnames";
import PropTypes from "prop-types";

import ButtonLoader from "components/ButtonLoader";

import styles from "./styles.module.scss";

const Button = ({ title, loading, disabled, onClick, extraClass }) => (
  <div className={cn(styles.btn, extraClass)}>
    <button type="submit" disabled={disabled} onClick={onClick}>
      {loading ? <ButtonLoader /> : <div>{title}</div>}
    </button>
  </div>
);

Button.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  extraClass: PropTypes.string,
};

export default Button;
