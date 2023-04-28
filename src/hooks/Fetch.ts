import { useReducer, useRef } from 'react'

enum HttpStatus {
    DONE,
    LOADING,
    ERROR,
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

export interface QueryResults {
    loading: boolean,
    data: any,
    error: any
}

export interface Query extends QueryResults {
    fetchData: (body?: any) => Promise<void>
}

export const useFetch = (path: string, method: HttpMethod = HttpMethod.GET): Query => {
    const baseUrl = window.location.port !== '' ?
        `${window.location.protocol}//${window.location.hostname}:${Number(window.location.port) + 1}` :
        window.location.origin
    const url = `${baseUrl}${path}`

    const initialState = {
        loading: false,
        error: null,
        data: null,
    }

    const [state, dispatch] = useReducer((state, action: { type: HttpStatus, payload: any }) => {
        switch (action.type) {
            case HttpStatus.LOADING:
                return { ...initialState, loading: true }
            case HttpStatus.DONE:
                return { ...initialState, data: action.payload }
            case HttpStatus.ERROR:
                return { ...initialState, error: action.payload }
            default:
                return state
        }
    }, initialState)
    const cache = useRef({})

    const fetchData = async (body: any = null) => {
        dispatch({ type: HttpStatus.LOADING, payload: null })
        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        if (cache.current[url]) {
            const data = cache.current[url]
            dispatch({ type: HttpStatus.DONE, payload: data })
        } else {
            try {
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                cache.current[url] = data
                dispatch({ type: HttpStatus.DONE, payload: data })
            } catch (error: any) {
                dispatch({ type: HttpStatus.ERROR, payload: error.message })
            }
        }
    }

    return { ...state, fetchData }
}
