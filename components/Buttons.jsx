import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableHighlight,
} from "react-native";

const styles = StyleSheet.create({
  seeMor: {
    backgroundColor: "#5E8C61",
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    padding: 10,
  },
});

export const ButtonMor = ({ card, onPress }) => {
  // return <Button title={text} onPress={onPress} color="#5E8C61" />;
  // return (
  //   <TouchableOpacity style={styles.seeMor} onPress={onPress}>
  //     <Text style={styles.text}>{text}</Text>
  //   </TouchableOpacity>
  // );
  return (
    <TouchableHighlight style={styles.seeMor} onPress={onPress}>
      {card}
    </TouchableHighlight>
  );
};
