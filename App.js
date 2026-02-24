import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Counter from "./Counter";
import Profile from "./profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [profileName, setProfileName] = useState("");
  const [profileAge, setProfileAge] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setProfileName(name);
    setProfileAge(count);
  };

  return (
    <View style={styles.container}>

      <Profile name={profileName} age={profileAge} />

      <TextInput
        placeholder="Input Nama"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      <Counter
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        onPassValue={handlePassValue}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    marginBottom: 20,
    padding: 8,
  },
});