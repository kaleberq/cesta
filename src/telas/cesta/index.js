import React from "react";
import { Image, Text } from "react-native";

import topo from "../../assets/topo.png";

import { estilos } from "./style";

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
    </>
  );
}
