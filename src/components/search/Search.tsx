import * as styles from "./Search.module.scss";
import SearchIcon from "@/assets/images/svg/search-heart.svg";

const Search = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.flex_wrapper}>
                <SearchIcon className={styles.icon} />
                <input type="text" placeholder="Найти пиццу" />
            </div>
        </div>
    )
        
}

export default Search