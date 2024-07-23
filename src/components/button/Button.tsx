import { ReactNode } from "react";
import * as styles from "./Button.module.scss";
import clsx from "clsx";

interface BtnProps {
    children: ReactNode,
}

const Button = ({children}: BtnProps) => {

    return (
            <button
                className={styles.button}
                >
                    <div className={styles.wrapper}>
                    {children}
                    </div>
            </button>
    )
}

export default Button