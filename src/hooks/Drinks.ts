import { HttpMethod, QueryResults, useFetch } from './Fetch'
import { useEffect } from 'react'

interface DrinkIngredient {
    ingredientGuid: string,
    amount: number,
    unit: string | null
}

interface Drink {
    guid: string,
    username: string,
    name: string,
    ingredients: DrinkIngredient[],
    instructions: string[],
    tags: string[],
    imagePath: string | null,
    glass: string | null,
    ibaCategory: string | null,
    liked: boolean
}

interface DrinksResults extends QueryResults {
    data: Drink[] | null
}

export const useGetDrinks = (): DrinksResults => {
    const { data, error, loading, fetchData } = useFetch('/user/drink/all', HttpMethod.GET)
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return { data: data, error, loading }
}
