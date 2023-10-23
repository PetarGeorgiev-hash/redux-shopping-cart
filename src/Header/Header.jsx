import styles from "./Header.module.css"
const Header = () => {
    return <div className={styles.header}>
        <div>ReduxToolkit</div>
        <div className={styles.cart}>You'r Cart<span> : 1</span></div>
    </div>
}

export default Header