"use client"; 

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "@/lib/firebaseConfig";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";

// Define the shape of your context
interface AuthContextType {
  user: FirebaseUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

// Create context with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setLoading(false);
      
      if(firebaseUser){
        setUser(user);
        Cookies.set("userId", firebaseUser.uid, {expires: 7})
      } else{
        setUser(null);
        Cookies.remove("userId")
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
    Cookies.remove("userId")
    setUser(null);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async (): Promise<void> => {
    

    try{
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      if(firebaseUser && firebaseUser.uid){
        Cookies.set("userId", firebaseUser.uid, {expires: 7})
        setUser(firebaseUser);
        router.push("/home")
      } else{
        router.push("/login")
      }
    } catch(error){
      console.error("sign in with google failed", error)
      alert("sign in with google failed")
    } finally{
      setLoading(false)
    }

  };

  const value: AuthContextType = { user, login, signup, logout, signInWithGoogle };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
