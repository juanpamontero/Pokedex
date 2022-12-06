import { View, FlatList, Text } from "react-native";
import { Card } from "../Card";
import { PokemonName } from "../Textos";

const PrintPokemons = ({ pokemonData }) => {
  return (
    <FlatList
      data={pokemonData.results}
      renderItem={({ item }) => <Card name={item.name} url={item.url} />}
      keyExtractor={(item) => item.name}
    />
  );
};

export default PrintPokemons;
