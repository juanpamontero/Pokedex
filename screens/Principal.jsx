import { useFetch } from "../services/Fetch";
import { Text, View, StyleSheet } from "react-native";
import Loader from "../components/Loader";
import PrintPokemons from "../components/print/PrintPokemons";
import Constants from "expo-constants";

const Principal = () => {
  const { data, error, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  if (loading) {
    return (
      <View>
        <Loader />
      </View>
    );
  } else {
    if (error !== null) {
      return (
        <View>
          <Text>Error</Text>;
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <PrintPokemons pokemonData={data} />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});

export default Principal;
