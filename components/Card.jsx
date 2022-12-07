import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import { StyledText } from "./Textos";
import { useFetch } from "../services/Fetch";
import Loader from "./Loader";
import { useNavigation } from "@react-navigation/native";
import theme from "../assets/theme";
import { capitalized } from "../services/stringPasrser";

export const Card = ({ name, url }) => {
  const navigate = useNavigation();

  const styles = StyleSheet.create({
    image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginTop: -40,
    },
    card: {
      borderRadius: 10,
      alignItems: "center",
    },
    btn: {
      margin: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
      marginTop: 30,
    },
  });

  const { data, loading, error } = useFetch(url);

  const clickMor = () => {
    navigate.navigate("AboutStack", {
      url: url,
    });
  };
  return (
    <TouchableHighlight style={styles.btn} onPress={clickMor}>
      <View style={styles.card}>
        {loading && <Loader />}
        {error && <Text>Error</Text>}
        {data && (
          <Image
            source={{ uri: data.sprites.other.home.front_default }}
            style={styles.image}
          />
        )}
        {/* <PokemonName name={name} /> */}
        <StyledText bold big>
          {capitalized(name)}
        </StyledText>
      </View>
    </TouchableHighlight>
  );
};
