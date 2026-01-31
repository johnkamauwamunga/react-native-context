// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";

// 🧑 Fake database
const usersDB = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "123456" },
  {
    id: 2,
    name: "Grace Ngure",
    email: "grace@example.com",
    password: "654321",
  },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const found = usersDB.find(
      (u) => u.email === email && u.password === password,
    );

    if (found) {
      setUser(found);
      return { success: true, user: found };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
