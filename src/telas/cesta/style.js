import { StyleSheet, Dimensions } from "react-native";

const widht = Dimensions.get("screen").width;

export const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * widht,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
