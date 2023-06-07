import styled from "styled-components";
import fecharX from "../../img/fecharX.png";

export default function Confirmar() {
  return (
    <SCContainerPage>
      <img src={fecharX} alt="fechar" />
      <SCModal>
        <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>

        <SCDivBotoes>
          <button>Não</button>
          <button>Sim</button>
        </SCDivBotoes>
      </SCModal>
    </SCContainerPage>
  );
}

const SCContainerPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    position: absolute;
    right: 10px;
    top: 20px;
  }
`;

const SCModal = styled.div`
  position: absolute;
  left: 64px;
  top: 230px;
  width: 248px;
  height: 210px;
  background: #ffffff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SCDivBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
