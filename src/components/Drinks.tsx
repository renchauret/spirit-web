import React, { useMemo, useState } from 'react'
import { useGetDrinks } from '../hooks/Drinks'
import { GalleryImage } from './GalleryImage'
import { Gallery } from './Gallery'

export const Drinks = () => {
    const [page, setPage] = useState(1)
    const { data: drinks } = useGetDrinks(page)

    const images = useMemo(() =>
            (drinks && drinks.map(drink =>
                <GalleryImage id={drink.guid} imageUrl={drink.imagePath ?? 'assets/drink.png'} linkUrl="/"
                              invert={Boolean(!drink.imagePath)} name={drink.name} />
            )) || [],
        [drinks]
    )

    return <Gallery images={images} page={page} setPage={setPage} />
}
