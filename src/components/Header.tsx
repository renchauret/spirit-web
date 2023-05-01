import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-1/2"><h1>Spirit</h1></div>
            {/*<div className="basis-1/2 text-right"><Link to={'/signin'}>Sign In</Link></div>*/}
        </div>
    )
}
