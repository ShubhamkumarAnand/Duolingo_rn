import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import icon from './assets/icon.png'

const App = () => {
  const appName = 'Duolingo'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the {appName}!</Text>
      <Text style={styles.text} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Image source={{
        uri: "https://avatars.githubusercontent.com/u/56271682?v=4"
      }} alt='splash-icon' style={{width: 60, height: 100, backgroundColor:'blue'}} resizeMode='repeat'/>
      <TextInput placeholder='Email'/>
      <StatusBar style="auto"/>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '900',
    fontSize: 21,
    marginVertical: 10,
    padding: 5
  }
});
