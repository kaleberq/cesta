import React from "react";

import Texto from "../../../componentes/Texto";
import { View, Image } from "react-native";
import { estilos } from "../style";

export default function Itens({ titulo, lista }) {
  return (
    <>
      <Texto style={estilos.tituloProdutos}>{titulo}</Texto>
      {lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />

            <Texto style={estilos.nomeProduto}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}
