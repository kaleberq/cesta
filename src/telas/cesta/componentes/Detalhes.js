import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";
import { estilos } from "../style";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}
