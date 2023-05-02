import React, { useMemo } from 'react'
import { getSession } from '../hooks/Auth'

export const UserBadge = () => {
    const username = useMemo(() => getSession()?.username, [])
    return <span>{username}</span>
}
