import React from "react";
import * as S from "./style";

export default function SectionDescription() {
  return (
    <S.SectionDescription>
      <S.Box className="imageBox">
        <a href="https://www.instagram.com/p/CQCUuGohpcN/" target="_blank" rel="noreferrer"><img src="../ronda-azul.png" alt="husky" /> </a>
      </S.Box>

      <S.Box className="descriptionBox">
        <S.Promo>70% OFF</S.Promo>
        <S.Description>no terceiro item do pedido</S.Description>
        <S.Promo>FRETE GRÁTIS</S.Promo>
        <S.Description>para os primeiros 50 pedidos</S.Description>
      </S.Box>

    </S.SectionDescription>
  );
}