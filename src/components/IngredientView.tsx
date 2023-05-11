import React, { FC } from 'react'
import { Ingredient } from '../hooks/Ingredients'

interface IngredientViewProps {
    ingredient: Ingredient
}

const capitalizeWords = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase())

export const IngredientView: FC<IngredientViewProps> = ({ ingredient }) => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">{capitalizeWords(ingredient.name)}</h1>
            <img className="max-w-full h-auto object-contain mb-4" src={ingredient.imageUrl || ''}
                 alt={ingredient.name} />
            <p>{ingredient.description}</p>
        </div>
    )
}
