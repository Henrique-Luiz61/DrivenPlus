<SCContainerPageModal displayModal={displayModal}>
  <img onClick={() => setDisModal("none")} src={fecharX} alt="fechar" />
  <SCModal>
    <SCDescricao>
      <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
    </SCDescricao>

    <SCDivBotoes>
      <SCBotaoNao onClick={() => setDisModal("none")}>Não</SCBotaoNao>
      <SCBotaoSim onClick={() => setConfirmarAss(true)}>Sim</SCBotaoSim>
    </SCDivBotoes>
  </SCModal>
</SCContainerPageModal>;

