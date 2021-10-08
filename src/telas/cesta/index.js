import React from "react";
import { Image, Text, View } from "react-native";

import Texto from "../../componentes/Texto";

import topo from "../../../assets/topo.png";

import logo from "../../../assets/logo.png";

import { estilos } from "./style";

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}
