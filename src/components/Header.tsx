import React from 'react'
import { UserBadge } from './UserBadge'

export const Header = () => {
    return (
        <div className="flex flex-row my-2">
            <div className="basis-1/2 text-xl ml-5">
                <h1>
                    Spirit
                </h1>
            </div>
            <div className="basis-1/2 text-xl mr-5 text-right">
                <UserBadge />
            </div>
        </div>
    )
}
