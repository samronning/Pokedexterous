import { FlatList, Text } from "react-native";
import Entry from "./Entry";

const EntryRender = () => {
  return (
    <FlatList
      style={{ width: "90%" }}
      data={[{ pokedexEntry: "Hello", key: "1" }]}
      renderItem={({ item }) => <Entry pokedexEntry={{ name: "charizard" }} />}
    />
  );
};

export default EntryRender;
