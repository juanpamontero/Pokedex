import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFetch } from "../services/Fetch";
import Loader from "../components/Loader";
import SeeAbout from "../components/SeeAbout";

const About = ({ route }) => {
  const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
    },
  });

  const { data, error, loading } = useFetch(route.params.url);

  return (
    <View style={styles.container}>
      {/* {console.log(route.params.url)}
      <Text>About</Text> */}
      {loading && <Loader />}
      {error && <Text>Error</Text>}
      {data && <SeeAbout pokemonData={data} />}
    </View>
  );
};

export default About;
