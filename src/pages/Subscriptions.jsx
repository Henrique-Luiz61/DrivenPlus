import { useEffect } from "react";
import styled from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Subscriptions() {
  const { infoUsuario, infoPlanos, setInfoPlanos } = useContext(AuthContext);

  useEffect(() => {
    const URL =
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resp) => {
      console.log(resp.data);
      setInfoPlanos(resp.data);
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      alert(erro.data.response.data.message);
    });
  }, []);

  return (
    <SCContainerPage>
      <SCEscolhaPlano>Escolha seu Plano</SCEscolhaPlano>

      <SCContainerPlanos>
        {infoPlanos.map((p) => (
          <Link key={p.id} to={`/subscription/${p.id}`}>
            <SCPlano>
              <img src={p.image} alt="imagem drivenPlus" />
              <h2>R$ {p.price}</h2>
            </SCPlano>
          </Link>
        ))}
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
