import React from "react";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { updatePassword } from "firebase/auth";

const AuthContext = React.createContext({});
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [islogin, setisLogin] = useState();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const passUp = (password) => {
    return updatePassword(currentUser, password);
  };
  const passReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      const isLoginUser = !!user;
      setisLogin(isLoginUser);
      setLoading(false);
      setisLogin(isLoginUser);
    });
    console.log(currentUser);
    // const isLoginUser=!currentUser;
    // setisLogin(isLoginUser);
    return unsubscribe;
  });
  console.log(islogin);
  const contextValue = {
    currentUser,
    signUp,
    logIn,
    logOut,
    islogin,
    passReset,
    passUp,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
