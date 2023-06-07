import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <SCContainerPage>
      <SCContainerSignUp>
        <SCFormContainer>
          <input type="text" placeholder="Nome" required />
          <input type="number" placeholder="CPF" required />
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />

          <button type="submit">CADASTRAR</button>
        </SCFormContainer>

        <Link to="/">
          <SCFacaLogin>Já possuí uma conta? Entre</SCFacaLogin>
        </Link>
      </SCContainerSignUp>
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

const SCContainerSignUp = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SCFormContainer = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 300px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
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

const SCFacaLogin = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #e5e5e5;
  margin-top: 15px;
`;
