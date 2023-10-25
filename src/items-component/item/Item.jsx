import { useDispatch } from "react-redux"
import styles from "./Item.module.css"
import { add } from "../../store/cart-slice"
const Item = (props) => {
    const dispath = useDispatch()

    const onAddClickHandler = () =>{
        dispath(add({name: props.name, price: props.price}))
    }

    return <div className={styles.card}>
        <div style={{ maxWidth : "2rem"}}>{props.name}</div>
        <div>{props.price}</div>
        <button onClick={onAddClickHandler}>Add</button>
    </div>
}

export default Item