import React from 'react'

export default function StyledPanel({children} :{ children: React.ReactNode }){
    return (
        <div style={{
            margin : 50,
            padding : 20,
            border: '1px solid #000',
            width: 'fit-content'
        }}>
            {children}
        </div>
    )
}
