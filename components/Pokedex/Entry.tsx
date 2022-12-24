import TypeRender from "../Type/TypeRender";
import { View } from "react-native";
import colors from "../../colors";

type PokedexEntry = { name: string };
const Entry = (props: { pokedexEntry: PokedexEntry }) => {
  const { pokedexEntry } = props;
  return (
    <View style={{ padding: 10, backgroundColor: colors.primary }}>
      <TypeRender typeName1="fire" typeName2="flying" />
    </View>
  );
};
export default Entry;
