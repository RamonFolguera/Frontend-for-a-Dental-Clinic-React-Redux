import React from 'react'
import './InputTemplate.css'

export const InputTemplate = ({
    type,
    name,
    placeholder,
    changeFunction,
    validateFunction
}) => {
    return (
        <input
            className='inputDesign'
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeFunction}      
            onBlur={validateFunction}  
        />
    )
}
