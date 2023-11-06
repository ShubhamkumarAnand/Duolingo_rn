import { View, Text, Alert } from "react-native";
import styles from "./App.styles";
import OptionContainer from "./src/components/OptionsContainer";
import questions from "./assets/data/imageMultipleChoiceQuestions";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Button from "./src/components/Button";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("Congratulation! All Correct 🤯");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selectedOption.correct) {
      Alert.alert("Correct Option!");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      Alert.alert("Wrong Option!");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <OptionContainer
            key={option.id}
            imageUrl={option.image}
            name={option.text}
            isSelected={selectedOption?.id === option.id}
            onPress={() => setSelectedOption(option)}
          />
        ))}
      </View>
      <Button onPress={onButtonPress} text="Check" disabled={!selectedOption} />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
