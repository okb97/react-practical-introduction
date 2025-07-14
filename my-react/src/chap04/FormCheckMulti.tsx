import { useState } from "react";

export default function FormCheckMulti(){
    const [form,setForm] = useState<{animal: string[]}>({
        animal:[]
    })

    const handleForm = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const updated = e.target.checked ? [...form.animal, value] : form.animal.filter(v => v !== value)


        setForm({
            ...form,
            [e.target.name]: updated
        })
    }

    const show = () => {
        alert(`${form.animal}`)
    }

    return (
        <form>
            <label htmlFor="animal">好きな動物</label><br />
            <label htmlFor="animal_dog">イヌ</label>
            <input id="animal_dog" name="animal" type="checkbox" value="dog" checked={form.animal.includes('dog')} onChange={handleForm} />
            <label htmlFor="animal_cat">ネコ</label>
            <input id="animal_cat" name="animal" type="checkbox"  value="cat" checked={form.animal.includes('cat')} onChange={handleForm} />
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}