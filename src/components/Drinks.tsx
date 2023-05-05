import React, { useCallback, useMemo, useState } from 'react'
import { useGetDrinks } from '../hooks/Drinks'
import { GalleryImage } from './GalleryImage'
import { Waypoint } from 'react-waypoint'

export const Drinks = () => {
    const [page, setPage] = useState(1)
    const { data: drinks } = useGetDrinks(page)

    const handleScroll = useCallback(() => {
        setPage(page + 1)
    }, [page, setPage])

    const images = useMemo(() => {
            const imageList = (drinks && drinks.map(drink =>
                <GalleryImage id={drink.guid} imageUrl={drink.imagePath ?? 'assets/drink.png'} linkUrl="/"
                              invert={Boolean(!drink.imagePath)} name={drink.name} />
            )) || []
            if (imageList.length > 1) imageList.push(<Waypoint onEnter={handleScroll} />)
            return imageList
        },
        [drinks, handleScroll]
    )

    if (!images || images.length === 0) return <></>

    return (
        <div
            className="mx-auto my-4 text-center content-center md:w-4/5"
            id="gallery"
            onScroll={handleScroll}
        >
            <div className="grid my-0 mx-auto w-full list-none grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {images}
            </div>
        </div>
    )
}
