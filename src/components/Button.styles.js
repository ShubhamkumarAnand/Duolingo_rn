import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 2,
    height: 50,
    borderBottomWidth: 5,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    marginTop: 10,
    borderColor: "#58CC02",
    backgroundColor: "#57A600",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  disabledButton: {
    borderColor: "grey",
    backgroundColor: "lightgrey",
  },
});

export default styles;
