import { useState } from "react";

type initType = {
    init : number;
}

export default function StateBasic({init} :initType){
    const [count,setCount] = useState(init);

    const handleClick = () => setCount(count + 1)

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回クリックされました。</p>
        </>
    )
}