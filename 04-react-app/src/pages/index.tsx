import {useState} from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
        console.log("Count is: " + count);
    };

    return (
        <>
            <h1>App</h1>
            <div>{count}</div>
            <button onClick={inc}>Inc</button>
        </>
    );
}
