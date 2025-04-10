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
  cardContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 15,
    fontFamily: "lora, serif",
    color: '#333',
  },
});