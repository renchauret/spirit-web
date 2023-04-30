import React from 'react'
import './App.css'
import { SignIn } from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="" element={<div>yo</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
