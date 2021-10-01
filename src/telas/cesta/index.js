import React from "react";
import { Image, Text, View } from "react-native";

import topo from "../../../assets/topo.png";

import logo from "../../../assets/logo.png";

import { estilos } from "./style";

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}
