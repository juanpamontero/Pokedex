import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  //   horizontal align
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  aligBaseline: {
    alignItems: "baseline",
  },
  aligStretch: {
    alignItems: "stretch",
  },
  //   vertical align
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
});

const Row = ({
  children,
  alignCenter,
  alignEnd,
  aligBaseline,
  aligStretch,
  justifyCenter,
  justifyEnd,
  justifyBetween,
  justifyAround,
  justifyEvenly,
}) => {
  const rowStyle = [
    styles.row,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    aligBaseline && styles.aligBaseline,
    aligStretch && styles.aligStretch,
    justifyCenter && styles.justifyCenter,
    justifyEnd && styles.justifyEnd,
    justifyBetween && styles.justifyBetween,
    justifyAround && styles.justifyAround,
    justifyEvenly && styles.justifyEvenly,
  ];

  return <View style={rowStyle}>{children}</View>;
};

export default Row;
