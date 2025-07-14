import { useState } from "react";

export default function FormRadio(){
    const [form,setForm] = useState({
        os : ''
    })

    const handleForm = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        alert(`${form.os}`)
    }

    return (
        <form>
            <label htmlFor="os">使用OS</label><br />
            <label htmlFor="os_win">Windows</label>
            <input id="os_win" name="os" type="radio" value="windows" checked={form.os === "windows"} onChange={handleForm} /><br />
            <label htmlFor="os_mac">Mac</label>
            <input id="os_mac" name="os" type="radio" value="mac" checked={form.os === "mac"} onChange={handleForm} />
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}