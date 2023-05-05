import { HttpMethod, QueryResults, useFetch } from './Fetch'
import { useEffect, useMemo } from 'react'

export interface Ingredient {
    guid: string,
    username: string,
    name: string,
    description: string | null,
    imageUrl: string | null,
    type: string | null,
    alcoholic: boolean | null,
    abv: number | null,
    liked: boolean
}

interface IngredientsResults extends QueryResults {
    data: Ingredient[] | null
}

interface IngredientResults extends QueryResults {
    data: Ingredient | null
}

export const useGetIngredients = (page: number = 1): IngredientsResults => {
    const { data, error, loading, fetchData } = useFetch('/admin/ingredient/all', HttpMethod.GET)
    useEffect(() => {
        fetchData()
    }, [fetchData, page])
    const slicedData = useMemo(() => data?.slice(0, page * 100), [data, page])
    return { data: slicedData, error, loading }
}

export const useGetIngredient = (guid: string): IngredientResults => {
    const { data, error, loading, fetchData } = useFetch('/admin/ingredient', HttpMethod.GET)
    useEffect(() => {
        fetchData(null, null, new Map<string, string>([['guid', guid]]))
    }, [fetchData, guid])
    return { data, error, loading }
}
