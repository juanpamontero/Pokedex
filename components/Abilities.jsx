import { View, StyleSheet } from "react-native";
import theme from "../assets/theme";
import Row from "./Row";
import { StyledText } from "./Textos";
import { capitalized } from "../services/stringPasrser";

const styles = StyleSheet.create({
  containerAbilities: {
    alignItems: "center",
  },
  listItem: {
    minWidth: "40%",
    alignItems: "center",
    margin: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 3,
  },
});

const HidenAbilities = ({ list }) => {
  return (
    <View>
      <Row>
        {list.map((item) => {
          if (item.is_hidden) {
            return (
              <View style={styles.listItem} key={item.ability.name}>
                <StyledText>{capitalized(item.ability.name)}</StyledText>
              </View>
            );
          }
        })}
      </Row>
    </View>
  );
};

const NoHidenAbilities = ({ list }) => {
  return (
    <View>
      <Row>
        {list.map((item) => {
          if (!item.is_hidden) {
            return (
              <View style={styles.listItem} key={item.ability.name}>
                <StyledText>{capitalized(item.ability.name)}</StyledText>
              </View>
            );
          }
        })}
      </Row>
    </View>
  );
};

export const Abilities = ({ habilities }) => {
  return (
    <View style={styles.containerAbilities}>
      {/* {console.log(habilities)} */}
      <StyledText textSecondary big>
        Abilities
      </StyledText>
      <NoHidenAbilities list={habilities} />
      <StyledText textSecondary big>
        Hiden Abilities
      </StyledText>
      <HidenAbilities list={habilities} />
    </View>
  );
};
