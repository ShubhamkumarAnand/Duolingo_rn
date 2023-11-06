import { Pressable, Text } from "react-native";
import styles from "./Button.styles";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonContainer, disabled ? styles.disabledButton : {}]}
      disabled={disabled}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
