import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [infoUsuario, setInfo] = useState({});
  const [infoPlanos, setInfoPlanos] = useState([]);
  const [infoPlanoInd, setPlanoInd] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        infoUsuario,
        setInfo,
        infoPlanos,
        setInfoPlanos,
        infoPlanoInd,
        setPlanoInd,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
