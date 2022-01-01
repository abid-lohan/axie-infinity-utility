import styles from "../styles/counter.module.css"
import {useState} from "react";
import { FaPlus, FaMinus, FaChevronRight } from 'react-icons/fa';

export default function Counter(){
    const [number, setNumber] = useState(3)

    const plusOne = () => (number >= 9) ? setNumber(10) : setNumber(number+1);
    const minusOne = () => (number <= 1) ? setNumber(0) : setNumber(number-1);
    const newTurn = () => (number >= 8) ? setNumber(10) : setNumber(number+2);
    const resetCounter = () => setNumber(3);

    if(process.browser){
        document.onkeyup = function(event){
            if(event.key === 'a' || event.key === 'A') minusOne();
            else if(event.key === 's' || event.key === 'S') plusOne();
            else if(event.key === 'd' || event.key === 'D') newTurn();
            else if(event.key === 'r' || event.key === 'R') resetCounter();
        }
    }

    return(
        <>
            <div className={styles.number} onClick={resetCounter}>
                {number}
            </div>

            <div>
                <span className={styles.buttons}>
                    <button onClick={minusOne} className={`${styles.button} ${styles.minus}`}>
                        <FaMinus />
                    </button>

                    <button onClick={plusOne} className={`${styles.button} ${styles.plus}`}>
                        <FaPlus />
                    </button>
                </span>
                <span className={styles.buttons}>
                    <button onClick={newTurn} className={`${styles.button} ${styles.newturn}`}>
                        <FaChevronRight /> New Turn
                    </button>
                </span>
            </div>
        </>
    )
}