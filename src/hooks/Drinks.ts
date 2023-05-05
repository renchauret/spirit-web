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

export const useGetDrinks = (page: number = 1): DrinksResults => {
    const { data, error, loading, fetchData } = useFetch('/admin/drink/all', HttpMethod.GET)
    useEffect(() => {
        console.log(page)
        fetchData(null, null, new Map([['page', page.toString()]]))
    }, [fetchData, page])
    return { data: data, error, loading }
}
