import React from 'react'

import { Home } from '../00-Home/Home'
import { Register } from '../01-Register/Register'
import { Login } from '../02-Login/Login'
import { UserProfile } from '../03-UserProfile/UserProfile'
import { Appointments } from '../04-Appointments/Appointments'
import { AppointmentsAsClient } from '../05-AppointmentsAsClient/AppointmentsAsClient'
import { AppointmentsAsDentist } from '../06-AppointmentsAsDentist/AppointmentsAsDentist'
import { UserAsAdmin } from '../07-UsersAsAdmin/UserAsAdmin'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PatientsProfile } from '../08-PatientsProfile/PatientsProfile'
import { ModifyAppointment } from '../09-ModifyAppointment/ModifyAppointment'
import { CreateAppoinment } from '../10-CreateAppointment/CreateAppoinment'
import { UserProfileAsAdmin } from '../11-UserProfileAsAdmin/UserProfileAsAdmin'

export const Body = () => {
  return (
    <> 
    <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/patient-profile" element={<PatientsProfile/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/appointments-as-client" element={<AppointmentsAsClient/>}/>
        <Route path="/appointments-as-dentist" element={<AppointmentsAsDentist/>}/>
        <Route path="/users-as-admin" element={<UserAsAdmin/>}/>
        <Route path="/modify-appointment" element={<ModifyAppointment/>}/>
        <Route path="/create-appointment" element={<CreateAppoinment/>}/>
        <Route path="/user-profile-as-admin" element={<UserProfileAsAdmin/>}/>
    </Routes>
    </>
  )
}
