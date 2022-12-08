import { View, StyleSheet } from "react-native";
import PokemonType from "../PokemonType";
import Row from "../Row";

const PrintTypes = ({ types }) => {
  return (
    <View>
      <Row>
        {types.map((type) => (
          <View key={type.type.name} style={styles.itemTypes}>
            <PokemonType type={type.type.name} />
          </View>
        ))}
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  itemTypes: {
    minWidth: "40%",
    alignItems: "center",
    margin: 5,
  },
});

export default PrintTypes;
