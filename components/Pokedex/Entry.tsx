import TypeRender from "../Type/TypeRender";
import PokemonSprite from "./PokemonSprite";
import { View, Text, StyleSheet } from "react-native";
import colors, { alpha } from "../../colors";
import sizes from "../../sizes";

type PokedexEntry = { name: string };
const Entry = (props: { pokedexEntry: PokedexEntry }) => {
  const { pokedexEntry } = props;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.dataContainer}>
        <Text style={styles.pokemonName}>Name</Text>
        <Text style={styles.pokemonDexNumber}>#000</Text>
        <TypeRender typeName1="water" typeName2="dark" />
      </View>
      <PokemonSprite pokemonSpriteId={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonName: {
    color: colors.light,
    fontWeight: "bold",
    fontSize: sizes.fonts.medium,
  },
  pokemonDexNumber: {
    color: colors.light,
    fontStyle: "italic",
  },
  dataContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  entryContainer: {
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Entry;
