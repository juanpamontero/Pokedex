import { Text, StyleSheet } from "react-native";
import theme from "../assets/theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
    fontFamily: theme.font.main
  },
  // font weights
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  semibold: {
    fontWeight: theme.fontWeights.semibold,
  },
  ligth: {
    fontWeight: theme.fontWeights.normal,
  },

  // font sizes
  big: {
    fontSize: theme.fontSizes.big,
  },
  medium: {
    fontSize: theme.fontSizes.medium,
  },
  small: { fontSize: theme.fontSizes.small },

  // colors
  textPrimary: {
    color: theme.colors.textPrimary,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
});

export const StyledText = ({
  children,
  bold,
  semibold,
  ligth,
  big,
  medium,
  small,
  textPrimary,
  textSecondary,
}) => {
  const textStyle = [
    styles.text,
    bold && styles.bold,
    semibold && styles.semibold,
    ligth && styles.ligth,
    big && styles.big,
    medium && styles.medium,
    small && styles.small,
    textPrimary && styles.textPrimary,
    textSecondary && styles.textSecondary,
  ];

  return <Text style={textStyle}>{children}</Text>;
};
