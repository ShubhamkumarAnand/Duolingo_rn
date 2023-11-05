import styles from "./OptionsContainer.styles";
import { Text, View, Image } from "react-native";

/**
 * Returns the each option for the optionals components
 * @param {string} imageUrl - A string Url
 * @param {string} name - A string name
 */
const OptionContainer = ({ imageUrl, name }) => {
  return (
    <View style={styles.optionContainer}>
      <Image style={styles.optionImage} source={{ uri: imageUrl }} alt="option-image" resizeMode="contain" />
      <Text style={styles.optionText}>{name}</Text>
    </View>
  );
};

export default OptionContainer;
