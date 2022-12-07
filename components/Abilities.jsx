import { View } from "react-native";

const HidenAbilities = () => {};

const NoHidenAbilities = () => {};

export const Abilities = ({ habilities }) => {
  return (
    <View>
      <HidenAbilities />
      <NoHidenAbilities />
    </View>
  );
};
