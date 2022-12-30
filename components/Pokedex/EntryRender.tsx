import { FlatList } from "react-native";
import Entry, { PokedexEntry } from "./Entry";

type EntryRenderProps = { pokedexEntries: PokedexEntry[] };
const EntryRender = (props: EntryRenderProps) => {
  const { pokedexEntries } = props;
  return (
    <FlatList
      style={{ width: "100%" }}
      data={pokedexEntries}
      renderItem={({ item }) => <Entry pokedexEntry={item} />}
    />
  );
};

export default EntryRender;
