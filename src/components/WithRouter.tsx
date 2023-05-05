import React from 'react'
import { useParams } from 'react-router-dom'

export const withRouter = <T,>(WrappedComponent) => (props: T) => {
    const params = useParams()

    return (
        <WrappedComponent
            {...props}
            {...params}
        />
    )
}
