import React from 'react'

interface GalleryImageProps {
    id: string
    imageUrl: string
    linkUrl: string
    invert: boolean
}

export const GalleryImage = ({ id, imageUrl, linkUrl, invert = false }: GalleryImageProps) => {
    return (
        <span>
            {/*className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">*/}
            <a href={linkUrl}>
                <img
                    className={`mb-1 mr-1 w-full ${invert && 'invert'}`}
                    id={id}
                    alt={linkUrl}
                    src={imageUrl}
                />
            </a>
        </span>
    )
}
