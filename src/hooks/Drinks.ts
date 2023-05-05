import { HttpMethod, QueryResults, useFetch } from './Fetch'
import { useEffect, useMemo } from 'react'

interface DrinkIngredient {
    ingredientGuid: string,
    amount: number,
    unit: string | null
}

interface FullDrinkIngredient extends DrinkIngredient {
    ingredientName: string,
    imagePath: string | null,
    type: string | null,
    liked: boolean
}

export interface Drink {
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

export interface FullDrink extends Drink {
    ingredients: FullDrinkIngredient[]
}

interface DrinksResults extends QueryResults {
    data: Drink[] | null
}

interface DrinkResult extends QueryResults {
    data: FullDrink
}

export const useGetDrinks = (page: number = 1): DrinksResults => {
    const { data, error, loading, fetchData } = useFetch('/admin/drink/all', HttpMethod.GET)
    useEffect(() => {
        fetchData()
    }, [fetchData, page])
    const slicedData = useMemo(() => data?.slice(0, page * 100), [data, page])
    return { data: slicedData, error, loading }
}

export const useGetDrink = (guid: string): DrinkResult => {
    const { data, error, loading, fetchData } = useFetch('/admin/drink', HttpMethod.GET)
    useEffect(() => {
        fetchData(null, null, new Map<string, string>([['guid', guid]]))
    }, [fetchData, guid])
    return { data, error, loading }
}
