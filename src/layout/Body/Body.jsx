import React from 'react'

import { Home } from '../00-Home/Home'
import { Register } from '../01-Register/Register'
import { Login } from '../02-Login/Login'
import { UserProfile } from '../03-UserProfile/UserProfile'
import { AppointmentsAsClient } from '../05-AppointmentsAsClient/AppointmentsAsClient'
import { AppointmentsAsDentist } from '../06-AppointmentsAsDentist/AppointmentsAsDentist'
import { UsersAsAdmin } from '../07-UsersAsAdmin/UsersAsAdmin'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MyAppointmentsAsDoctor } from '../08-MyAppointmentsAsDoctor/MyAppointmentsAsDoctor'
import { ModifyAppointment } from '../09-ModifyAppointment/ModifyAppointment'
import { CreateAppoinment } from '../10-CreateAppointment/CreateAppoinment'
import { UserProfileAsAdmin } from '../11-UserProfileAsAdmin/UserProfileAsAdmin'
import { UpdateUserAsClient } from '../12-UpdateUserAsClient/UpdateUserAsClient'

export const Body = () => {
  return (
    <> 
    <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/my-appointments-as-doctor" element={<MyAppointmentsAsDoctor/>}/>
        <Route path="/appointments-as-client" element={<AppointmentsAsClient/>}/>
        <Route path="/appointments-as-dentist" element={<AppointmentsAsDentist/>}/>
        <Route path="/users-as-admin" element={<UsersAsAdmin/>}/>
        <Route path="/modify-appointment" element={<ModifyAppointment/>}/>
        <Route path="/create-appointment" element={<CreateAppoinment/>}/>
        <Route path="/user-profile-as-admin" element={<UserProfileAsAdmin/>}/>
        <Route path="/update-user-as-client" element={<UpdateUserAsClient/>}/>
    </Routes>
    </>
  )
}
