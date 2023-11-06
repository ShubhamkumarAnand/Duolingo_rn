import { View, Text } from "react-native";
import styles from "./App.styles";
import OptionContainer from "./src/components/OptionsContainer";
import question from "./assets/data/oneQuestionWithOption";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Button from "./src/components/Button";

const App = () => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => console.warn("Pressed");
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <OptionContainer
            key={option.id}
            imageUrl={option.image}
            name={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button onPress={onButtonPress} text="Check" disabled={!selected} />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
