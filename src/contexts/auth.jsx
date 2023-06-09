import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [infoUsuario, setInfo] = useState({});
  const [infoPlanos, setInfoPlanos] = useState([]);
  const [infoPlanoInd, setPlanoInd] = useState({});
  const [displayModal, setDisModal] = useState("none");
  const [infoAssinante, setAssinante] = useState({});
  const [infoAssPerks, setAssPerks] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        infoUsuario,
        setInfo,
        infoPlanos,
        setInfoPlanos,
        infoPlanoInd,
        setPlanoInd,
        displayModal,
        setDisModal,
        infoAssinante,
        setAssinante,
        infoAssPerks,
        setAssPerks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
