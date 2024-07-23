import * as styles from "./NotFound.module.scss";
import john from "@/assets/images/john.jpg";

const NotFound = () => {
    return (
        <main>
            <div className="container">
                <div className={styles.flex_container}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>NOT FOUND...</h1>
                        <p>You are here because the requested page does not exist or has been moved to a different address.</p>
                    </div>
                    <img src={john} alt="Not found John Travolta" />
                </div>
            </div>
        </main>
    )
}

export default NotFound