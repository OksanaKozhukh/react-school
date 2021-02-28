import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import styles from "./styles.module.scss";

const Portal = ({ children }) => {
  const [container] = useState(document.createElement("div"));
  container.classList.add("root-modal");

  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute('class', styles.wrapper);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};



export default Portal;
