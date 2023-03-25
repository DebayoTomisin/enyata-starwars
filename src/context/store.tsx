import React, { useState, useContext, useMemo } from "react";

const UserContext = React.createContext<any>({});
export const useStore = () => useContext(UserContext);

export function AppProvider({ children }: any) {
  const [email, setEmail] = useState("");

  const value = {
    email,
    updateEmail: setEmail,
  };

  return (
    <UserContext.Provider value={{ value }}>{children}</UserContext.Provider>
  );
}
