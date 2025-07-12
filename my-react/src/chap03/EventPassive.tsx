import './EventPassive.css';

export default function EventPassive(){
    const handleWheel = (e:React.WheelEvent<HTMLElement>) => e.preventDefault()
    return(
        <div className="box" onWheel={handleWheel}>
            {[...Array(50)].map((_, i) => (
                <p key={i}>スクロールテスト {i + 1}</p>
            ))}
        </div>
    )
}