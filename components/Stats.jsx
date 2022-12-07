import { View, Text, StyleSheet } from "react-native";
import theme from "../assets/theme";
import { StyledText } from "./Textos";
import { capitalized } from "../services/stringPasrser";

const Stats = ({ data, statName, mayor }) => {
  const exam = data;
  const base = mayor;
  return (
    <View style={styles.container}>
      <StyledText textSecondary>{capitalized(statName)}</StyledText>
      <View style={styles.graphContainer}>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
            width: `${(exam * 100) / base}%`,
            alignItems: "center",
          }}
        >
          <StyledText>{exam}</StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  graphContainer: {
    minWidth: "100%",
    borderRadius: 10,
  },
  item: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});

export default Stats;
