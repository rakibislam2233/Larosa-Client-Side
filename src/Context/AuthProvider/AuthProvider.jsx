import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Utils/Firebase/Firebase.config';
const auth = getAuth(app);
export const UserContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=  useState(null);
    const [loading,setLoading] = useState(true);
    const Googleprovider = new GoogleAuthProvider();
    const GitHubprovider = new GithubAuthProvider();
    /**This is a create user function  */
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
     /**This is a login function  */
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
     /**This is a google singin in  function  */
    const googleSignIn = ()=>{
        setLoading(true);
       return signInWithPopup(auth,Googleprovider)
    }
    /**This is a github singin in  function  */
    const githubSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,GitHubprovider)
    }

     /**This is a logout function  */
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            setLoading(false)
            setUser(loggedUser)
        })
        return()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn,
        loading
    }
    return (
        <UserContext.Provider value={authInfo }>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;