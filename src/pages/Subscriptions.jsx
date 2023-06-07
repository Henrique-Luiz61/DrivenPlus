import plano1 from "../img/plano1.png";
import plano2 from "../img/plano2.png";
import plano3 from "../img/plano3.png";
import styled from "styled-components";

export default function Subscriptions() {
  return (
    <SCContainerPage>
      <SCEscolhaPlano>Escolha seu Plano</SCEscolhaPlano>

      <SCContainerPlanos>
        <SCPlano>
          <img src={plano1} alt="plano 1" />
          <h2>R$ 39,99</h2>
        </SCPlano>
        <SCPlano>
          <img src={plano2} alt="plano 2" />
          <h2>R$ 69,99</h2>
        </SCPlano>
        <SCPlano>
          <img src={plano3} alt="plano 3" />
          <h2>R$ 99,99</h2>
        </SCPlano>
      </SCContainerPlanos>
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

const SCEscolhaPlano = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

const SCContainerPlanos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 85%;

  img {
    width: 140px;
    height: 95px;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;

const SCPlano = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
`;
