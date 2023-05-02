import React from 'react'

interface GalleryImageProps {
    id: string
    imageUrl: string
    linkUrl: string
}

export const GalleryImage = ({ id, imageUrl, linkUrl }: GalleryImageProps) => {
    return (
        <span>
            <a href={linkUrl}>
                <img
                    className="mb-1 mr-1 w-1/5"
                    id={id}
                    alt={linkUrl}
                    src={imageUrl}
                />
            </a>
        </span>
    )
}
