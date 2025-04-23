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
  card: {
    minWidth: '25%',
    maxWidth: '100%',
    height: "auto",
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_main:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    height: 'auto',
  }
});