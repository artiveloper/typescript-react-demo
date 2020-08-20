import React from 'react'

interface IInputProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => {
    return (
        <input type="text" placeholder="Name" value={value} onChange={onChange}/>
    )
}

export const Form: React.FunctionComponent = ({children}) => {
    return (
        <form>{children}</form>
    )
}
