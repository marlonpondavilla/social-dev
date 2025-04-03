"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import Cookies from "js-cookie";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from "firebase/auth";

// Define the shape of user data
interface UserData {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
}

interface AuthContextType {
  user: FirebaseUser | null;
  userData: UserData | null; 
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null); 
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        Cookies.set("token", token, { expires: 7 });

        setUser(firebaseUser);

        const userObj: UserData = {
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid,
        };
        
        setUserData(userObj); 
      } else {
        setUser(null);
        setUserData(null);
        Cookies.remove("token");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account"
    })
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;

    if (firebaseUser && firebaseUser.uid) {
      const token = await firebaseUser.getIdToken(true);
      Cookies.set("token", token, { expires: 7 });

      setUser(firebaseUser);

      const userObj: UserData = {
        displayName: firebaseUser.displayName,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
        uid: firebaseUser.uid,
      };

      setUserData(userObj); 
      router.push("/home");
    }
  };

  const logout = async () => {
    await auth.signOut();
    Cookies.remove("token");
    setUser(null);
    setUserData(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, userData: userData, signInWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
