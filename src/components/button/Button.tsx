import { ReactNode } from "react";
import * as styles from "./Button.module.scss";

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: BtnProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.wrapper}>{children}</div>
    </button>
  );
};

export default Button;
