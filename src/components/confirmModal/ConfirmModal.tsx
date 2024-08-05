import * as styles from "./ConfirmModal.module.scss";

interface ModalProps {
    onClickHandler:  (desicion: string) => void,
}

const ConfirmModal = ({onClickHandler}: ModalProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.window}>
                <div className={styles.title}>
                    <h2>Вы уверены?</h2>
                </div>
                <div className={styles.text}>
                    Необходимо подтвердить действие.
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => onClickHandler('yes')} >Да</button>
                    <button onClick={() => onClickHandler('no')} >Нет </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal