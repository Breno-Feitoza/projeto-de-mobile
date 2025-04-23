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
  buttonContainer: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textInput: {
    height: 40,
    borderColor: '#3A6F47',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: "lora, serif",
  },
});