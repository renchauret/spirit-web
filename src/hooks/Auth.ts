import { HttpMethod, QueryResults, useFetch } from './Fetch'
import { useCallback, useEffect } from 'react'

interface SignInRequest {
    username: string
    password: string
}

enum Permissions {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GOD = 'GOD'
}

export interface Session {
    token: string,
    username: string,
    expirationTimeSeconds: number,
    permissions: Permissions
}

export interface SignInResults extends QueryResults {
    data: Session | null,
    signIn: (signInRequest: SignInRequest) => Promise<void>
}

export const useSignIn = (): SignInResults => {
    const { data, error, loading, fetchData } = useFetch('/auth', HttpMethod.PUT)
    const signIn = useCallback(async ({ username, password }: SignInRequest) => {
        await fetchData({
            username,
            password
        })
    }, [fetchData])

    useEffect(() => {
        if (data) {
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', data.username)
            localStorage.setItem('expirationTimeSeconds', data.expirationTimeSeconds.toString())
            localStorage.setItem('permissions', data.permissions)
        }
    }, [data])

    return { data: data, error, loading, signIn }
}

export const getSession = (): Session | null => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const expirationTimeSeconds = localStorage.getItem('expirationTimeSeconds')
    const permissions = localStorage.getItem('permissions')

    if (token && username && expirationTimeSeconds && permissions && parseInt(expirationTimeSeconds) > Date.now() / 1000) {
        return {
            token,
            username,
            expirationTimeSeconds: parseInt(expirationTimeSeconds),
            permissions: permissions as Permissions
        }
    }

    return null
}
