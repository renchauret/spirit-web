import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { SignInPrompt } from './components/SignInPrompt'
import { DrinkGallery } from './components/DrinkGallery'
import { RoutedDrinkPage } from './components/DrinkView'

export const App = () => {
    return (
        <div className="md:w-4/5 my-0 mx-auto">
            <BrowserRouter>
                <SignInPrompt />
                <Header />
                <Routes>
                    <Route path="" element={<DrinkGallery />} />
                    <Route path="drink/:drinkGuid" element={<RoutedDrinkPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
