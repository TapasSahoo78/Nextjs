import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    //increase counter
    const increment = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrement = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    //reset counter 
    const reset = () => {
        setCounter(0)
    }
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;