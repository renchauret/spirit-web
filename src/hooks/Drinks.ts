import { HttpMethod, QueryResults, useFetch } from './Fetch'
import { useEffect, useMemo } from 'react'

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

export const useGetDrinks = (page: number = 1): DrinksResults => {
    const { data, error, loading, fetchData } = useFetch('/admin/drink/all', HttpMethod.GET)
    useEffect(() => {
        fetchData()
    }, [fetchData, page])
    const slicedData = useMemo(() => data?.slice(0, page * 100), [data, page])
    return { data: slicedData, error, loading }
}
