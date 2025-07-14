import { useState } from "react";

export default function FormCheck(){
    const [form,setForm] = useState({
        agreement:true
    })

    const handleForm = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const show = () => {
        alert(`${form.agreement}`)
    }

    return (
        <form>
            <label htmlFor="agreement1">同意します</label><br />
            <input id="agreement1" name="agreement" type="checkbox" checked={form.agreement} onChange={handleForm} />
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}