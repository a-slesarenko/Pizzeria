import { ReactNode } from "react";
import * as styles from "./Modal.module.scss";

interface ModalProps {
    children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h2>HELLO</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;