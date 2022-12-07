import { View, StyleSheet } from "react-native";
import theme from "../assets/theme";
import { capitalized } from "../services/stringPasrser";
import { StyledText } from "./Textos";

const types = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
];

const colors = [
  "#A0A868", // normal
  "#F55A34", // fire
  "#3EB6EB", // water
  theme.colors.secondary, // grass
  "#DCF222", // electric
  "#51D8EB", // ice
  "#CF0000", // fighting
  "#B44AE3", // poison
  "#914A03", // ground
  "#A382E3", // flying
  "#CF3370", // psychic
  "#43B830", // bug
  "#C87900", // rock
  "#9970C4", // ghost
  "#33290D", // dark
  "#4F1899", // dragon
  "#70869F", // steel
  "#E682DC", // fairy
];

const PokemonType = ({ type }) => {
  const index = types.indexOf(type);
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: colors[index],
        width: "100%",
        padding: 3,
        alignItems: "center",
      }}
    >
      <StyledText>{capitalized(type)}</StyledText>
    </View>
  );
};

export default PokemonType;
