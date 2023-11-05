import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const appName = 'Duolingo'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the {appName}!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 21
  }
});
