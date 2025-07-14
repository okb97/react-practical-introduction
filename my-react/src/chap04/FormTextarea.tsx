import { useState } from "react"

export default function FormTextarea(){
    const [form,setForm] = useState({
        comment:`テスト要素`
    })
    const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <textarea id="comment" name="comment" value={form.comment} onChange={handleForm}></textarea>
            <button type="button" onClick={show}>送信</button>
            <p>{form.comment}</p>
        </form>
    )
}