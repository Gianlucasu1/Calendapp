import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar'

export const AppRouter = () => {
    const isAuthenticated = "authenticated"

    return (
        <Routes>
            {
                isAuthenticated === "non-authenticated" ?
                    <Route path='auth/*' element={<LoginPage />}></Route> :
                    <Route path='/*' element={<CalendarPage />}></Route>
            }
            <Route path='/*' element={<Navigate to="auth/login" />} ></Route>
        </Routes>
    )
}
