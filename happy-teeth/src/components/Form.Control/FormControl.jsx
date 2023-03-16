import React from 'react'
import { Form } from 'react-bootstrap'

export const FormControl = ({
  type,
  name,
  placeholder,
  changeFunction,
  validateFunction
}) => {
  return (
    <> 
        <Form.Control
            className='formControlDesign' 
            type={type}
            name={name} 
            placeholder={placeholder}
            onChange={changeFunction} 
            onBlur={validateFunction} 
          />
    </>
  )
}
