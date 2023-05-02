import React, { useMemo } from 'react'
import { useGetDrinks } from '../hooks/Drinks'
import { MasonryComponent } from './Masonry'
import { GalleryImage } from './GalleryImage'

export const Drinks = () => {
    const { data: drinks } = useGetDrinks()
    const images = useMemo(() =>
            (drinks && drinks.map(drink =>
                <GalleryImage id={drink.guid} imageUrl={drink.imagePath ?? 'assets/drink.png'} linkUrl="/"
                              invert={Boolean(!drink.imagePath)} />
            )) || [],
        [drinks]
    )

    if (!drinks) return <></>

    return (
        <div
            className="mx-auto my-4 text-center content-center w-4/5"
            id="gallery"
            // ref={element => {
            //     this.galleryElement = element
            // }}
            // onScroll={this.handleScroll}
        >
            <MasonryComponent
                className={'grid-cols-5 grid my-0 mx-auto w-full list-none'}
                elementType={'div'} // default 'div'
                // options={} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                // imagesLoadedOptions={} // default {}
            >
                {images}
            </MasonryComponent>
        </div>
    )
}
