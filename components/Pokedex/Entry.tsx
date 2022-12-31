import TypeRender from "../Type/TypeRender";
import PokemonSprite from "./PokemonSprite";
import { View, Text, StyleSheet } from "react-native";
import colors, { alpha } from "../../colors";
import types from "../Type/Types";
import sizes from "../../sizes";
import { padNumberZeroes } from "../../helper";

type PokedexEntry = { name: string; type_ids: string; dex_number: number };
const Entry = (props: { pokedexEntry: PokedexEntry }) => {
  const { pokedexEntry } = props;
  const { type_ids, name, dex_number } = pokedexEntry;
  const getTypeIds: (type_ids: string) => Array<keyof typeof types> = (
    type_ids: string
  ) => {
    const ids = type_ids.split(",") as Array<keyof typeof types>;
    return ids;
  };
  const [typeId1, typeId2] = getTypeIds(type_ids);
  return (
    <View style={styles.entryContainer}>
      <View style={styles.dataContainer}>
        <Text style={styles.pokemonName}>
          {name[0].toUpperCase() + name.slice(1)}
        </Text>
        <Text style={styles.pokemonDexNumber}>{`#${padNumberZeroes(
          dex_number,
          4
        )}`}</Text>
        <TypeRender typeId1={typeId1} typeId2={typeId2} />
      </View>
      <PokemonSprite pokemonSpeciesName={name} />
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
    fontSize: sizes.fonts.small,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});

export default Entry;
export { PokedexEntry };
