import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, 
onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, 
signOut} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //create user using email
    const signUpWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //login
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut =() => {
        return signOut(auth)
    }

    //user available or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
       user,
       loading,
       createUser,
       login,
       logOut,
       signUpWithGmail
       
    }

  return (
   <AuthContext.Provider value = {authInfo}>
        {children}
    </AuthContext.Provider>
    
  )
}

export default AuthProvider
