import React from 'react'
import { FullDrink, useGetDrink } from '../hooks/Drinks'
import { withRouter } from './WithRouter'

interface DrinkPageProps {
    drinkGuid: string
}

const DrinkPage = ({ drinkGuid }: DrinkPageProps) => {
    const { data: drink } = useGetDrink(drinkGuid)

    return <DrinkView drink={drink} />
}

export const RoutedDrinkPage = withRouter<any>(DrinkPage)

interface DrinkProps {
    drink: FullDrink
}

export const DrinkView = ({ drink }: DrinkProps) => {
    const { name, imagePath, ingredients, instructions, liked, tags, glass, ibaCategory } = drink ?? {}
    return (
        <div>
            <h1>{name}</h1>
            <img src={imagePath ?? 'assets/png'} alt={name} />
            {ingredients && ingredients.length > 0 && <ul>
                {ingredients.map(ingredient => <li>{ingredient.ingredientName}</li>)}
            </ul>}
            {instructions && instructions.length > 0 && <ol>
                {instructions.map(instruction => <li>{instruction}</li>)}
            </ol>}
            {liked && <p>Liked</p>}
            {tags && tags.length > 0 && <p>Tags: {tags.join(', ')}</p>}
            {glass && <p>Glass: {glass}</p>}
            {ibaCategory && <p>IBA Category: {ibaCategory}</p>}
        </div>
    )
}
