import { View, Image } from "react-native";
const NoPokemonFound = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Image
        source={require("../../assets/unown.webp")}
        style={{ width: "100%", height: 500 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default NoPokemonFound;
