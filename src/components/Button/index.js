import PropTypes from "prop-types";

import ButtonLoader from "components/ButtonLoader";

import styles from "./styles.module.scss";

const Button = ({ title, loading, disabled }) => (
  <div className={styles.btn}>
    <button type="submit" disabled={disabled}>
      {loading ? <ButtonLoader /> : <div>{title}</div>}
    </button>
  </div>
);

Button.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
