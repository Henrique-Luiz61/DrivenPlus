import styled from "styled-components";
import setaVoltar from "../img/setaVoltar.png";
import plano1 from "../img/plano1.png";
import prancheta from "../img/prancheta.png";
import money from "../img/money.png";
import Confirmar from "./components/Confirmar";
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import axios from "axios";

export default function SubscriptionIDPLANO() {
  const { idPlano } = useParams();
  const { infoUsuario, infoPlanoInd, setPlanoInd } = useContext(AuthContext);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`;

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resp) => {
      setPlanoInd(resp.data);
      console.log("plano id: ", resp.data);
    });
    promise.catch((erro) => {
      alert(erro.response.data.message);
    });
  }, []);

  return (
    <SCContainerPage>
      <SCDivVoltar>
        <Link to={"/subscriptions"}>
          <img src={setaVoltar} alt="voltar a página" />
        </Link>
      </SCDivVoltar>

      <SCPlano>
        <img src={infoPlanoInd.image} alt="logo do plano" />
        <h1>{infoPlanoInd.name}</h1>
      </SCPlano>

      <SCInfoPlano>
        <SCTituloBeneficios>
          <img src={prancheta} alt="benefícios" />
          <p>Benefícios:</p>
        </SCTituloBeneficios>

        <div>
          {infoPlanoInd.perks.map((p, i) => (
            <p key={p.id}>
              {i + 1}. {p.title}
            </p>
          ))}
        </div>

        <SCTituloPreco>
          <img src={money} alt="money" />
          <p>Preco:</p>
        </SCTituloPreco>
        <p>R${infoPlanoInd.price} cobrados mensalmente</p>
      </SCInfoPlano>

      {/*<Confirmar />*/}

      <SCContainerForm>
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="number" placeholder="Digitos do cartão" />

        <SCDiv>
          <input type="number" placeholder="Código de segurança" />
          <input type="text" placeholder="Validade" />
        </SCDiv>

        <button>ASSINAR</button>
      </SCContainerForm>
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

const SCDivVoltar = styled.div`
  width: 88%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SCPlano = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 140px;
    height: 95px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
  }
`;

const SCInfoPlano = styled.div`
  width: 80%;
  height: 16%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;

const SCTituloBeneficios = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

const SCTituloPreco = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

const SCContainerForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const SCDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 145px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
  }
`;
