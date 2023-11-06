import styles from "./OptionsContainer.styles";
import { Text, Image, Pressable } from "react-native";

/**
 * Returns the each option for the optionals components
 * @param {string} imageUrl - A string Url
 * @param {string} name - A string name
 * @param {boolean} isSelected - A string name
 */

const OptionContainer = ({ imageUrl, name, isSelected, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
      <Image style={styles.optionImage} source={{ uri: imageUrl }} alt="option-image" resizeMode="contain" />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>{name.toUpperCase()}</Text>
    </Pressable>
  );
};

export default OptionContainer;
