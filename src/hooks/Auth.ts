import { HttpMethod, QueryResults, useFetch } from './Fetch'

interface SignInRequest {
    username: string
    password: string
}

enum Permissions {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GOD = 'GOD'
}

interface SessionResponse {
    token: string,
    username: string,
    expirationTimeSeconds: number,
    permissions: Permissions
}

export interface SignInResults extends QueryResults {
    data: SessionResponse | null,
    signIn: (signInRequest: SignInRequest) => Promise<void>
}

export const useSignIn = (): SignInResults => {
    const { data, error, loading, fetchData } = useFetch('/auth', HttpMethod.PUT)
    const signIn = async ({ username, password }: SignInRequest) => {
        await fetchData({
            username,
            password
        })
    }

    return { data, error, loading, signIn }
}
