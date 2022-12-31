import { View, Image } from "react-native";
import colors, { alpha } from "../../colors";
const PokemonSprite = ({
  pokemonSpeciesName,
}: {
  pokemonSpeciesName: string;
}) => {
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: `https://img.pokemondb.net/sprites/sword-shield/icon/${pokemonSpeciesName}.png`,
        }}
      />
    </View>
  );
};
export default PokemonSprite;
