import React, { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import { collection, query, where } from "firebase/firestore";

export const AuthContext = createContext();

const AppContext = ({ children })=> {

    const collectRef = collection(db, "users");

    const provider = new GoogleAuthProvider();

    const [ user, setUser] = useState(null);

    const [userData, setUserData] = useState();

    const signInWithGoogle = async ()=> {
        try{
            const popResult = await signInWithPopup(auth, provider);
            const user = popResult.user;
            const q = query(collectRef, where("uid", "==", user.uid));
            setUser(user);
            console.log("popup", popResult);
        } catch(error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const initialState = {
        user: user,
        signInWithGoogle: signInWithGoogle,
    };


    return (
        // 
        <AppContext.Provider value='{initialState}'>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;