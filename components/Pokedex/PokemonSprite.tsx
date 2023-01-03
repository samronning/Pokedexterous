import { View, Image } from "react-native";
import { memo } from "react";
import colors, { alpha } from "../../colors";
const PokemonSprite = ({
  pokemonSpeciesName,
}: {
  pokemonSpeciesName: string;
}) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        margin: 10,
      }}
    >
      <Image
        resizeMode="contain"
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
export default memo(PokemonSprite);
