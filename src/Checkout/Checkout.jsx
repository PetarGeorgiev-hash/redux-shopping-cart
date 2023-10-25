import { useSelector } from "react-redux"
import styles from "./Checkout.module.css"
const Checkout = () =>{
    const state = useSelector(state => state.addCart.items)
    return <div className={styles.wrapper}>{state.map(item => {
       return <div className={styles.card} key={Math.random()}>
        <div>{item.name}</div>
        <div>{item.price}</div>
       </div>
    })}</div>
}

export default Checkout