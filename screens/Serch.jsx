import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import theme from "../assets/theme";
import { useState } from "react";
import Row from "../components/Row";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  input: {
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    height: 40,
    margin: 12,
    borderRadius: 5,
    minWidth: "70%",
  },
  btnSearch: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    minWidth: "20%",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});

const Serch = () => {
  const [pkemonName, setPkemonName] = useState("");

  const handleClickSearch = () => {
    // console.log(pkemonName);
    // console.log("click");
  };

  return (
    <View style={styles.container}>
      <Row alignCenter justifyCenter>
        <TextInput
          style={styles.input}
          placeholder="Pokemon Name"
          onChangeText={(txt) => setPkemonName(txt)}
        />
        <TouchableOpacity style={styles.btnSearch} onPress={handleClickSearch}>
          <Ionicons name="search" size={24} color={theme.colors.secondary} />
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default Serch;
