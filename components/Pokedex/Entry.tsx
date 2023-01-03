import TypeRender from "../Type/TypeRender";
import PokemonSprite from "./PokemonSprite";
import { View, Text, StyleSheet } from "react-native";
import colors, { alpha } from "../../colors";
import types from "../Type/Types";
import sizes from "../../sizes";
import { padNumberZeroes } from "../../helper";
import Stats from "../Stats/Stats";
import { memo } from "react";

type PokedexEntry = {
  name: string;
  type_ids: string;
  dex_number: number;
  base_stats: string;
  base_stats_total: number;
  base_stats_avg: number;
  key: string;
};
const Entry = (props: { pokedexEntry: PokedexEntry }) => {
  const { pokedexEntry } = props;
  const { type_ids, name, dex_number, base_stats } = pokedexEntry;
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
        <View style={styles.basicDataContainer}>
          <Text style={styles.pokemonName}>
            {name[0].toUpperCase() + name.slice(1)}
          </Text>
          <Text style={styles.pokemonDexNumber}>{`#${padNumberZeroes(
            dex_number,
            4
          )}`}</Text>
          <TypeRender typeId1={typeId1} typeId2={typeId2} />
        </View>
        <Stats stats={base_stats.split(",").map((str) => Number(str))} />
      </View>
      <PokemonSprite pokemonSpeciesName={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonName: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: sizes.fonts.medium,
    maxWidth: 120,
  },
  pokemonDexNumber: {
    color: colors.black,
    fontStyle: "italic",
    fontSize: sizes.fonts.small,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  basicDataContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  entryContainer: {
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
  },
});

export default memo(Entry);
export { PokedexEntry };
