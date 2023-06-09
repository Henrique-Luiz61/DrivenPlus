import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./css/ResetStyle";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home";
import SubscriptionIDPLANO from "./pages/SubscriptionIDPLANO";
import AuthProvider from "./contexts/auth";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #0e0e13;
  }
`;

function App() {
  axios.defaults.headers.common["Authorization"] = "3oPD8DWbkC2ysAsbZJJEfSYf";

  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="subscriptions/:idPlano"
            element={<SubscriptionIDPLANO />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
