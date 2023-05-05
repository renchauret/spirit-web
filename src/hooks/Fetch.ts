import { useCallback, useReducer, useRef } from 'react'
import { getSession } from './Auth'

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
    fetchData: (body?: any, headers?: Map<string, string> | null, queryParams?: Map<string, string> | null) => Promise<void>
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

    const fetchData = useCallback(async (
        body: any = null,
        headers: Map<string, string> | null = null,
        queryParams: Map<string, string> | null = null
    ) => {
        dispatch({ type: HttpStatus.LOADING, payload: null })
        const session = getSession()
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': session?.token,
                ...Object.fromEntries(headers ?? new Map())
            },
            body: body ? JSON.stringify(body) : undefined
        }
        console.log(requestOptions)
        const urlWithParams = `${url}${queryParams ? '?' + new URLSearchParams(Object.fromEntries(queryParams)).toString() : ''}`
        if (cache.current[urlWithParams]) {
            const data = cache.current[urlWithParams]
            dispatch({ type: HttpStatus.DONE, payload: data })
        } else {
            try {
                const response = await fetch(urlWithParams, requestOptions)
                const data = await response.json()
                cache.current[urlWithParams] = data
                dispatch({ type: HttpStatus.DONE, payload: data })
            } catch (error: any) {
                dispatch({ type: HttpStatus.ERROR, payload: error.message })
            }
        }
    }, [method, url])

    return { ...state, fetchData }
}
