import React, { useState } from "react";
import * as S from "./style";

function SectionSecondary() {
  const [ email, setEmail ] = useState("");
  const [ mensagemConfirmacao, setMensagemConfirmacao ] = useState(false);
  const [ mensagemErro, setMensagemErro ] = useState(false);

  function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  }

  function handleEmail() {
    const emailValid = validEmail(email);
    setMensagemConfirmacao(emailValid);
    setMensagemErro(!emailValid);
    localStorage.setItem('email', email);
  }

  return (
    <S.SectionSecondary>
      <S.BoxImage className="imageBox">
        <img src="../logo-azul-claro.png" alt="logo" />
      </S.BoxImage>

      <S.BoxContent className="contentBox">
        <S.Title>SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS</S.Title>
        <S.SubTitle>Informe o seu melhor e-mail:</S.SubTitle>
        <S.BoxEmail>
          <input placeholder="malu@email.com" value={ email } onChange={(e) => setEmail(e.target.value)}></input>
          <button type="button" onClick={handleEmail}>Enviar</button>
        </S.BoxEmail>
        { mensagemConfirmacao ? <S.MensagemConfirmacao>E-mail registrado com sucesso!</S.MensagemConfirmacao> : " " }
        { mensagemErro ? <S.MensagemErro>Informe um e-mail válido</S.MensagemErro> : " " }
      </S.BoxContent>
    </S.SectionSecondary>
  );
}

export default SectionSecondary;