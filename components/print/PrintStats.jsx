import { View, StyleSheet } from "react-native";
import Stats from "../Stats";
import { StyledText } from "../Textos";

const getMayorStat = (stats) => {
  let mayor = stats[0].base_stat;
  stats.forEach((stat) => {
    if (stat.base_stat > mayor) {
      mayor = stat.base_stat;
    }
  });
  return mayor;
};

const totalStats = (stats) => {
  let total = 0;
  stats.forEach((stat) => {
    total += stat.base_stat;
  });
  return total;
};

const PrintStats = ({ dataStats }) => {
  return (
    <View style={styles.container}>
      <StyledText textSecondary big>
        Stats
      </StyledText>
      {dataStats.map((stat) => (
        <View key={stat.stat.name}>
          <Stats
            data={stat.base_stat}
            statName={stat.stat.name}
            mayor={getMayorStat(dataStats)}
          />
        </View>
      ))}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <StyledText textSecondary bold big>
          Total:{totalStats(dataStats)}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 3,
    alignItems: "center",
  },
});

export default PrintStats;
