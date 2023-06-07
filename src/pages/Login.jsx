import styled from "styled-components";
import logo from "../img/logoDrivenPlus.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setInfo } = useContext(AuthContext);

  function fazerLogin(e) {
    e.preventDefault();

    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";

    const objLogin = {
      email: email,
      password: password,
    };

    const promise = axios.post(URL, objLogin);

    promise.then((resp) => {
      console.log(resp.data);
      setInfo(resp.data);
      navigate("/subscriptions");
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      alert(erro.response.data.message);
    });
  }

  return (
    <SCContainerPage>
      <SCContainerLogin>
        <SCDivLogo>
          <img src={logo} alt="logo drivenplus" />
        </SCDivLogo>

        <SCFormContainer onSubmit={fazerLogin}>
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">ENTRAR</button>
        </SCFormContainer>

        <Link to="/sign-up">
          <SCCadastreSe>Não possuí uma conta? Cadastre-se</SCCadastreSe>
        </Link>
      </SCContainerLogin>
    </SCContainerPage>
  );
}

const SCContainerPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SCContainerLogin = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SCDivLogo = styled.div`
  margin-bottom: 70px;

  img {
    width: 300px;
    height: 50px;
  }
`;

const SCFormContainer = styled.form`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 300px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  button {
    width: 300px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    border: none;
    margin-top: 15px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;

const SCCadastreSe = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #e5e5e5;
  margin-top: 15px;
`;
