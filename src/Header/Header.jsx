import styles from "./Header.module.css"
import { toggle } from "../store/toggle-slice"
import { useDispatch, useSelector } from "react-redux"
const Header = () => {
    const dispatch = useDispatch()

    const items = useSelector( (state) => state.addCart.items)

   const onCartClickHandler = () =>{
    dispatch(toggle())
   }

    return <div className={styles.header}>
        <div>ReduxToolkit</div>
        <div onClick={onCartClickHandler} className={styles.cart}>You'r Cart<span> : {items.length}</span></div>
    </div>
}

export default Header