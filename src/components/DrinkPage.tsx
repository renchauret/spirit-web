import React from 'react'
import { useGetDrink } from '../hooks/Drinks'
import { withRouter } from './WithRouter'
import { FullDrinkView } from './FullDrinkView'

interface DrinkPageProps {
    drinkGuid: string
}

const DrinkPage = ({ drinkGuid }: DrinkPageProps) => {
    const { data: drink } = useGetDrink(drinkGuid)

    if (!drink) {
        return <div>Loading...</div>
    }

    return <FullDrinkView drink={drink} />
}

export const RoutedDrinkPage = withRouter<any>(DrinkPage)
