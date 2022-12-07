import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StyledText } from "./Textos";
import PrintStats from "./print/PrintStats";
import PrintTypes from "./print/PrintTypes";
import PokedataBox from "./PokedataBox";

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
          />
          <PrintTypes types={types} />
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
