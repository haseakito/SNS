import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'

export function Auth() {

    // State handling if the user logged in or not
    const [user] = useAuthState(auth)

    // Function handling signing in with google account
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

  return { user, signInWithGoogle }
}
