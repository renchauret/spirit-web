import React, { FC } from 'react'
import { Ingredient } from '../hooks/Ingredients'
import { capitalizeWords } from '../util/strings'

interface IngredientViewProps {
    ingredient: Ingredient
}

export const IngredientView: FC<IngredientViewProps> = ({ ingredient }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">{capitalizeWords(ingredient.name)}</h1>
                    {ingredient.type && ingredient.type !== ingredient.name &&
                        <h2 className="text-lg">{capitalizeWords(ingredient.type)}</h2>
                    }
                </div>
                <span style={{ fontSize: '2rem', color: ingredient.liked ? 'var(--accent-color)' : 'inherit' }}>★</span>
            </div>
            <div className="flex items-center mb-4">
                {ingredient.alcoholic && ingredient.abv ? <p>ABV: {ingredient.abv}%</p> :
                    <p className="mr-2">Alcoholic</p>
                }
            </div>
            <img className="max-w-full h-auto object-contain mb-4" src={ingredient.imageUrl || ''}
                 style={{ 'width': '500px' }}
                 alt={ingredient.name} />
            <p>{ingredient.description}</p>
        </div>
    )
}
