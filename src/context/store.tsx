import React, { useState, useContext } from "react";

const UserContext = React.createContext<any>({});
export const useStore = () => useContext(UserContext);

export function AppProvider({ children }: any) {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}
