import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import EntryRender from "../components/Pokedex/EntryRender";
import commonstyles from "../commonstyles";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState({});
  return (
    <View style={commonstyles.centeredView}>
      <EntryRender />
    </View>
  );
};
export default Pokedex;
