import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C6F4D6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "Impact, sans-serif",
    letterSpacing: 2,
    color: "#3A6F47",
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: "lora, serif",
    letterSpacing: 1.5,
  },
  buttonContainer: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});