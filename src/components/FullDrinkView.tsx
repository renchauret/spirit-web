import React, { FC } from 'react'
import { FullDrink } from '../hooks/Drinks'
import { Link } from 'react-router-dom'
import { capitalizeWords } from '../util/strings'

interface FullDrinkViewProps {
    drink: FullDrink
}

export const FullDrinkView: FC<FullDrinkViewProps> = ({ drink }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{capitalizeWords(drink.name)}</h1>
                <span style={{ fontSize: '2rem', color: drink.liked ? 'var(--accent-color)' : 'inherit' }}>★</span>
            </div>
            <img className="max-w-full h-auto object-contain mb-4" style={{ 'width': '500px' }}
                 src={drink.imageUrl || ''} alt={drink.name} />
            <p>{drink.description}</p>
            <h2 className="text-lg font-bold mt-4">Ingredients:</h2>
            <ul>
                {drink.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                        {ingredient.imageUrl &&
                            <Link to={`/ingredient/${ingredient.ingredientGuid}`}>
                                <img className="w-16 h-16 object-cover mr-2" src={ingredient.imageUrl} alt={ingredient.ingredientName} />
                            </Link>}
                        <Link to={`/ingredient/${ingredient.ingredientGuid}`}>
                            <p>{`${ingredient.amount ? ingredient.amount + ' ' : ''}${ingredient.unit ? ingredient.unit + ' ' : ''}${capitalizeWords(ingredient.ingredientName)}`}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <h2 className="text-lg font-bold mt-4">Instructions:</h2>
            <ol>
                {drink.instructions.map((instruction, index) => (
                    <li key={index}>
                        <p>{`${index + 1}. ${instruction}`}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}
