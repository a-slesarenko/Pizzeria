import { ReactNode } from "react";
import * as styles from "./Button.module.scss";

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: BtnProps) => {


  return (
    <button className={className === "button_with_counter" ? styles.button_with_counter : styles.button} onClick={onClick}>
      <div className={styles.wrapper}>{children}</div>
    </button>
  );
};

export default Button;
