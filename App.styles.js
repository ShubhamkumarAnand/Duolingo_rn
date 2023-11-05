import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center", padding: 15, marginTop: 30 },
  text: { fontWeight: "900", fontSize: 20, alignSelf: "stretch" },
  optionsContainer: {
    padding: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
