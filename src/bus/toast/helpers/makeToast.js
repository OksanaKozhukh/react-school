import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Toast from "components/Toast";

export function makeToast(message, options) {
  return toast(<Toast {...{ message }} />, {
    hideProgressBar: true,
    position: "top-right",
    closeOnClick: true,
    pauseOnHover: true,
    transition: Slide,
    // autoClose: 4000,
    draggable: true,
    ...options,
  });
}
