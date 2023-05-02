import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { SignInPrompt } from './components/SignInPrompt'
import { Drinks } from './components/Drinks'

export const App = () => {
    return (
        <BrowserRouter>
            <SignInPrompt />
            <Header />
            <Routes>
                <Route path="" element={<Drinks />} />
            </Routes>
        </BrowserRouter>
    )
}
