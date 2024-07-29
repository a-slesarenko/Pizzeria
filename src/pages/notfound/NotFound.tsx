import * as styles from "./NotFound.module.scss";
import john from "@/assets/images/john.jpg";

const NotFound = () => {
    return (
        <main>
            <div className="container">
                <div className={styles.flex_container}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>Не удалось получить пиццы... Проверьте что вы ввели в поиске, таких пицц в ассортименте нет</h1>
                        <p>Если вы не пользовались поиском, возможно удаленный сервер не отвечает или адрес к которому вы патаетесь обратиться не существует либо изменился. Проверьте адрес или попробуйте позже.</p>
                    </div>
                    <img src={john} alt="Not found John Travolta" />
                </div>
            </div>
        </main>
    )
}

export default NotFound