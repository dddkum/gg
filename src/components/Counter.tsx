import {useState} from "react";
import styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>{count}</div>
            <button className={styles.btn} onClick={() => setCount(count - 1)}>-</button>
            <button className={styles.btn} onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Counter;