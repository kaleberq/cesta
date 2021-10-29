import React from "react";
import { View } from "react-native";

import Topo from "../Cesta/componentes/Topo";

import Detalhes from "../Cesta/componentes/Detalhes";

import { estilos } from "./style";

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />

      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}
