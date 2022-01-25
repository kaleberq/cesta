import React from "react";
import { ScrollView, View } from "react-native";

import Topo from "../Cesta/componentes/Topo";

import Detalhes from "../Cesta/componentes/Detalhes";
import { estilos } from "./style";
import Itens from "./componentes/Itens";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />

      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
}
