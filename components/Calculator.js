export const Add = (props) => {
    function add() {
        const num1 = props.data[0];
        const num2 = props.data[1];
        console.log(num1 + num2);
    }
    return (
        <>
            <h3>{props.data}</h3>
            <button onClick={add}>Add</button>
        </>
    );
}

export const Sub = (props) => {
    function sub() {
        const num1 = props.data[0];
        const num2 = props.data[1];
        console.log(num1 - num2);
    }
    return (
        <>
            <h3>{props.data}</h3>
            <button onClick={sub}>Sub</button>
        </>
    );
}

export const Mul = (props) => {
    function mul() {
        const num1 = props.data[0];
        const num2 = props.data[1];
        console.log(num1 * num2);
    }
    return (
        <>
            <h3>{props.data}</h3>
            <button onClick={mul}>Mul</button>
        </>
    );
}

export const Div = (props) => {
    function div() {
        const num1 = props.data[0];
        const num2 = props.data[1];
        console.log(num1 / num2);
    }
    return (
        <>
            <h3>{props.data}</h3>
            <button onClick={div}>Div</button>
        </>
    );
}
