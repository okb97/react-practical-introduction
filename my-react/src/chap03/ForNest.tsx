import React from 'react'
import ForItem from './ForItem'

type Book = {
    isbn :string;
    title: string;
    price:number;
    summary: string;
    download: boolean;
}

type Books = {
    src: Book[];
}


export default function ForNest({src} : Books){
    return (
        <dl>
            {
                src.map(elem => (
                    <ForItem book={elem} key={elem.isbn} />
                ))
            }
        </dl>
    )
}