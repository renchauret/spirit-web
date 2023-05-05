import React from 'react'

interface GalleryImageProps {
    id: string
    name: string | null
    imageUrl: string
    linkUrl: string
    invert: boolean
}

export const GalleryImage = ({ id, imageUrl, linkUrl, invert = false, name = null }: GalleryImageProps) => {
    return (
        <span>
            <a href={linkUrl}>
                {name &&
                    <div
                        className="pointer-events-none text-left ml-1 mt-1 z-20 absolute cursor-pointer py-1 px-2 rounded"
                        style={{ backgroundColor: 'var(--bg-color)' }}
                    >
                        {name}
                    </div>
                }
                <img
                    className={`pb-1 pr-1 rounded w-full ${invert && 'invert'}`}
                    id={id}
                    alt={linkUrl}
                    src={imageUrl}
                />
            </a>
        </span>
    )
}
