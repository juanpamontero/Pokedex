import { View, Image, StyleSheet } from "react-native";
import Row from "./Row";
import { StyledText } from "./Textos";

const SeeAbout = ({ pokemonData }) => {
  const types = pokemonData.types;
  const stats = pokemonData.stats;
  return (
    <View style={styles.container}>
      {/* {console.log(types)} */}
      {/* {console.log(stats)} */}
      <Image
        source={{ uri: pokemonData.sprites.other.home.front_default }}
        style={styles.img}
      />
      <View>
        <StyledText textSecondary big semibold>
          {pokemonData.name}
        </StyledText>
      </View>
      <StyledText textSecondary>Types</StyledText>
      <Row>
        {types.map((type) => (
          <View key={type.type.name} style={styles.itemTypes}>
            <StyledText textSecondary>{type.type.name}</StyledText>
          </View>
        ))}
      </Row>
      {/* <View style={styles.cotainerType}>
        {types.map((type) => (
          <View key={type.type.name} style={styles.itemTypes}>
            <StyledText textSecondary>{type.type.name}</StyledText>
          </View>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  itemTypes: {
    minWidth: "40%",
    alignItems: "center",
  },
});

export default SeeAbout;
