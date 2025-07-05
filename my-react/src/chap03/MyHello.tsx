type MyHelloProps = {
    name: string;
}

export default function MyHello({name}: MyHelloProps){
    return(
        <div>こんにちは、{name}</div>
    )
}