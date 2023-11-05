import { View, Text } from "react-native";
import styles from "./App.styles";
import OptionContainer from "./src/components/OptionsContainer";
import question from "./assets/data/oneQuestionWithOption";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <OptionContainer key={option.id} imageUrl={option.image} name={option.text} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
