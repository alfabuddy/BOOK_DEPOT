import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let initialAuthUser;

  try {
    const storedUser = localStorage.getItem("Users");
    initialAuthUser = storedUser ? JSON.parse(storedUser) : null; // ✅ Safely parse only if there's data
  } catch (error) {
    console.error("Error parsing auth user from localStorage:", error);
    initialAuthUser = null; // ✅ Fallback if parsing fails
  }

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
