type Props = {
    step: number;
    onUpdate: (step : number) => void
}

export default function StateCounter({step, onUpdate} : Props){
    const handleClick = () => onUpdate(step)
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    )
}