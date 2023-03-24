import React, { useState, useContext, useMemo } from "react";

const UserContext = React.createContext<any>({});
export const useStore = () => useContext(UserContext);

export function AppProvider({ children }: any) {
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}
