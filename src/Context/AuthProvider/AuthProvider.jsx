import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from '../Firebase/Firebas.confi';
export const UserContext = createContext(null)
// const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=  useState(null);
    const [loading,setLoaging] = useState(true);
    // const createUser = (email,password)=>{
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }
    // const signIn = (email,password)=>{
    //     return signInWithEmailAndPassword(auth,email,password)
    // }
    // const googleSignIn = ()=>{
    //    return signInWithPopup(auth)
    // }
    // const logOut = ()=>{
    //     return signOut(auth)
    // }
    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
    //         setUser(loggedUser)
    //         setLoaging(false)
    //     })
    //     return()=>{
    //         return unsubscribe()
    //     }
    // },[])
    const authInfo = {
        user,
        // createUser,
        // signIn,
        // logOut,
        // googleSignIn,
        // loading
    }
    return (
        <UserContext.Provider value={authInfo }>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;