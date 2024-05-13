import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../Authentication/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleAuthProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            console.log('Auth state change and currentUser is : ', createUser)
            setUser(createUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
        
    },[])

    // const createUser = (email, password) => {
    //     setLoader(true)
    //     return createUserWithEmailAndPassword(auth,email,password)
        
    // } 
    const createUser = (email, password, photoUrl, name) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Update user profile with photoUrl and name
          return updateProfile(userCredential.user, {
            displayName: name,
            photoURL: photoUrl,
          }).then(() => {
            return userCredential;
          });
        })
        .catch((error) => {
          throw error;
        });
    };


    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    
    const info = {
        user,loader,createUser,signIn,signInWithGoogle,logOut,setUser

    }
    
    return (
        <AuthContext.Provider value = {info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;