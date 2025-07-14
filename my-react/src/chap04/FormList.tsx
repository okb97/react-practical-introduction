import { useState } from "react";

export default function FormList(){
    const [form,setForm] = useState<{animal:string[]}>({
        animal:[]
    })

    const handleForm = (e : React.ChangeEvent<HTMLSelectElement>) => {
        const data = []
        const opts = e.target.options
        for(const opt of Array.from(opts)){
            if(opt.selected){
                data.push(opt.value)
            }
        }
        setForm({
            ...form,
            [e.target.name]: data
        })
    }

    const show = () => {
        alert(`${form.animal}`)
    }

    return (
        <form>
            <label htmlFor="animal2">好きな動物</label>
            <select id="animal2" name="animal" value={form.animal} multiple={true} onChange={handleForm}>
            <option value="dog">イヌ</option>
            <option value="cat">ネコ</option>
            <option value="sheep">ヒツジ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}