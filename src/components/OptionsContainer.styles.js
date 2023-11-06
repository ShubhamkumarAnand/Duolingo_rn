import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: "lightgray",
    width: "48%",
    height: "48%",
    alignItems: "center",
  },
  optionImage: { width: "100%", flex: 1 },
  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "#85D501",
    fontWeight: "bold",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#85D501",
  },
});

export default styles;
