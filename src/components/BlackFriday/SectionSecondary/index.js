import React from "react";
import * as S from "./style";

export default function SectionSecondary() {
  return (
    <S.SectionSecondary>
      <S.Image>
        <S.Title>Coleiras</S.Title>
        <img
          src="../coleira.png"
          alt="filhote da raça husky siberiano, da cor preto e branco, usando coleira preto com laranja"
        />{" "}
        <S.Promo>40% OFF</S.Promo>
      </S.Image>

      <S.Image>
        <S.Title>Peitorais</S.Title>
        <img
          src="../peitoral.png"
          alt="um cachorro da raça husky siberiano, da cor preto e branco, usando peitoral laranja"
        />{" "}
        <S.Promo>50% OFF</S.Promo>
      </S.Image>

      <S.Image>
        <S.Title>Lenços</S.Title>
        <img src="../lenco.png" alt="filhote da raça husky siberiano, da cor preto e branco, usando um lenço azul" />
        <S.Promo>60% OFF</S.Promo>
      </S.Image>
    </S.SectionSecondary>
  );
}
