import styles from "./Header.module.css"
import { toggle } from "../store/toggle-slice"
import { useDispatch } from "react-redux"
const Header = () => {
    const dispatch = useDispatch()

   const onCartClickHandler = () =>{
    dispatch(toggle())
   }

    return <div className={styles.header}>
        <div>ReduxToolkit</div>
        <div onClick={onCartClickHandler} className={styles.cart}>You'r Cart<span> : 1</span></div>
    </div>
}

export default Header