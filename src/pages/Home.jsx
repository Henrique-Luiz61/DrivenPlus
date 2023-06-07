import styled from "styled-components";
import plano3 from "../img/plano3.png";
import usuario from "../img/usuario.png";

export default function Home() {
  return (
    <SCContainerPage>
      <SCHeader>
        <SCImgPlano src={plano3} alt="plano 3" />
        <SCImgUsuario src={usuario} alt="usuario" />
      </SCHeader>

      <SCOlaFulano>Olá, Fulano</SCOlaFulano>

      <SCContainerBotoes>
        <button>Solicitar Brindes</button>
        <button>Materiais bônus de web</button>
        <button>Aulas bônus de tech</button>
        <button>Mentorias personalizadas</button>
      </SCContainerBotoes>

      <SCFooter>
        <SCBotaoMudarPlano>Mudar plano</SCBotaoMudarPlano>
        <SCBotaoCancelar>Cancelar plano</SCBotaoCancelar>
      </SCFooter>
    </SCContainerPage>
  );
}

const SCContainerPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SCHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;
const SCImgPlano = styled.img`
  width: 75px;
  height: 50px;
`;
const SCImgUsuario = styled.img`
  width: 32px;
  height: 32px;
`;

const SCOlaFulano = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const SCContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const SCFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SCBotaoMudarPlano = styled.button`
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
`;
const SCBotaoCancelar = styled.button`
  width: 300px;
  height: 52px;
  background: #ff4747;
  border-radius: 8px;
  border: none;
  margin-top: 15px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
