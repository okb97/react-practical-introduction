export default function EventKey(){
    const handleKey = (e : React.KeyboardEvent<HTMLElement>) => {
        if(e.ctrlKey && e.key == 'q'){
            alert('名前は20文字以内で入力してください。')
        }
    }
    return(
        <form>
            <label>
                名前：
                <input type="text" onKeyDown={handleKey} />
            </label>
        </form>
    )
}