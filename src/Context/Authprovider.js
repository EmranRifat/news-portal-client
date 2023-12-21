import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth,GithubAuthProvider,GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut,} from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const authContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();


const Authprovider = ({ children }) => {
  
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

console.log(user)

  const signInWithGoogle = () => {
    setLoading(true)
  return  signInWithPopup(auth, provider);
  
  };
 

  const createUser=(email,password)=>{
    setLoading(true)
   return  createUserWithEmailAndPassword(auth,email,password)
  };

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  };

const githubSignIn=()=>{
  setLoading(true)
 return  signInWithPopup(auth,gitprovider)

} 

  

 
  const logOut=()=>{
    setLoading(true)
  return signOut(auth);
  }

 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside authstate change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{unsubscribe();
    }
  }, []);








  const authInfo = {user,loading, signInWithGoogle,logOut ,createUser,signIn,githubSignIn};

  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  );
};

export default Authprovider;
