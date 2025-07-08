import dl_icon from '../image/dl.png'

type Book = {
    isbn :string;
    title: string;
    price:number;
    summary: string;
    download: boolean;
}

export default function Download({isbn}:{isbn:string}){
    return(
        <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    )
}