import {
  Pressable,
  Text,
  View,
  Animated,
  TransformsStyle,
  GestureResponderEvent,
  RotateTransform,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors, { alpha } from "../../colors";
import sizes from "../../sizes";
import { keys } from "lodash";

type Transforms = Animated.WithAnimatedArray<RotateTransform>;

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;
type MaterialCommunityName = keyof typeof MaterialCommunityIcons.glyphMap;
type IconName =
  | FontAwesomeName
  | { materialName: MaterialCommunityName | undefined };
const PackLoader = ({
  name,
  color,
  size,
}: {
  name: IconName;
  color: string;
  size: number;
}) => {
  if (typeof name === "string") {
    return <FontAwesome name={name} color={color} size={size} />;
  } else {
    if (name.materialName) {
      return (
        <MaterialCommunityIcons
          name={name.materialName}
          color={color}
          size={size}
        />
      );
    }
  }
  return <Text>No Image</Text>;
};

type IconButtonProps = {
  text?: string;
  animatedTransform?: Transforms;
  iconName: IconName;
  color: keyof typeof colors;
  highlightColor?: keyof typeof colors;
  size?: keyof typeof sizes.icon;
  bold?: boolean;
  border?: boolean;
  margin?: number;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};
const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    text,
    animatedTransform,
    iconName,
    color,
    highlightColor,
    size,
    bold,
    border,
    margin,
    onPress,
  } = props;
  const chosenSize = size ? sizes.icon[size] : sizes.icon.medium;
  const chosenFontSize = size ? sizes.fonts[size] : sizes.fonts.medium;
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: alpha(highlightColor || color, "thin"),
        radius: 100,
      }}
      style={{
        margin: margin || 2,
      }}
    >
      <Animated.View
        style={{
          transform: animatedTransform,
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <PackLoader name={iconName} color={colors[color]} size={chosenSize} />
      </Animated.View>
      {text && (
        <Text
          style={{
            color: colors[color],
            textAlign: "center",
            paddingHorizontal: 1,
            fontSize: chosenFontSize,
            fontWeight: bold ? "bold" : "normal",
            borderWidth: border ? 2 : 0,
            borderColor: colors[color],
          }}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default IconButton;
export { IconButtonProps, IconName };
