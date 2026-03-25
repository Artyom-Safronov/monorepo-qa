import styles from "./styles.module.css"
import common from "../common.module.css"

export const Button = () => {
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.test}>Button</button>
            <div className={common}></div>
        </div>
    )
}

