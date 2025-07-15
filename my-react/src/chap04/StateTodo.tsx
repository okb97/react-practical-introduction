import { useState } from "react";
import './setTodo.css'

let maxId = 0
export default function StateTodo(){
    const [title,setTitle] = useState('')
    const [todo,setTodo] = useState<{ id: number; title: string; created: Date; isDone: boolean }[]>([])
    const [desc,setDesc] = useState(true)

    const handleChangeTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodo([
            ...todo,
            {
                id: ++maxId,
                title,
                created: new Date(),
                isDone: false
            }
        ])
    }

    const handleDone = (e:React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.map(item => {
            if(item.id === Number(e.currentTarget.dataset.id)){
                return {
                    ...item,
                    isDone: true
                }
            }
            else{
                return item
            }
        }))
    }

    const handleRemove = (e:React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.filter(item => item.id !== Number(e.currentTarget.dataset.id)))
    }

    const handleSort = (e:React.MouseEvent<HTMLButtonElement>) => {
        const sorted = [...todo]
        sorted.sort((m,n) => {
            if(desc){
                return n.created.getTime() - m.created.getTime()
            }
            else{
                return m.created.getTime() - n.created.getTime()
            }
        })
        setDesc(d => !d)
        setTodo(sorted)
    }

    return(
        <div>
            <label>やること：
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <button type="button" onClick={handleSort}>ソート({desc ? '↑' : '↓'})</button>
            <hr />
            <ul>
                {todo.map(item =>(
                    <li key={item.id} className={item.isDone ? 'done' : ''}>{item.title}
                    <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                    <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}