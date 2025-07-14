import { useState } from "react";

export default function StateForm(){
    const [form,setForm] = useState({
        name:'山田太郎',
        age:18
    })
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const show = (e:React.MouseEvent<HTMLElement>) => {
        alert("フォームが送信されました。")
    }

    return(
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="age">年齢</label>
                <input id="age" name="age" type="number" onChange={handleForm} value={form.age} />
            </div>
            <button type="button" onClick={show}>送信</button>
            <p>こんにちは、{form.name}さん、({form.age}歳)</p>
        </form>
    )
}