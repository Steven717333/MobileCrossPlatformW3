import { View, Text, StyleSheet } from "react-native";

interface ProfileProps {
  name: string;
  age: number;
}

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo nama ku, {name}</Text>
      <Text style={styles.text}>Umur ku, {age}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});