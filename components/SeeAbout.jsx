import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StyledText } from "./Textos";
import PrintStats from "./print/PrintStats";
import PokedataBox from "./PokedataBox";
import { Abilities } from "./Abilities";

const SeeAbout = ({ pokemonData }) => {
  const types = pokemonData.types;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: pokemonData.sprites.other.home.front_default }}
            style={styles.img}
          />
          <PokedataBox
            name={pokemonData.name}
            height={pokemonData.height}
            weight={pokemonData.weight}
            type={pokemonData.types}
          />
          <Abilities habilities={pokemonData.abilities} />
          <PrintStats dataStats={pokemonData.stats} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    marginBottom: 10,
    margin: 3,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  spaceStats: {
    marginTop: 10,
  },
});

export default SeeAbout;
