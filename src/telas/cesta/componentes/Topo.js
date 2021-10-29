import React from "react";

import { Image } from "react-native";

import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

import { estilos } from "../style";

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}
