import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navigator = ({route, layout}) => {

const navigate = useNavigate()


  return (
    <div onClick={() => navigate(layout)}>
        {route}
    </div>
  )
}
