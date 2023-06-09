import styled from "styled-components";
import setaVoltar from "../img/setaVoltar.png";
import prancheta from "../img/prancheta.png";
import fecharX from "../img/fecharX.png";
import money from "../img/money.png";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import axios from "axios";

export default function SubscriptionIDPLANO() {
  const { idPlano } = useParams();
  const {
    infoUsuario,
    infoPlanoInd,
    setPlanoInd,
    displayModal,
    setDisModal,
    setAssinante,
    setAssPerks,
  } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [digitos, setDigitos] = useState("");
  const [codSeg, setCodSeg] = useState("");
  const [validade, setValidade] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`;

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resp) => {
      console.log(resp.data);
      setPlanoInd(resp.data);
    });
    promise.catch((erro) => {
      console.log(erro.data);
      alert(erro.response.data.message);
    });
  }, []);

  function assinar() {
    setDisModal("flex");
  }

  function confirmar(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

    const novaAssinatura = {
      membershipId: idPlano,
      cardName: nome,
      cardNumber: digitos,
      securityNumber: codSeg,
      expirationDate: validade,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.post(URL, novaAssinatura, config);

    promise.then((resp) => {
      console.log(resp.data);
      console.log("perks: ", resp.data.perks);
      setAssinante(resp.data);
      let novo = [];
      setAssPerks(novo);
      let novoArray = resp.data.perks;
      setAssPerks(novoArray);
      navigate("/home");
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      alert(erro.response.data.message);
    });
  }

  if (
    infoPlanoInd.perks === undefined ||
    infoPlanoInd.perks === null ||
    infoPlanoInd.perks === ""
  ) {
    return <div>Loading...</div>;
  }

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

      <SCContainerForm onSubmit={confirmar}>
        <input
          type="text"
          placeholder="Nome impresso no cartão"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digitos do cartão"
          required
          value={digitos}
          onChange={(e) => setDigitos(e.target.value)}
        />

        <SCDiv>
          <input
            type="number"
            placeholder="Código de segurança"
            required
            value={codSeg}
            onChange={(e) => setCodSeg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Validade"
            required
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
          />
        </SCDiv>

        <SCBotaoAssinar onClick={assinar} type="button">
          ASSINAR
        </SCBotaoAssinar>

        <SCContainerModal displayModal={displayModal}>
          <img onClick={() => setDisModal("none")} src={fecharX} alt="fechar" />
          <SCModal>
            <SCDescricao>
              <p>
                Tem certeza que deseja assinar o plano {infoPlanoInd.name} (R${" "}
                {infoPlanoInd.price})?
              </p>
            </SCDescricao>

            <SCDivBotoes>
              <SCBotaoNao onClick={() => setDisModal("none")}>Não</SCBotaoNao>
              <SCBotaoSim type="submit">Sim</SCBotaoSim>
            </SCDivBotoes>
          </SCModal>
        </SCContainerModal>
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
`;
const SCBotaoAssinar = styled.button`
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

const SCContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: ${(props) => props.displayModal};
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

const SCDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;

const SCDivBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SCBotaoNao = styled.button`
  width: 95px;
  height: 52px;
  left: 86px;
  top: 376px;
  background: #cecece;
  border-radius: 8px;
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
const SCBotaoSim = styled.button`
  width: 95px;
  height: 52px;
  left: 195px;
  top: 376px;
  background: #ff4791;
  border-radius: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
