// import React, {  createContext, useEffect, useState } from 'react'
// import app from '../firebase/firebase.config';
// import { AuthContext } from '../contexts/AuthProvider';


// import { createUserWithEmailAndPassword,getAuth,  GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

// const AuthContext = createContext();
// const auth =getAuth(app);
// const googleprovider = new GoogleAuthProvider();


// const AuthProvider = ({children}) => {
//    const [user,setUser] = useState(null);
//    const[loading, setLoading]=useState(true);
   
//    const createUser =(email,password)=>{
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//    }

//      const loginwithGoogle =()=>{
//       setLoading(true);
//       return signInWithPopup(auth, googleprovider)
//      }
//   const login =(email,password)=>{
//     setLoading(true);
//     return signInWithEmailAndPassword(auth,email,password)
//   }
//    const logout = () =>{
//     return signOut(auth)
//    }
//   useEffect(()=>{
//       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
//         // console.log(currentUser)
//         setUser(currentUser)
//         setLoading(false);
//       });
//       return ()=>{
//         return unsubscribe();
//       }
//   },[])
    
//    const authInfo ={
//     user,
//     createUser,
//     loginwithGoogle,
//     loading,
//     login,
//     logout
//    }
//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export { AuthContext };
// export default AuthProvider  ;





import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { 
  createUserWithEmailAndPassword,
  getAuth,  
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
   
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
    
  const authInfo = {
    user,
    createUser,
    loginWithGoogle,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
