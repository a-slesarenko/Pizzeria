import { useCallback, useRef, useState } from "react";
import * as styles from "./Search.module.scss";
import SearchIcon from "@/assets/images/svg/search-heart.svg";
import Remove from "@/assets/images/svg/remove.svg";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { setSearchValue } from "@/redux/features/filter/filterSlice";
import debounce from "lodash.debounce";

const Search = () => {
    const [localSearchVal, setLocalSearchVal] = useState('');
    const {searchValue } = useSelector((state:RootState ) => state.filter);
    const dispatch = useAppDispatch();
    const inputRef = useRef <HTMLInputElement>();

    const Clear = () => {
        dispatch(setSearchValue(''));
        setLocalSearchVal('');
        inputRef.current.focus();
    }

    const updateSearch = useCallback(
        debounce((string: string) => {
            dispatch(setSearchValue(string));
        }, 1000),
    [])

    const changeInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchVal(event.target.value);
        updateSearch(event.target.value);
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.flex_wrapper}>
                <div className={styles.flex_left}>
                    <SearchIcon className={styles.icon} />
                </div>
                <div className={styles.flex_center}>
                    <input ref={inputRef} type="text" placeholder="Найти пиццу" value={localSearchVal} onChange={changeInputValue} />
                </div>
                <div className={styles.flex_right}>
                    {searchValue && <Remove className={styles.remove} onMouseDown={Clear} />}
                </div>
            </div>
        </div>
    )
        
}

export default Search