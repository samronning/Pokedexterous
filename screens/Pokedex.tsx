import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import commonstyles from "../commonstyles";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState({});
  return (
    <View style={commonstyles.centeredView}>
      <Text style={commonstyles.primaryCenteredText}>Pokedex</Text>
    </View>
  );
};
export default Pokedex;
