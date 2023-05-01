import React from 'react'
import { SignIn } from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import './App.css'
import { SignInPrompt } from './components/SignInPrompt'

export const App = () => {
    return (
        <BrowserRouter>
            <SignInPrompt />
            <Header />
            <Routes>
                {/*<Route path="/signin" element={<SignIn />} />*/}
                <Route path="" element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}
