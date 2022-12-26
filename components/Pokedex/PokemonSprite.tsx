import { View, Image } from "react-native";
import colors, { alpha } from "../../colors";
const PokemonSprite = ({ pokemonSpriteId }: { pokemonSpriteId: number }) => {
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 100,
          backgroundColor: alpha("secondary", "thin"),
        }}
      />
    </View>
  );
};
export default PokemonSprite;
