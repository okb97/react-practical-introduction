import React from 'react'
import Download from './Download';

type Book = {
    isbn :string;
    title: string;
    price:number;
    summary: string;
    download: boolean;
}

export default function ForItem({book} : {book:Book}){
    let dd;
    if(book.download){
        dd = <dd>{book.summary}<Download isbn={book.isbn} /></dd>
    }
    else{
        dd = <dd>{book.summary}</dd>
    }
    return(
        <React.Fragment>
            <dt>
                <a href={`https://wings.msn.to/books/${book.isbn}.jpg`}>
                {book.title}({book.price}円)
                </a>
            </dt>
            <dd>
                {book.summary}
                {book.download ? <Download isbn={book.isbn} /> :null}
            </dd>
        </React.Fragment>
    )
}