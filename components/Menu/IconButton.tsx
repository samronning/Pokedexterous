import { Pressable, Text, GestureResponderEvent } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors, { alpha } from "../../colors";
import sizes from "../../sizes";
import commonstyles from "../../commonstyles";
type IconButtonProps = {
  text?: string;
  iconName: keyof typeof FontAwesome.glyphMap;
  color: keyof typeof colors;
  highlightColor?: keyof typeof colors;
  size?: keyof typeof sizes.icon;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};
const IconButton: React.FC<IconButtonProps> = (props) => {
  const { text, iconName, color, highlightColor, size, onPress } = props;
  const chosenSize = size ? sizes.icon[size] : sizes.icon.medium;
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: alpha(highlightColor || color, "thin"),
        radius: chosenSize,
      }}
      style={{
        width: chosenSize * 2,
        height: chosenSize * 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome name={iconName} color={colors[color]} size={chosenSize} />
      {text && (
        <Text style={{ color: colors[color], textAlign: "center" }}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default IconButton;
export { IconButtonProps };
