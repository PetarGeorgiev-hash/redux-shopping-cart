import styles from "./Item.module.css"
const Item = (props) => {
    return <div className={styles.card}>
        <div style={{ maxWidth : "2rem"}}>{props.name}</div>
        <div>{props.price}</div>
        <button>Add</button>
    </div>
}

export default Item