import React from "react"

type Book = {
    isbn :string;
    title: string;
    price:number;
    summary: string;
}

type Books = {
    src: Book[];
}

type ListeTemplateProps = {
  src: Book[];
  children: (book: Book) => React.ReactNode;
};

export default function ListeTemplate({src,children}:ListeTemplateProps){
    return(
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.isbn}>
                    {children(elem)}
                </React.Fragment>
            ))}
        </dl>
    )
}