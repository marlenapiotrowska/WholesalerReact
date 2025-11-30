import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
   const defaultUser = {
    isLoggedIn: false,
    role: "",
    name: ""
  };

  const [user, setUser] = useState(defaultUser);

  const login = (userData) => {
    setUser({
      isLoggedIn: true,
      role: userData.role,
      name: userData.name
    });
  };


  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
