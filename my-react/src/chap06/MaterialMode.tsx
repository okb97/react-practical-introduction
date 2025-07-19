import { useState } from "react";

export default function MaterialMode(){
    const [mode,setMode] = useState('light')
    const toggleMode = () => setMode(
        prev => prev === 'light' ? 'dark' : 'light'
    )

    
}