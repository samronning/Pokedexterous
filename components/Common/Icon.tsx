import {
  View,
  Animated,
  TransformsStyle,
  Text,
  RotateTransform,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../colors";
import sizes from "../../sizes";

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
type IconProps = {
  text?: string;
  animatedTransform?: Transforms;
  iconName: IconName;
  color: keyof typeof colors;
  size?: keyof typeof sizes.icon;
  bold?: boolean;
  border?: boolean;
};
const Icon = (props: IconProps) => {
  const { text, animatedTransform, iconName, color, size, bold, border } =
    props;
  const chosenSize = size ? sizes.icon[size] : sizes.icon.medium;
  const chosenFontSize = size ? sizes.fonts[size] : sizes.fonts.medium;
  return (
    <View>
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
            maxWidth: 100,
          }}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

export { IconProps, IconName };
export default Icon;
