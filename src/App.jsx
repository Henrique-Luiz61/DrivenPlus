import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./css/ResetStyle";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #0e0e13;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
