import React, { useCallback, useMemo } from 'react'
import { Waypoint } from 'react-waypoint'

interface GalleryProps {
    images: JSX.Element[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Gallery = ({ images, page, setPage }: GalleryProps) => {
    const handleScroll = useCallback(() => {
        setPage(page + 1)
    }, [page, setPage])

    const finalImages = useMemo(() => {
            return (images.length > 1) ? [...images, <Waypoint onEnter={handleScroll} />] : images
        },
        [images, handleScroll]
    )

    if (!finalImages || finalImages.length === 0) return <></>

    return (
        <div
            className="mx-auto my-4 text-center content-center"
            id="gallery"
            onScroll={handleScroll}
        >
            <div className="grid my-0 mx-auto w-full list-none grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {finalImages}
            </div>
        </div>
    )
}
