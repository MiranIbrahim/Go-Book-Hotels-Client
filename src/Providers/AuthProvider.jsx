import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password, photoURL);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const googleLogin = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observed");
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const appInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateNameAndPhoto,
    googleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={appInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
