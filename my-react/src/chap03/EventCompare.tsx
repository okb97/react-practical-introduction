import { useState } from "react";
import './EventCompare.css'

export default function EventCompare(){
    const [result,setResult] = useState('');

    const handleIn = (e : React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        setResult(r => `${r}Enter:${target.id}<br />`)
    }
    const handleOut  = (e : React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        setResult(r => `${r}Leave:${target.id}<br />`)
    }
    return (
        <>
            <div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}>
                外（outer）
                <p id="inner">
                    内（inner）
                </p>
            </div>
            <div dangerouslySetInnerHTML={{__html: result}}></div>
        </>
    )
}