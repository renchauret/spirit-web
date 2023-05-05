import React, { useMemo, useState } from 'react'
import { GalleryImage } from './GalleryImage'
import { Gallery } from './Gallery'
import { useGetIngredients } from '../hooks/Ingredients'

export const IngredientGallery = () => {
    const [page, setPage] = useState(1)
    const { data: ingredients } = useGetIngredients(page)

    const images = useMemo(() =>
            (ingredients && ingredients.map(ingredient =>
                <GalleryImage id={ingredient.guid} imageUrl={ingredient.imageUrl ?? 'assets/drink.png'}
                              linkUrl={`/ingredient/${ingredient.guid}`}
                              invert={Boolean(!ingredient.imageUrl)} name={ingredient.name} />
            )) || [],
        [ingredients]
    )

    return <Gallery images={images} page={page} setPage={setPage} />
}
