import { Button, Text, View, StyleSheet } from "react-native";

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  value: number;
  onPassValue: () => void;
}

const Counter = ({
  handleIncrement,
  handleDecrement,
  value,
  onPassValue,
}: iCounter) => {
  return (
    <View>
      <Text style={styles.text}>Umur: {value}</Text>

      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title="Pass Value" onPress={onPassValue} />
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    margin:10
  }
});




export default Counter;