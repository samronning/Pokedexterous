import TypeRender from "../Type/TypeRender";
import { TypeName } from "../Type/Types";
import PokemonSprite from "./PokemonSprite";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../colors";
import sizes from "../../sizes";
import { padNumberZeroes } from "../../helper";
import Stats from "../Stats/Stats";
import { memo } from "react";
import EntryWrapper from "./EntryWrapper";

type PokedexEntry = {
  name: string;
  type_names: string;
  dex_number: number;
  base_stats: string;
  base_stats_total: number;
  base_stats_avg: number;
  key: string;
};
const Entry = (props: { pokedexEntry: PokedexEntry }) => {
  const { pokedexEntry } = props;
  const { type_names, name, dex_number, base_stats } = pokedexEntry;
  const getTypeNames: (typeNames: string) => Array<TypeName> = (
    typeNames: string
  ) => {
    const ids = typeNames.split(",") as Array<TypeName>;
    return ids;
  };
  const [typeName1, typeName2] = getTypeNames(type_names);
  return (
    <EntryWrapper>
      {[
        <View key="entryData" style={styles.dataContainer}>
          <View style={styles.basicDataContainer}>
            <Text style={styles.pokemonName}>
              {name[0].toUpperCase() + name.slice(1)}
            </Text>
            <Text style={styles.pokemonDexNumber}>{`#${padNumberZeroes(
              dex_number,
              4
            )}`}</Text>
            <TypeRender typeName1={typeName1} typeName2={typeName2} />
          </View>
          <Stats stats={base_stats.split(",").map((str) => Number(str))} />
        </View>,
        <PokemonSprite pokemonSpeciesName={name} key="entrySprite" />,
      ]}
    </EntryWrapper>
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
});

export default memo(Entry);
export { PokedexEntry };
