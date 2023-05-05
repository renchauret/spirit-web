import React from 'react'
import { withRouter } from './WithRouter'
import { Ingredient, useGetIngredient } from '../hooks/Ingredients'

interface IngredientPageProps {
    ingredientGuid: string
}

const DrinkPage = ({ ingredientGuid }: IngredientPageProps) => {
    const { data: ingredient } = useGetIngredient(ingredientGuid)

    return <IngredientView ingredient={ingredient} />
}

export const RoutedIngredientPage = withRouter<any>(DrinkPage)

interface IngredientProps {
    ingredient: Ingredient | null
}

export const IngredientView = ({ ingredient }: IngredientProps) => {
    const { name, imageUrl, liked, type, alcoholic, abv, description } = ingredient ?? {}
    return (
        <div>
            <h1>{name}</h1>
            {imageUrl && <img src={imageUrl} alt={name} />}
            {description && <p>Description: {description}</p>}
            {liked && <p>Liked</p>}
            {type && <p>Type: {type}</p>}
            {alcoholic && <p>Alcoholic: {alcoholic}</p>}
            {abv && <p>ABV: {abv}</p>}
        </div>
    )
}
