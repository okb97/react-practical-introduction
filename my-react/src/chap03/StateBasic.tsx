import { useState } from "react";

type initType = {
    init : number;
}

export default function StateBasic({init} :initType){
    const [count,setCount] = useState(init);

    const handleClick = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回クリックされました。</p>
        </>
    )
}