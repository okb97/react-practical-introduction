import { useState } from "react";
import { useImmer } from "use-immer";

export default function StateNestImmer(){
    const [form,setForm] = useImmer({
        name:'',
        address: {
            prefecture:'',
            city: ''
        }
    })

    const handleForm = (e : React.ChangeEvent<HTMLInputElement>) => {
        setForm(form => {
            form[e.target.name as "name"] = e.target.value
        })
    }

    const handleFormNest = (e : React.ChangeEvent<HTMLInputElement>) => {
        setForm(form => {
            form.address[e.target.name as keyof typeof form.address] = e.target.value            
            }
        )
    }

    const show = () => {
        alert(`${form.name},${form.address.prefecture},${form.address.city}`)
    }

    return(
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="prefecture">都道府県：</label>
                <input id="prefecture" name="prefecture" type="text" onChange={handleFormNest} value={form.address.prefecture} />
            </div>
            <div>
                <label htmlFor="city">住所：</label>
                <input id="city" name="city" type="text" onChange={handleFormNest} value={form.address.city} />
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}