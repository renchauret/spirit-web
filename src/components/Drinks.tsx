import React, { useMemo } from 'react'
import { useGetDrinks } from '../hooks/Drinks'
import { MasonryComponent } from './Masonry'
import { GalleryImage } from './GalleryImage'

export const Drinks = () => {
    const { data: drinks } = useGetDrinks()
    const images = useMemo(() =>
            (drinks && drinks.map(drink =>
                <GalleryImage id={drink.guid} imageUrl={drink.imagePath ?? 'assets/drink.png'} linkUrl="/"
                              invert={Boolean(!drink.imagePath)} name={drink.name} />
            )) || [],
        [drinks]
    )

    if (!images || images.length === 0) return <></>

    return (
        <div
            className="mx-auto my-4 text-center content-center md:w-4/5"
            id="gallery"
        >
            <MasonryComponent
                className="grid my-0 mx-auto w-full list-none grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                elementType="div"
            >
                {images}
            </MasonryComponent>
        </div>
    )
}
