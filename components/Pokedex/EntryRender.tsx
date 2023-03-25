import { useCallback } from "react";
import { FlatList } from "react-native";
import Entry, { PokedexEntry } from "./Entry";
import NoPokemonFound from "./NoPokemonFound";
import ListEntryContainer, {
  ListEntryHeight,
} from "../Common/ListEntryContainer";

const POKEDEX_ENTRY_HEIGHT = ListEntryHeight.tall;

type EntryRenderProps = { pokedexEntries: PokedexEntry[] };
const EntryRender = (props: EntryRenderProps) => {
  const { pokedexEntries } = props;
  const renderItem = useCallback(
    ({ item }: { item: PokedexEntry }) => (
      <ListEntryContainer height={POKEDEX_ENTRY_HEIGHT}>
        <Entry pokedexEntry={item} />
      </ListEntryContainer>
    ),
    []
  );
  return (
    <FlatList
      style={{ width: "100%" }}
      data={pokedexEntries}
      renderItem={renderItem}
      ListEmptyComponent={NoPokemonFound}
      getItemLayout={(data, index) => ({
        length: POKEDEX_ENTRY_HEIGHT,
        offset: POKEDEX_ENTRY_HEIGHT * index,
        index,
      })}
    />
  );
};

export default EntryRender;
