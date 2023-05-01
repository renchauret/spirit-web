import React from 'react'
import { useGetDrinks } from '../hooks/Drinks'

export const Drinks = () => {
    const { data: drinks } = useGetDrinks()
    if (!drinks) return <></>

    return (
        <div>
            {drinks.map(drink => (
                <div key={drink.guid}>
                    <h2>{drink.name}</h2>
                </div>
            ))}
        </div>
    )
}
