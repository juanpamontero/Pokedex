import { View, StyleSheet } from "react-native";
import { StyledText } from "./Textos";
import theme from "../assets/theme";
import { capitalized } from "../services/stringPasrser";
import Row from "./Row";
import PrintTypes from "./print/PrintTypes";

const PokedataBox = ({ name, weight, height, type }) => {
  return (
    <View style={styles.box}>
      <StyledText big bold>
        {capitalized(name)}
      </StyledText>
      <PrintTypes types={type} />
      <View>
        <Row>
          <View style={styles.itemTypes}>
            <StyledText>Weight</StyledText>
            <StyledText>{`${weight / 10} Kg`}</StyledText>
          </View>
          <View style={styles.itemTypes}>
            <StyledText>Height</StyledText>
            <StyledText>{`${height / 10} m`}</StyledText>
          </View>
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    width: "90%",
    borderRadius: 10,
  },
  itemTypes: {
    minWidth: "40%",
    alignItems: "center",
  },
});

export default PokedataBox;
