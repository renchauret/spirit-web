import React, { useEffect, useRef, useState } from 'react'
import ReactModal from 'react-modal'
import { SignIn } from './SignIn'
import { getSession, Session } from '../hooks/Auth'

export const SignInPrompt = () => {
    const [session, setSession] = useState<Session | null>(getSession())
    // regularly check if session has expired
    useInterval(() => setSession(getSession()), 10000)

    return (
        <div>
            <ReactModal isOpen={!session} ariaHideApp={false}>
                <SignIn setSession={(session: Session) => setSession(session)} />
            </ReactModal>
        </div>
    )
}

const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback)

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}