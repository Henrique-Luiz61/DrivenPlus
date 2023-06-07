import styled from "styled-components";
import logo from "../img/logoDrivenPlus.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <SCContainerPage>
      <SCContainerLogin>
        <SCDivLogo>
          <img src={logo} alt="logo drivenplus" />
        </SCDivLogo>

        <SCFormContainer>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />

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
