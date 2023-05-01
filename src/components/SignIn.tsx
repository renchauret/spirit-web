import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Session, useSignIn } from '../hooks/Auth'

interface SignInProps {
    setSession: (session: Session) => void
}

export const SignIn = ({ setSession }: SignInProps) => {
    const { data, loading, error, signIn } = useSignIn()
    const signInForm = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async values => {
            signIn(values)
        }
    })
    useEffect(() => {
        if (data) {
            setSession(data)
        }
        if (error) {
            console.error(error)
        }
    }, [data, error, setSession])

    return (
        <div className="SignIn">
            <form onSubmit={signInForm.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={signInForm.handleChange}
                    value={signInForm.values.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={signInForm.handleChange}
                    value={signInForm.values.password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
