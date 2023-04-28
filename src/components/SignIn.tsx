import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useSignIn } from '../hooks/Auth'

export const SignIn = () => {
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
            console.log(data)
        }
        if (error) {
            console.log(error)
        }
    }, [data, error])

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
