import { useState } from "react";

export default function FormSelect(){
    const [form,setForm] = useState({
        animal:''
    })

    const handleForm = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        alert(`${form.animal}`)
    }

    return (
        <form>
            <label htmlFor="animal2">好きな動物</label>
            <select id="animal2" name="animal" value={form.animal} onChange={handleForm}>
            <option value="dog">イヌ</option>
            <option value="cat">ネコ</option>
            <option value="sheep">ヒツジ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}